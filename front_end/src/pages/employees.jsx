import {useState, useEffect, useCallback, useMemo} from 'react'
import {dummyEmployeeData, DEPARTMENTS} from '../assets/assets'
import {Pencil, Trash, X} from 'lucide-react'
import CreateEmployeeForm from '../components/CreateEmployeeForm'

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('All')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editEmployeeModal, setEditEmployeeModal] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(null)

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
    const deptFilteredEmployees = selectedDept === 'All' 
                                  ? dummyEmployeeData 
                                  : dummyEmployeeData.filter((employee) => employee.department === selectedDept)
    setEmployees(deptFilteredEmployees)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [selectedDept])

  /* 
      Don't use useEffect if:
      . you only need to fetch data through a button click or some other user interaction
  */
  useEffect(() => {
    // Fetch employees data
    fetchEmployees()
  }, [fetchEmployees])

  const filteredEmployees = useMemo(() => {
    if (!searchTerm.trim()) return employees // Skip filtering if empty
    
    const search = searchTerm.toLowerCase().trim()

    return employees.filter((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase()
      return fullName.includes(search)
    })
  }, [employees, searchTerm]) // Only re-calculate when employees (based on dept choice) or searchTerm change

  const EditEmployee = (employee) => {
    setEditEmployeeModal(true)
    setCurrentEmployee(employee)
  }

  const DeleteEmployee = async(employee) => {
    if (!confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) {
      return
    } else {
      setEmployees(prev => prev.filter(emp => emp.id !== employee.id));
    }
  }


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
        <button onClick={() => setShowCreateModal(true)} 
          className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 cursor-pointer transition-colors duration-300">
          <span className="mr-2 font-medium text-lg">+</span> Employee
        </button>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="flex-1 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="max-w-40 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="All">All Departments</option>
          {DEPARTMENTS.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Employee Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-0 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEmployees.map((employee) => (
            <div key={employee.id} className="group relative bg-white shadow-md rounded-lg p-4">

              <h3 className="text-lg font-semibold">{employee.firstName} {employee.lastName}</h3>

              <p className="text-gray-600">{employee.email}</p>

              <div className="bg-slate-200 text-slate-800 px-2 py-1 rounded mt-2 inline-block text-sm font-medium">
                <p className="text-gray-600">{employee.department}</p>
              </div>

              <div className="lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300 items-center justify-center text-slate-500 absolute flex right-0 bottom-0 gap-3 p-4">
                
                <button onClick = {() => EditEmployee(employee)} 
                  className="hover:text-slate-700 transition-colors duration-300 cursor-pointer">
                  <Pencil className = "w-6 h-6" />
                </button>

                <button onClick = {() => DeleteEmployee(employee)}
                  className="hover:text-red-700 transition-colors duration-300 cursor-pointer">
                  <Trash className = "w-6 h-6" />
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Employee Modal */}
      {showCreateModal && (
        <div onClick={() => setShowCreateModal(false)} 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          

          {/* Modal Content - event propagation stopped to prevent closing modal
          upon clicking inside the modal */}

          <div onClick={(e) => e.stopPropagation()}
            className="bg-white shadow-2xl p-5 rounded-2xl w-full max-w-3xl my-8 animate-fade-in relative" >
              
            <h2 className="text-xl font-bold mb-4 mt-1">Add an Employee</h2>

            <button onClick={() => setShowCreateModal(false)}
              className="absolute top-6 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
              <X />
            </button>

            {/* Modal Form */}
            <CreateEmployeeForm initialData = {null} />

          </div>
        </div>
      )}

      {/* Edit Employee Modal */}
      {
        editEmployeeModal && (
          <div onClick={() => setEditEmployeeModal(false)} 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">

            <div onClick={(e) => e.stopPropagation()}
              className="bg-white shadow-2xl p-5 rounded-2xl w-full max-w-3xl my-8 animate-fade-in relative" >

              <h2 className="text-xl font-bold mb-4 mt-1">Edit Employee</h2>

              <button onClick={() => setEditEmployeeModal(false)}
                className="absolute top-6 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
                <X />
              </button>

              {/* Modal Form */}
              <CreateEmployeeForm initialData={currentEmployee}/>

            </div>

          </div>
        )
      }
    </div>
  )
}

export default EmployeesPage