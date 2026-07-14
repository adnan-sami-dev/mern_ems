import React from 'react'
import LoginBanner from './LoginBanner'
import { ArrowLeftIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginForms = ({role, heading, subheading}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState("")

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-300" >
      <LoginBanner />

      <div className="flex-1 mx-auto flex justify-center items-center flex-col">
        <div className="w-full md:w-1/2 animate-fade-in">
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
        </div>
      </div>
    </div>  
  )
}

export default LoginForms