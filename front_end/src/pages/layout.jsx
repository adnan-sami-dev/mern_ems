import {Outlet} from "react-router-dom"
import SideBar from "../components/SideBar"

const LayoutPage = () => {
  return (
    <div className = "flex h-screen" >
      <SideBar />
      <main className = "flex-1 overflow-y-auto">
        <div className = "sm:pt-6 lg:p-8 max-w-400 mx-auto" >
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default LayoutPage