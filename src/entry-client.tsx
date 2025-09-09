import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./components/Homepage";
import { Knowledgebase } from "./components/knowledgebase/Knowledgebase";
import { WordPressIsolation } from "./components/WordPressIsolation";
import "./styles.css";

// Simple routing component
function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "knowledgebase">(
    "home"
  );

  // Listen for navigation events
  React.useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      setCurrentPage(event.detail.page);
    };

    window.addEventListener("navigate" as any, handleNavigation);
    return () =>
      window.removeEventListener("navigate" as any, handleNavigation);
  }, []);

  return (
    <WordPressIsolation>
      {currentPage === "knowledgebase" ? <Knowledgebase /> : <Homepage />}
    </WordPressIsolation>
  );
}

// Navigation helper function
(window as any).navigateTo = (page: string) => {
  window.dispatchEvent(new CustomEvent("navigate", { detail: { page } }));
  // Ensure viewport is scrolled to top when navigating between pages
  try {
    // Scroll window to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // If Shadow DOM is used, also try scrolling the host container into view
    const host = document.querySelector('.tc-snow-container') as HTMLElement | null;
    if (host) host.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'auto' });
  } catch {}
};

// Function to initialize the app
function initApp() {
  console.log("TruckCorp Snow: Initializing app...");

  // Look for all containers with the tc-snow-container class
  const containers = document.querySelectorAll(".tc-snow-container");
  console.log("TruckCorp Snow: Found containers:", containers.length);

  if (containers.length === 0) {
    console.log("TruckCorp Snow: No containers found, will retry...");
    // Retry after a short delay in case containers are added dynamically
    setTimeout(initApp, 100);
    return;
  }

  containers.forEach((container, index) => {
    // Skip if already initialized
    if (container.hasAttribute("data-tc-initialized")) {
      return;
    }

    console.log(`TruckCorp Snow: Initializing container ${index + 1}`);

    // Get config from data attribute or global variable
    const configAttr = container.getAttribute("data-config");
    let config = {};

    if (configAttr) {
      try {
        config = JSON.parse(configAttr);
      } catch (e) {
        console.error("TruckCorp Snow: Failed to parse config:", e);
      }
    }

    // Check if container has an ID and look for WordPress config
    const containerId = container.id;
    if (containerId) {
      const wpConfigName = "tcSnowConfig_" + containerId.replace(/-/g, "_");
      if ((window as any)[wpConfigName]) {
        config = { ...config, ...(window as any)[wpConfigName] };
        console.log("TruckCorp Snow: Found WordPress config:", wpConfigName);
      }
    }

    // Mark as initialized
    container.setAttribute("data-tc-initialized", "true");

    // Clear loading content
    container.innerHTML = "";

    // Determine if we should mount into a Shadow DOM for isolation (WordPress context)
    const isWordPress =
      (window.location.hostname !== "localhost" &&
        window.location.hostname !== "127.0.0.1") ||
      !!document.getElementById("wpadminbar");

    let mountTarget: Element | DocumentFragment = container;

    try {
      if ((container as HTMLElement).attachShadow && isWordPress) {
        console.log("TruckCorp Snow: Using Shadow DOM isolation for WordPress");
        const shadow = (container as HTMLElement).attachShadow({
          mode: "open",
        });

        // Clone the Tailwind CSS that our bundle injected into <head> into the shadow root
        try {
          const injectedStyle = Array.from(
            document.querySelectorAll("style")
          ).find(
            (el) => el.textContent && el.textContent.includes("tailwindcss v4")
          );
          if (injectedStyle && injectedStyle.textContent) {
            const shadowStyle = document.createElement("style");
            shadowStyle.textContent = injectedStyle.textContent;
            shadow.appendChild(shadowStyle);
          } else {
            console.warn(
              "TruckCorp Snow: Could not find injected Tailwind CSS to clone into Shadow DOM"
            );
          }
        } catch (cssErr) {
          console.warn(
            "TruckCorp Snow: Error cloning CSS into Shadow DOM",
            cssErr
          );
        }

        // Create app mount element inside shadow
        const shadowApp = document.createElement("div");
        shadowApp.className = "truckcorp-snow-app-root";
        shadow.appendChild(shadowApp);
        mountTarget = shadowApp;

        // Mark global so other components can detect shadow usage (to avoid extra head styles)
        (window as any).__TC_SNOW_SHADOW__ = true;
      }

      // Render the app with routing
      const root = createRoot(mountTarget as Element);
      root.render(<App />);
      console.log("TruckCorp Snow: App rendered successfully");
    } catch (error) {
      console.error("TruckCorp Snow: Error rendering app:", error);
      container.innerHTML =
        '<div class="tc-snow-error">Failed to load snow plow knowledgebase.</div>';
    }
  });
}

// Multiple initialization strategies for WordPress compatibility
function tryInit() {
  console.log("TruckCorp Snow: Script loaded, trying to initialize...");
  initApp();
}

// Initialize immediately if DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", tryInit);
} else {
  // DOM already ready, try immediately
  tryInit();
}

// Also try when window loads (fallback)
if (document.readyState !== "complete") {
  window.addEventListener("load", tryInit);
}

// Make initApp globally available for manual triggering if needed
(window as any).tcSnowInit = initApp;

// Make components globally available instead of exporting
(window as any).TruckCorpSnow = {
  Homepage,
  Knowledgebase,
  initApp,
};
