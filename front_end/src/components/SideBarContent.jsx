import { LogOutIcon, UserIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBarContent = ({ username, role, pathname }) => {
    const navItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Attendance", path: "/attendance" },
        { name: "Employees", path: "/employees", role: "ADMIN" }, // Only show for ADMIN
        { name: "Leave", path: "/leave" },
        { name: "Payslips", path: "/payslips" },
        { name: "Settings", path: "/settings" }
    ]

    return (
    <div className="flex flex-col h-full">
        {/* App Header */}
        <div className = "flex flex-row items-center p-5 gap-4 border-b border-slate-700">
            <UserIcon size={30} className = "text-slate-300"/>
            <div className = "flex flex-col text-slate-300 font-bold">
                <h2>Quartz</h2>
                <span>Management System</span>
            </div>
        </div>
        {/* Profile Header */}
        {
            username &&
            <div className="flex flex-row p-4 m-4 bg-slate-800 border border-slate-600 rounded-lg gap-4 items-center">
                <div className = "bg-slate-500 p-2 rounded-lg w-10 h-10 flex items-center justify-center text-slate-200 font-bold text-lg">
                    <span>{username.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                    <h2 className="text-slate-300 font-bold">{username}</h2>
                    <span className="text-slate-400 text-sm">
                        {role === "ADMIN" ? "Admin" : "Employee"} {/* add role from state - later */}
                    </span> {/* add role from state - later */}
                </div>
            </div>
        }
        {/* Menu Items */}
        <div className="flex flex-col p-4 gap-4">
            <h2 className="text-slate-500 font-bold text-sm uppercase tracking-widest">Navigation</h2>
            <div>
                {navItems
                    .filter((item) => !item.role || item.role === role)
                    .map((item) => {
                        const isActive = pathname.startsWith(item.path)

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block p-2 rounded-lg transition-colors duration-300 mb-2 ${
                                    isActive
                                        ? "bg-slate-500"
                                        : "hover:bg-slate-700"
                                }`}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
            </div>
        </div>
        {/* Logout Button */}
        <div className="mt-auto">
            <div className="flex flex-row items-center p-4 m-4 bg-slate-800 border border-slate-600 rounded-lg gap-4 cursor-pointer hover:bg-slate-500 transition-colors duration-300">
                <LogOutIcon size={20} className = "text-slate-300"/>
                <span>Log out</span>
            </div>
        </div>
    </div>
    )
}

export default SideBarContent