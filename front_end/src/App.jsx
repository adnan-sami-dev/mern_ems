import {Toaster} from "react-hot-toast"
import {Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "./pages/login"
import LayoutPage from "./pages/layout"
import DashboardPage from "./pages/dashboard"
import EmployeesPage from "./pages/employees"
import AttendancePage from "./pages/attendance"
import PayslipsPage from "./pages/payslips"
import PrintPayslipPage from "./pages/printpayslip"
import SettingsPage from "./pages/settings"


import "./index.css"

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
          <Route path="/payslips" element={<PayslipsPage />}/>
          <Route path="/settings" element={<SettingsPage />}/>
        </Route>

        <Route path="/print/payslips/:id" element = { <PrintPayslipPage /> } />

        <Route path="*" element={ <Navigate to="/dashboard" replace/>} />
      </Routes>
    </>
  )
}

export default App
