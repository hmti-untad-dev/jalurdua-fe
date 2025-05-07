# HMTI UNTAD Frontend

A React-based frontend project for HMTI UNTAD website using modern tech stack and best practices.

## Tech Stack

- **Framework:** React with TypeScript
- **Build Tool:** Vite
- **Styling:**
  - Tailwind CSS with custom theming
  - OKLCH color system
  - CSS Custom Properties
- **UI Components:** Custom components with Radix UI primitives
- **Routing:** React Router
- **Utilities:**
  - class-variance-authority for component variants
  - clsx & tailwind-merge for className management
- **Code Quality:**
  - ESLint with TypeScript support
  - React Hooks linting
  - React Refresh

## Features

- Light/Dark theme support using CSS custom properties
- Custom color system using OKLCH color space for better color reproduction
- Component system with variants using class-variance-authority
- Client-side routing with React Router
- Responsive design
- Font integration with Google Fonts (Anton, Montserrat, Roboto)
- Type-safe development with TypeScript
- Module alias support (@/ imports)

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Start development server:

```bash
pnpm run dev
```

## Project Structure

```
jalurdua-fe/
├── src/
│   ├── components/
│   │   └── ui/          # UI components with variants (button, etc.)
│   ├── lib/
│   │   └── utils.ts     # Utility functions (className merging)
│   ├── pages/
│   │   └── Landing/     # Landing page components
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx        # Application entry point with StrictMode
│   ├── index.css       # Global styles and theme variables
│   └── vite-env.d.ts   # Vite type declarations
├── public/
│   └── favicon.ico     # Site favicon
├── index.html          # HTML entry point
├── vite.config.ts      # Vite & plugin configuration
└── eslint.config.js    # ESLint configuration
```

## Development

- Uses TypeScript with strict configuration
- Employs module path alias `@/` for clean imports
- Follows React best practices with Strict Mode enabled
- Implements consistent code style with ESLint
- Supports hot module replacement with React Refresh

## Design System

The project implements a comprehensive design system:

- Semantic color tokens for light/dark themes
- OKLCH color space for modern color handling
- Consistent spacing and border radius system
- Custom component variants with class-variance-authority
- Responsive typography with custom font stack
- Accessible UI components built on Radix UI primitives
