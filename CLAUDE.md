# Claude Code Instructions

## Development Server Rules

**🚨 CRITICAL: NEVER RUN `npm run dev` OR START DEV SERVERS 🚨**

- **DO NOT** use `npm run dev` in background processes
- **DO NOT** start development servers automatically
- **DO NOT** run any commands that start servers (dev, start, serve, etc.)

### If Dev Server is Needed:
1. **STOP** what you are doing
2. **ASK** the user to start their own dev server
3. Let the user run `npm run dev` themselves
4. Wait for user confirmation before proceeding

### Why This Rule Exists:
- Multiple background dev servers cause port conflicts
- Processes can get stuck and be difficult to kill
- User should control when/how their dev environment runs
- Prevents resource conflicts and system issues

## Allowed Commands:
- `npm run build` ✅
- `npm install` ✅  
- File operations (read, write, edit) ✅
- Git operations ✅

## Project Context:
- **Vite + React + TypeScript** application
- **Tailwind CSS** with custom TruckCorp theme
- **Vercel deployment** ready
- **WordPress plugin integration** via remote script loading

## UI Development Guidelines:

### 🎨 **Design System Rules:**
- **ONLY use design tokens** from the TruckCorp theme in `src/styles.css`
- **NO arbitrary values** (like `bg-[#ff6b35]`) - use `bg-truckcorp-orange-500` instead
- **Consistent color palette**: truckcorp-orange, truckcorp-black, snow, ice, warning colors
- **Typography**: Use theme font families (display, body) and custom font sizes

### 🧩 **Component Standards:**
- **shadcn/ui ONLY** for all UI components (buttons, cards, dialogs, etc.)
- **Lucide React ONLY** for all icons - no other icon libraries
- **Framer Motion** for animations and interactions
- Use `cn()` utility from `src/lib/utils.ts` for conditional classes

### 📐 **Layout Standards:**
- Use `<Layout>` component for all pages (provides container-app centering)
- Max width: 1260px with 16px padding automatically applied
- Consistent spacing using theme design tokens

### 🚫 **What NOT to use:**
- Custom CSS classes outside of Tailwind
- Arbitrary color values
- Other icon libraries (no react-icons, heroicons, etc.)
- Other UI component libraries
- Inline styles