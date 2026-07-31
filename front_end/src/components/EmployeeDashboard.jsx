import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarIcon, FileTextIcon, DollarSignIcon } from 'lucide-react'

const EmployeeDashboard = ({ data }) => {
  const employeeData = data.employee

  const cards = [
    {
      icon: CalendarIcon,
      title: 'Days Present',
      subtitle: 'Current Month',
      value: data.currentMonthAttendance,
    },
    {
      icon: FileTextIcon,
      title: 'Pending Leaves',
      subtitle: 'Pending Approval',
      value: data.pendingLeaves,
    },
    {
      icon: DollarSignIcon,
      title: 'Recent Payslip',
      subtitle: 'Most Recent',
      value: data.latestPayslip? `$ ${data.latestPayslip.netSalary.toLocaleString()}` : 'N/A'
    },
  ]
  
  return (
    <div className = "animate-fade-in p-5">
      {/* Page Header */ }
      <div className = "page-header">
        <h1 className = "page-title">Welcome, {employeeData?.firstName}!</h1>
        <p className = "page-subtitle">
          {employeeData?.position} - {employeeData?.department || "No Department"}
        </p>
      </div>

      {/* Dashboard Cards */ }
      <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-10 sm:mb-6">

        {cards.map( (card, index) => (
          <div className = "group card card-hover p-5 sm:p-6 relative overflow-hidden flex items-center justify-between" 
            key = {index}>

              <div>
                <p className = "text-lg text-slate-500">{card.title}</p>
                <p className = "text-2xl font-bold">{card.value}</p>
              </div>

              <div>
                <card.icon size={30} className = "text-slate-500" />
              </div>

          </div>
        ))}

      </div>

      {/* Additional Sections */ }
      <div className = "flex flex-col sm:flex-row gap-4">
        <Link to = "/attendance" className = "text-center bg-slate-800 hover:bg-slate-700 transition-colors duration-300 text-base text-lg sm:text-base text-slate-200 px-6 py-4 sm:px-4 sm:py-3 rounded-md">
          Mark Attendance
        </Link>

        <Link to = "/leave" className = "text-center bg-slate-200 hover:bg-slate-300 transition-colors duration-300 text-base text-lg sm:text-base text-slate-700 px-6 py-4 sm:px-4 sm:py-3 rounded-md">
          Apply for Leave
        </Link>
      </div>
    </div>
  )
}

export default EmployeeDashboard