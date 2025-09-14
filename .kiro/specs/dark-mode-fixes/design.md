# Design Document

## Overview

The portfolio website currently has a partial dark mode implementation with inconsistent styling across components. The design will systematically address all dark mode issues by:

1. Enhancing the dark mode context to persist preferences and detect system theme
2. Standardizing dark mode class application across all components
3. Fixing specific styling issues in components that don't properly support dark mode
4. Ensuring consistent color schemes and proper contrast ratios

## Architecture

### Current State Analysis

**Working Components:**
- Navbar: Properly implements dark mode toggle and styling
- TechStackComponent: Has some dark mode classes but inconsistent application
- ContactForm: Partial dark mode support with some missing styles

**Problematic Areas:**
- IntroductionCard: Hard-coded dark styling that doesn't respond to theme toggle
- TechStackCards: Missing dark mode text color for description
- ProjectCard: Good dark mode implementation
- Main page sections: Inconsistent background and text colors
- FrontPage: Hard-coded red background that doesn't change with theme

### Enhanced Dark Mode Context

The current `DarkModeContext` will be enhanced to:
- Persist theme preference in localStorage
- Detect and respect system theme preference on first visit
- Apply theme class to document root for global styling
- Provide smooth transitions between themes

### Component Architecture

Each component will follow a consistent pattern:
- Use Tailwind's `dark:` prefix for dark mode styles
- Implement proper background and text color combinations
- Ensure interactive elements have appropriate hover states for both themes
- Maintain consistent spacing and layout regardless of theme

## Components and Interfaces

### 1. Enhanced DarkModeContext

```javascript
interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
}
```

**Features:**
- localStorage persistence with key `theme-preference`
- System theme detection using `window.matchMedia('(prefers-color-scheme: dark)')`
- Automatic document class application (`dark` class on `<html>` element)
- Hydration-safe implementation to prevent SSR mismatches

### 2. Component Styling Standards

**Background Colors:**
- Light mode: `bg-white`, `bg-gray-50`, `bg-gray-100`
- Dark mode: `dark:bg-gray-800`, `dark:bg-gray-900`, `dark:bg-gray-700`

**Text Colors:**
- Primary text: `text-gray-900 dark:text-gray-100`
- Secondary text: `text-gray-600 dark:text-gray-300`
- Muted text: `text-gray-500 dark:text-gray-400`

**Interactive Elements:**
- Buttons: Maintain gradient backgrounds with proper contrast
- Form inputs: `bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`
- Cards: `bg-white dark:bg-gray-800` with proper shadow adjustments

### 3. Specific Component Fixes

**IntroductionCard:**
- Remove hard-coded dark background (`bg-gray-800/90`)
- Replace with responsive background: `bg-white/90 dark:bg-gray-800/90`
- Update text colors to be theme-responsive
- Fix gradient blob colors for both themes

**TechStackCards:**
- Add missing dark mode text color for description: `text-gray-600 dark:text-gray-300`
- Ensure proper background contrast

**FrontPage:**
- Remove hard-coded red background (`bg-red-500`)
- Replace with theme-responsive background: `bg-gray-50 dark:bg-gray-900`

**Main Page Sections:**
- Standardize section backgrounds across all components
- Ensure consistent spacing and typography

## Data Models

### Theme Preference Storage

```javascript
// localStorage structure
{
  "theme-preference": "light" | "dark" | "system"
}
```

### Theme Detection Logic

```javascript
const getInitialTheme = () => {
  // 1. Check localStorage for saved preference
  const saved = localStorage.getItem('theme-preference');
  if (saved && saved !== 'system') return saved === 'dark';
  
  // 2. Fall back to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
```

## Error Handling

### Hydration Mismatch Prevention

- Use `useEffect` to set initial theme after component mount
- Implement loading state to prevent flash of incorrect theme
- Graceful fallback to light theme if localStorage is unavailable

### Browser Compatibility

- Feature detection for `matchMedia` API
- Fallback to light theme for unsupported browsers
- Progressive enhancement approach

## Testing Strategy

### Visual Testing

1. **Theme Toggle Testing:**
   - Verify all components respond to theme changes
   - Check for smooth transitions between themes
   - Ensure no elements remain in wrong theme

2. **Contrast Testing:**
   - Verify text readability in both themes
   - Check interactive element visibility
   - Validate gradient and accent color contrast

3. **Persistence Testing:**
   - Confirm theme preference saves correctly
   - Verify theme persists across page reloads
   - Test system theme detection on first visit

### Component Testing

1. **Individual Component Tests:**
   - Test each component in both light and dark modes
   - Verify proper styling application
   - Check interactive states (hover, focus, active)

2. **Integration Tests:**
   - Test theme switching across multiple components
   - Verify consistent styling across the entire page
   - Check for any styling conflicts or overrides

### Browser Testing

- Test across different browsers (Chrome, Firefox, Safari, Edge)
- Verify mobile responsiveness in both themes
- Check for any browser-specific styling issues

## Implementation Phases

### Phase 1: Context Enhancement
- Enhance DarkModeContext with persistence and system detection
- Update theme application to document root

### Phase 2: Component Standardization
- Fix IntroductionCard hard-coded styling
- Update TechStackCards text colors
- Fix FrontPage background

### Phase 3: Global Consistency
- Standardize all section backgrounds
- Ensure consistent text colors across components
- Add proper transitions and animations

### Phase 4: Testing and Polish
- Comprehensive visual testing
- Performance optimization
- Cross-browser compatibility verification