import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootRoute, Route, Router, RouterProvider } from '@tanstack/react-router'
import Root from './routes/root'
import Private from './routes/private'
import Login from './authViews/Login'
import Callback from './authViews/Callback'
import Logout from './authViews/Logout'
import isAuthenticated from './authViews/isAuthenticated'

const rootRoute = new RootRoute({
    component: Root,
})

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <h1>Index route</h1>
})

const publicRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/public',
    component: () => <h1>Public</h1>
})

const privateRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/private',
    component: Private,
    beforeLoad: isAuthenticated
})

const loginRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: Login
})

const callbackRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/callback',
    component: Callback
})

const logoutRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/logout',
    component: Logout
})

const routeTree = rootRoute.addChildren([
    indexRoute,
    publicRoute,
    privateRoute,
    loginRoute,
    callbackRoute,
    logoutRoute,
])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
