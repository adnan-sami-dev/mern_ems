import {Toaster} from "react-hot-toast"
import {Route, Routes} from "react-router-dom"
import LoginPage from "./pages/login"
import LayoutPage from "./pages/layout"
import DashboardPage from "./pages/dashboard"
import EmployeesPage from "./pages/employees"
import AttendancePage from "./pages/attendance"

const App = () => {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element = { <LoginPage /> } />
        <Route element={<LayoutPage />}>
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route path="/employees" element={<EmployeesPage />}/>
          <Route path="/attendance" element={<AttendancePage/>}/>
          <Route path="/leave" element={<DashboardPage />}/>
          <Route path="/dashboard" element={<DashboardPage />}/>

        </Route>

      </Routes>
    </>
  )
}

export default App
