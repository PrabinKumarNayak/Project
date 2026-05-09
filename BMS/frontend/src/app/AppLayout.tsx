import type { ReactElement } from "react"

import Navbar from "@/components/layout/Navbar/Navbar"

const AppLayout = ({
  children,
}: {
  children: ReactElement
}) => {
  return (
    <div className="min-h-screen w-full bg-(--color-background)">

      {/* Navbar */}
      <div className="w-full">

        <div className="mx-auto w-full max-w-[1200px] px-4 tablet:px-6 desktop-sm:px-10">
          <Navbar />
        </div>

      </div>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1200px] flex-grow px-4 py-6 tablet:px-6 desktop-sm:px-10">

        {children}

      </main>

    </div>
  )
}

export default AppLayout