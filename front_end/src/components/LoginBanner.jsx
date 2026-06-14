import React from 'react'

const LoginBanner = () => {
  return (
    <div className="hidden md:flex flex-col flex-1 bg-black text-white items-center justify-center">
        <div className="w-fit justify-start" >
        <h1 className="text-[5vw] text-gray-200">Quartz</h1>
        <h3 className="text-[1.5vw] text-gray-600 " >A simple way to manage your business</h3>
        </div>
    </div>
  )
}

export default LoginBanner