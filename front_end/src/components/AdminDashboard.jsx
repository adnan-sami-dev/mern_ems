import React from 'react'
import { Link } from 'react-router-dom'
import { UsersIcon, CalendarIcon, Building2Icon, FileTextIcon } from 'lucide-react'

const AdminDashboard = ({ data }) => {
    const cards = [
        {
            icon: UsersIcon,
            label: 'Employees',
            description: 'Total number of employees in the organization',
            value: data.totalEmployees,
        },
        {
            icon: Building2Icon,
            label: 'Departments',
            description: 'Total number of departments in the organization',
            value: data.totalDepartments,
        },
        {
            icon: CalendarIcon,
            label: 'Attendance Today',
            description: 'Number of employees present today',
            value: data.todayAttendance,
        },
        {
            icon: FileTextIcon,
            label: 'Pending Leaves',
            description: 'Number of leave requests pending approval',
            value: data.pendingLeaves,
        },
    ]
    return (
        <div className = "animate-fade-in p-5">
            {/* Page Header */ }
            <div className = "page-header">
                <h1 className = "page-title">Dashboard</h1>
            </div>
            
            {/* Dashboard Cards */ }
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 mb-10 sm:mb-6">

                {cards.map( (card, index) => (
                <div className = "group card card-hover p-5 sm:p-6 relative overflow-hidden flex items-center justify-between" 
                    key = {index}>

                    <div>
                        <p className = "text-lg text-slate-500">{card.label}</p>
                        <p className = "text-2xl font-bold">{card.value}</p>
                    </div>

                    <div>
                        <card.icon size={30} className = "text-slate-500" />
                    </div>

                </div>
                ))}

            </div>
        </div>
    )
}

export default AdminDashboard