# Intercepted Routes Example

This example demonstrates **Route Interception** in Next.js 15 - a powerful feature that allows you to show content from another route within the current layout.

## What Are Intercepted Routes?

Intercepted routes let you load a route from another part of your application within the current layout. This is useful for cases where you want to show content in a modal or overlay while preserving the URL and allowing direct navigation.

## How It Works

### The Photo Gallery Example

This example creates a photo gallery where:

1. **Gallery Page** (`/photos`) - Shows a grid of photos
2. **Photo Detail Page** (`/photos/[photoId]`) - Full page view of a photo
3. **Intercepted Route** (`/photos/(..)photos/[photoId]`) - Shows the photo in a modal

### Convention

Intercepted routes use special folder naming conventions:

- `(.)` - Match segments on the **same level**
- `(..)` - Match segments **one level above**
- `(..)(..)` - Match segments **two levels above**
- `(...)` - Match segments from the **root** app directory

### File Structure

```
app/
  photos/
    page.jsx                           # Gallery view
    layout.jsx                         # Defines parallel route slots
    [photoId]/
      page.jsx                         # Full page view (direct navigation)
    (..)photos/
      [photoId]/
        page.jsx                       # Intercepted modal (soft navigation)
    @modal/                            # Alternative: parallel routes approach
      default.jsx
      (..)photos/
        [photoId]/
          page.jsx
```

## Behavior

### Soft Navigation (Client-Side)

When you click a photo from the gallery:

- The URL changes to `/photos/[photoId]`
- The intercepted route (`(..)photos/[photoId]`) is rendered
- Photo displays in a **modal overlay**
- Pressing ESC or clicking backdrop closes the modal

### Hard Navigation (Direct Access)

When you directly visit `/photos/[photoId]` (refresh, new tab, external link):

- The regular route (`[photoId]/page.jsx`) is rendered
- Photo displays as a **full page**
- No modal behavior

## Two Implementation Approaches

### Approach 1: Simple Interception

Uses the `(..)photos` folder to intercept the route and show a modal.

**Files:**

- `photos/(..)photos/[photoId]/page.jsx`

### Approach 2: Parallel Routes + Interception

Uses parallel routes (`@modal` slot) combined with interception for more flexibility.

**Files:**

- `photos/@modal/(..)photos/[photoId]/page.jsx`
- `photos/@modal/default.jsx`
- Update `photos/layout.jsx` to accept the `modal` prop

## Usage

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `/photos`

3. Click any photo to see it in a modal (intercepted route)

4. Open a photo link in a new tab to see the full page view

5. Press ESC or click the backdrop to close the modal

## Key Features Demonstrated

✅ Route interception with `(..)` convention
✅ Modal overlay with backdrop
✅ Client-side navigation (soft navigation)
✅ Direct URL access (hard navigation)
✅ Keyboard navigation (ESC to close)
✅ Click outside to close
✅ Parallel routes integration (alternative approach)
✅ Smooth animations and transitions

## Learn More

- [Next.js Intercepting Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- [Next.js Parallel Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
