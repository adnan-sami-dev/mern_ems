import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import { dummyProfileData } from "../assets/assets"
import { MenuIcon, X } from "lucide-react"
import SideBarContent from "./SideBarContent"

const SideBar = () => {
    const {pathname} = useLocation() // Get the current path from the location object -> for highlighting on sidebar
    const [username, setUsername] = useState("")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        setUsername(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    }, []) // sets the username on component mount - once only!

    const role = "ADMIN" // need to fetch from backend - for now, hardcoded to EMPLOYEE

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname]) // close the mobile menu when the path changes

    return (
        <div>
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className = {`lg:hidden fixed top-4 left-4 z-50 p-5 bg-slate-500 text-slate-300 rounded-2xl ${mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity duration-300`}>
                {mobileMenuOpen ? <X size={20} />: <MenuIcon size={20} />}
            </button>

            {/* MobileBackdrop */}
            <div onClick={() => setMobileMenuOpen(false)}
                className={`lg:hidden fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 
                ${
                        mobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Mobile Menu */}
            <aside
                className={`lg:hidden fixed top-0 left-0 h-full w-3/4 md:w-1/2 z-40
                    bg-slate-900 flex flex-col gap-8
                    text-slate-300 text-lg
                    transition-transform duration-300 ease-in-out
                    ${
                    mobileMenuOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                <SideBarContent className = "z-50" username={username} role={role} pathname={pathname} />
            </aside>

            {/* Desktop Menu */}
            <aside className = "hidden lg:flex flex-col h-full w-70 bg-slate-900 text-slate-200" >
                <SideBarContent className = "z-50" username={username} role={role} pathname={pathname} />
            </aside>
        </div>
    )
}

export default SideBar