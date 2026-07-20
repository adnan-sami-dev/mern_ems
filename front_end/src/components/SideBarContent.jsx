import { LogOutIcon, UserIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBarContent = () => {
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
        <div className="flex flex-row p-4 m-4 bg-slate-800 border border-slate-600 rounded-lg gap-4 items-center">
            <div className = "bg-slate-500 p-2 rounded-full">
                <UserIcon /> {/* image of user - add later */}
            </div>
            <div>
                <h2>User Name</h2> {/* add username from state - later */}
                <span>Role</span> {/* add role from state - later */}
            </div>
        </div>
        {/* Menu Items */}
        <div className="flex flex-col p-4 gap-4">
            <h2 className="text-slate-500 font-bold text-sm uppercase tracking-widest">Navigation</h2>
            <div>
                <Link to = "/dashboard" className = "block p-2 rounded-lg hover:bg-slate-500  transition-colors duration-300">Dashboard</Link>
                <Link to = "/attendance" className = "block p-2 rounded-lg hover:bg-slate-500  transition-colors duration-300">Attendance</Link>
                
                {/* a condition to check if user is admin */}
                <Link to = "/employees" className = "block p-2 rounded-lg hover:bg-slate-500  transition-colors duration-300">Employees</Link>
                
                <Link to = "/leave" className = "block p-2 rounded-lg hover:bg-slate-500  transition-colors duration-300">Leave</Link>
                <Link to = "/payslips" className = "block p-2 rounded-lg hover:bg-slate-500  transition-colors duration-300">Payslips</Link>
                <Link to = "/settings" className = "block p-2 rounded-lg hover:bg-slate-500  transition-colors duration-300">Settings</Link>
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