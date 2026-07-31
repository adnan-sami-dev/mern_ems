import { useState, useEffect } from 'react'
import { dummyEmployeeDashboardData } from '../assets/assets'
import LoadingSpinner from '../components/LoadingSpinner'
import EmployeeDashboard from '../components/EmployeeDashboard'

const DashboardPage = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from an API
    setData(dummyEmployeeDashboardData)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!data) {
    return <div className="text-center py-12 text-slate-500">Failed to load dashboard</div>
  }

  // I'm assuming role is passed down from data, which is fetched based on role determined at login ?
  if (data.role === 'ADMIN') {
    return (
      <div>
        <h1>Admin Dashboard</h1>
      </div>
    )
  } else {
    return (
      <EmployeeDashboard data={data} />
    )
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
    </div>
  )
}

export default DashboardPage