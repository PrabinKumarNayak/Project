import { Route, Routes } from "react-router-dom"

import { appRoutes } from "./config"

const AppRouting = () => {
  return (
    <Routes>

      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        />
      ))}

      <Route
        path="*"
        element={
          <div className="flex h-[80vh] w-full items-center justify-center px-6">

            <div className="text-center">

              <h1 className="text-7xl font-bold text-[var(--color-brand-primary)]">
                404
              </h1>

              <p className="mt-4 text-typo-24-700 text-[var(--color-text-main)]">
                Page Not Found
              </p>

              <p className="mt-2 text-typo-16-400 text-[var(--color-text-muted)]">
                The page you are looking for does not exist.
              </p>

            </div>

          </div>
        }
      />

    </Routes>
  )
}

export default AppRouting