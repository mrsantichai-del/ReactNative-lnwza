# Copilot Instructions for ReactNative-lnwza

## Project Overview

This is an **Expo + React Native + TypeScript** mobile app using **file-based routing** (expo-router). The project appears to be a learning/exploration codebase with multiple weeks of component examples (flexbox layouts, travel/hotel cards, health tracking, etc.).

**Tech Stack:**
- Expo 54 with React 19 and React Native 0.81
- TypeScript with strict mode enabled
- expo-router for navigation (Stack-based routing)
- Path alias: `@/*` maps to workspace root

## Architecture & Key Patterns

### File-Based Routing (expo-router)
- **Routing files** live in `app/` directory with `.tsx` extension
- **Nested routes** use folder-based structure (e.g., `app/flexbox/ex01.tsx` → `/flexbox/ex01`)
- **Root layout**: `app/_layout.tsx` exports Stack navigation
- **Entry point**: `app/index.tsx` is the home screen with navigation links
- Avoid modifying routing structure without understanding expo-router's expectations

### Component Organization
- **Reusable components**: Stored in `components/` directory, organized by feature/week
- **Week-based grouping**: Components grouped in `components/week3/`, `components/week5/`, `components/week6/`
  - `week3/`: Card, Hotel, Menu layouts
  - `week5/`: BMI, Heartbeat animations
  - `week6/`: Tour, Event, Cover components
- **Styling**: Inline `StyleSheet.create()` or direct style objects (no external CSS)
- **Asset imports**: Use `require("@/assets/...")` with path aliases

### React Native Styling
- All styling uses React Native's `StyleSheet` or inline style objects
- **Flexbox is primary layout**: Heavy use of `flex`, `flexDirection`, `justifyContent`, `alignItems`
- **Common patterns**:
  - Row layouts: `{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }`
  - Responsive spacing: `padding`, `margin`, `gap` preferred over absolute positioning
  - `resizeMode: "cover"` and `aspectRatio` for image layouts
- **No CSS modules or Tailwind** — pure React Native styling only

### Component Props Pattern
- Components use loose typing: `props: any` (seen in `Greeting.tsx`, `Tour.tsx`)
- **Better approach**: Use TypeScript interfaces for type safety:
  ```tsx
  interface CardProps { title: string; image?: string; }
  export default function Card(props: CardProps) { ... }
  ```

## Development Workflow

### Starting the App
```bash
npm install          # Install dependencies
npm start            # Start Expo dev server
npm run android      # Run on Android emulator
npm run ios          # Run on iOS simulator
npm run web          # Run in web browser
npm run lint         # Run ESLint (expo config)
```

### Project Reset (Clean Slate)
```bash
npm run reset-project  # Moves starter code to app-example/, creates blank app/
```

## Code Conventions

### Import Paths
- Always use `@/` alias for imports from root: `require("@/assets/...")`, `import ... from "@/components/..."`
- Path alias is configured in `tsconfig.json` with `"@/*": ["./*"]`

### TypeScript
- Strict mode enabled in `tsconfig.json`
- Prefer typed props over `any` type
- Use proper import/export syntax for components

### Navigation
- Use expo-router's `Link` component: `<Link href="/flexbox/ex01"><Text>...</Text></Link>`
- href paths match file structure (e.g., `app/flexbox/ex01.tsx` → `href="/flexbox/ex01"`)

### Image Assets
- Assets stored in `assets/week3/`, `assets/images/`, etc.
- Use `require("@/assets/path/to/image.jpg")` for static imports
- Supported on all platforms (web, Android, iOS)

## Common Pitfalls to Avoid

1. **Don't mix React Native styles with web CSS** — StyleSheet only
2. **Don't use `any` type liberally** — Use TypeScript interfaces for props
3. **Don't hardcode platform-specific behavior** — Let Expo handle iOS/Android/Web diffs
4. **Don't create new layout structure without understanding expo-router** — Routing is file-based
5. **Path aliases** — Always use `@/` prefix for imports, not relative paths

## Key Files to Reference

- `app/index.tsx` — Navigation hub showing route patterns
- `app/_layout.tsx` — Root navigation configuration
- `components/week3/Card.tsx` — Example of flexbox layout with reusable component
- `components/week6/Cover.tsx` — Image-heavy component with resizeMode example
- `tsconfig.json` — Path aliases and TypeScript config
- `package.json` — Dependency versions and available scripts

## When Adding Features

1. **New screen**: Create `.tsx` file in `app/` or nested folder
2. **New shared component**: Create in `components/{week}/ComponentName.tsx`
3. **Styling**: Use inline styles or `StyleSheet.create()` in same file
4. **Assets**: Place in `assets/` with appropriate subdirectory
5. **Update navigation**: Add Link in appropriate screen (usually `app/index.tsx`)
