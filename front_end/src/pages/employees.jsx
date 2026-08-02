import {useState, useEffect, useCallback} from 'react'
import {dummyAdminDashboardData} from '../assets/assets'

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('All')

  // useCallback() memoizes the function so that it doesn't get recreated on every render, 
  // which can help with performance if the function is passed down to child components 
  // or used in dependencies of useEffect.
  /* 
      Don't use useCallback() :
      . one time data fetching
      . when not passing the function to child components
      . when the function is not used in dependencies of useEffect
      . when the function isn't being used outside useEffect
  */
  const fetchEmployees = useCallback(async() => {
    setLoading(true)
    setEmployees(dummyAdminDashboardData)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  /* 
      Don't use useEffect if:
      . you only need to fetch data through a button click or some other user interaction
  */
  useEffect(() => {
    // Fetch employees data
    fetchEmployees()
  }, [])

  return (
    <div className="animate-fade-in p-5">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row justify-between items-center mb-7 lg:mb-4 mt-10 lg:mt-0">
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <h1 className="page-title">
            Employees
          </h1>
          <p className="page-subtitle">
            Manage your employees here
          </p>
        </div>
        <button className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 cursor-pointer transition-colors duration-300">
          <span className="mr-2 font-medium text-lg">+</span> Employee
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Employee Grid */}
      
    </div>
  )
}

export default EmployeesPage