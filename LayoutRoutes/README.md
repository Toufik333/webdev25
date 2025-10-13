# Nested Routing

Nested routing organizes routes inside a single-page application (SPA) so views can be composed of parent and child routes. It enables shared layouts, URL-driven UI composition, and efficient code-splitting.

## Key concepts
- Parent route: provides layout or context shared by children (headers, sidebars).
- Child route: nests inside parent and renders into a placeholder (Outlet).
- Index route: default child for a parent path.
- Dynamic segments: URL parameters for nested resource routes (e.g., /users/:id/posts).
- Lazy loading: load child route code only when visited.

## Why use nested routes
- Reuse layout and UI between related views.
- Keep URLs reflective of UI hierarchy.
- Reduce boilerplate for shared components and data fetching.
- Easier route-based code-splitting.

## Typical folder structure
src/
- components/         # shared UI components (Header, Sidebar)
- pages/
    - Users/
        - UsersLayout.jsx
        - UsersList.jsx
        - UserProfile.jsx
        - UserPosts.jsx
    - Dashboard/
        - Dashboard.jsx
- App.jsx
- index.jsx

## Example (React Router v6)
- Define a parent with an Outlet and nested children. Index route renders by default.

```jsx
// UsersLayout.jsx
import { Outlet } from "react-router-dom";
export default function UsersLayout(){
    return (
        <div>
            <h2>Users</h2>
            <Outlet />
        </div>
    );
}

// routes (App.jsx)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersLayout from "./pages/Users/UsersLayout";
import UsersList from "./pages/Users/UsersList";
import UserProfile from "./pages/Users/UserProfile";

<BrowserRouter>
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<UsersLayout />}>
                <Route index element={<UsersList />} />
                <Route path=":userId" element={<UserProfile />} />
            </Route>
        </Route>
    </Routes>
</BrowserRouter>
```

## Tips
- Keep parent layout minimal; avoid re-mounting heavy components on child navigation.
- Use index routes for default child content.
- Combine nested routing with data loaders or React Suspense for better UX.
- Use meaningful URL structure to match UI hierarchy.

## Getting started
1. Install router library (example for React Router v6): npm install react-router-dom
2. Create layouts and child pages.
3. Wire routes and test navigation and parameter handling.

This README gives a compact overview to implement and reason about nested routing in an SPA. Adjust examples to your framework or router of choice.