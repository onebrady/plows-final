# TruckCorp Snow & Ice Knowledgebase

A React + Vite application for the TruckCorp Snow & Ice knowledgebase, designed to be embedded in WordPress sites via a custom plugin.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build
```

## 📁 Project Structure

```
plows-final/
├── src/
│   ├── components/     # React components
│   │   └── KbApp.tsx   # Main knowledgebase component
│   ├── data/          
│   │   └── kb.json     # Knowledgebase content
│   ├── entry-client.tsx # App entry point
│   └── styles.css      # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json         # Vercel deployment config
```

## 🌐 Deployment

This app is designed to be deployed on Vercel:

1. Push changes to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on every push to main

## 🔧 WordPress Integration

A separate WordPress plugin (not in this repo) loads this app from Vercel:
- Plugin adds shortcode: `[truckcorp_snow kb="true"]`
- App loads via script tag (no iframe)
- CORS headers configured for cross-origin access

## 🎯 Features

- **Accordion Q&A Interface**: Expandable questions and answers
- **Topic Organization**: Multiple knowledge topics with teasers
- **Glossary Terms**: Quick reference chips for key terms
- **Quick Wins**: Actionable tips for each topic
- **Mobile Responsive**: Works on all device sizes

## 💻 Development

### Environment Variables

Create `.env.local` for local development:
```
VITE_APP_URL=http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Content Management

Edit knowledgebase content in `src/data/kb.json`:

```json
{
  "topics": [
    {
      "slug": "topic-id",
      "title": "Topic Title",
      "teaser": "Brief description",
      "qas": [
        {
          "id": "q1",
          "q": "Question text?",
          "a": "Answer text."
        }
      ],
      "glossary": ["term1", "term2"],
      "quickWins": ["tip1", "tip2"]
    }
  ]
}
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Vercel** - Hosting platform