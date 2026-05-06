import {ShieldIcon, UserIcon} from "lucide-react"
import {Link} from "react-router-dom"

const LoginPage = () => {

  const PortalSelections = [
    {
      to: "/login/admin",
      text: "Admin",
      description: "manage employees, departments, payroll and system configurations",
      icon: ShieldIcon
    },
    {
      to: "/login/employee",
      text: "Employee",
      description: "view profile, track attendance, request time off, and access payslips",
      icon: UserIcon
    }
  ]
  return (
    <main className="min-h-screen flex flex-col md:flex-row" >
      <div className="hidden md:flex flex-col flex-1 bg-black text-white items-center justify-center">
            <div className="w-fit justify-start" >
              <h1 className="text-[5vw] text-gray-200">Quartz</h1>
              <h3 className="text-[1.5vw] text-gray-600 " >A simple way to manage your business</h3>
            </div>
      </div>

      <div className="flex-1 bg-gray-300 flex flex-col justify-center p-[7vw]" >
        {/* Header */}
        <div className= "md:text-left mb-4">
          <h2 className="text-3xl mb-2 font-medium text-slate-900">Welcome</h2>
          <p className="text-slate-500">Select your portal . . .</p>
        </div>

        {/* Portal list */}
        <div className="flex gap-1 flex-col">
          {
            PortalSelections.map( (portal) => (
              <Link key={portal.to} to={portal.to}>
                <button className="block w-full p-3 sm:p-6 border rounded-lg hover:bg-slate-400 hover:cursor-pointer">
                  <h3>
                    {portal.text}
                  </h3>
                </button>
              </Link>
            ))
          }
        </div>

        {/* Footer */}
        <div></div>
      </div>
    </main>
  )
}

export default LoginPage