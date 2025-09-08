# TruckCorp Snow & Ice — Vite App + WordPress Plugin

This project provides a **React + Vite** knowledgebase app that will be hosted on Vercel, with a WordPress plugin to embed it on any page.

## Architecture

- **Vite App** (`/app`): React application that builds into static assets
- **WordPress Plugin** (`/wp-plugin`): Simple plugin that loads the app from Vercel
- **Hosting**: App will be deployed to Vercel via GitHub integration

## Development Setup

### Prerequisites
- Node.js 18+ (recommended 20/22)
- npm or pnpm
- Git

### Local Development

1. **Clone the repository**
```bash
git clone [your-repo-url]
cd plows-final
```

2. **Install dependencies**
```bash
cd app
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local if needed
```

4. **Run development server**
```bash
npm run dev
# Opens at http://localhost:5173
```

5. **Build locally to test**
```bash
npm run build
# Creates dist/ folder with production assets
```

## Deployment Workflow

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Root Directory: `app`
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy

Vercel will automatically deploy on every push to main branch.

### Step 3: Configure WordPress Plugin

1. Note your Vercel production URL (e.g., `https://your-project.vercel.app`)
2. Zip the `wp-plugin/truckcorp-snow` folder
3. In WordPress Admin:
   - Plugins → Add New → Upload Plugin
   - Upload and activate **TruckCorp Snow App**
   - Settings → TruckCorp Snow
   - Enter your Vercel URL and save

### Step 4: Use the Shortcode

Add to any WordPress page or post:
```
[truckcorp_snow kb="true"]
```

## Project Structure

```
plows-final/
├── app/                    # Vite React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── data/          # KB content (kb.json)
│   │   └── entry-client.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── vercel.json        # Vercel configuration
├── wp-plugin/             # WordPress plugin
│   └── truckcorp-snow/
│       └── truckcorp-snow.php
├── .github/
│   └── workflows/         # GitHub Actions
│       └── build.yml      # CI/CD pipeline
└── README.md
```

## Key Features

- **GitHub → Vercel Integration**: Automatic deployments on push
- **Cross-origin loading**: App loads from Vercel into WordPress
- **No iframe**: Direct script injection for better integration
- **CORS configured**: Headers set in vercel.json
- **WordPress admin panel**: Configure Vercel URL without code changes
- **CI/CD**: GitHub Actions for build validation

## Environment Variables

For local development (`.env.local`):
```
VITE_APP_URL=http://localhost:5173
```

Vercel will automatically use production URL.

## Next Steps

After the foundation is laid:
1. Customize the knowledgebase content in `app/src/data/kb.json`
2. Style the components in `app/src/components/`
3. Add more features as needed
4. Push changes to GitHub for automatic Vercel deployment

## Troubleshooting

- **Local dev issues**: Ensure Node.js 18+ and all dependencies installed
- **Build failures**: Check GitHub Actions tab for CI errors
- **Vercel deployment**: Check Vercel dashboard for build logs
- **WordPress integration**: Verify CORS headers and Vercel URL in settings