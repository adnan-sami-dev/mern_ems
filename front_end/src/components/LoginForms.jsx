import React from 'react'
import LoginBanner from './LoginBanner'
import { ArrowLeftIcon, Eye, EyeOff, Loader } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginForms = ({role, heading, subheading}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async(e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-300" >
      <LoginBanner />

      <div className="flex-1 mx-auto flex justify-center items-center flex-col">
        {!error && (<div className="w-full md:w-1/2 animate-fade-in">
          <Link to="/login" 
            className="inline-flex items-center gap-2 text-slate-500 text-sm mb-10
            hover:text-slate-700 transition-colors " >
            <ArrowLeftIcon size={16} /> 
            Back to portals
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">{heading}</h1>
            <span className="text-slate-500 text-sm sm:text-base mt-2">{subheading}</span>
          </div>

          <form onSubmit={handleLogin} className = "space-y-5">
            {/* input fields */}
            <div>
              <label className = "block mb-2 text-slate-700 text-sm">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} 
                required placeholder="example@gmail.com"/>
            </div>
            <div>
              <label className = "block mb-2 text-slate-700 text-sm">Password</label>
              <div className = "relative"> 
                <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} 
                required placeholder="........" className = "pr-11" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className = "cursor-pointer absolute right-0 top-0 translate-y-2.5 -translate-x-2 text-slate-700">
                  {showPassword? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" onClick={handleLogin()}
              disabled={loading}
              className = "text-xs md:text-sm disabled-50 flex w-full justify-center py-2 bg-slate-600 text-slate-200 rounded-full hover:bg-slate-700 cursor-pointer" >
                {loading? <Loader className = "h-4 w-4 animate-spin mr-2" /> : "Login"}
            </button>
          </form>
        </div> 
        )}

        {error && (
          <div className = "flex-1 mx-auto flex justify-center items-center flex-col" >
            <Link to="/login" 
              className="inline-flex items-center gap-2 text-slate-500 text-sm mb-10
              hover:text-slate-700 transition-colors " >
              <ArrowLeftIcon size={16} /> 
              Back to portals
            </Link>
            <div className = "text-pink-800">
              {error}
            </div>
          </div>
        )}
      </div>
    </div>  
  )
}

export default LoginForms