import { PageSpinner } from '@components/shared/Spinner/PageSpinner.tsx'
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const AppAsync = lazy(() => import('src/App.tsx').then(module => ({ default: module.App })))
const RegistrationAsync = lazy(() => import('src/pages/Registration/Registration.tsx').then(module => ({ default: module.Registration })))

const AppRouter = createBrowserRouter([
  {
    path: '/',
    Component: RegistrationAsync
  },
  {
    path: '/app',
    Component: AppAsync

  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageSpinner>
      <RouterProvider router={AppRouter} />
    </PageSpinner>
  </React.StrictMode>,
)
