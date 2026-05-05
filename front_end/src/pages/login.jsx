

const LoginPage = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row" >
      <div className="hidden md:flex flex-col flex-1 bg-black text-white items-center justify-center">
            <div className="w-fit justify-start" >
              <h1 className="text-[5vw] text-gray-200">Quartz</h1>
              <h3 className="text-[1.5vw] text-gray-600 " >A simple way to manage your business</h3>
            </div>
      </div>

      <div className="flex-1 bg-gray-300 flex items-center justify-center" >
        {/* Header */}
        <div className= "text-center md:text-left">
          <h2 className="text-3xl mb-3 font-medium text-slate-900">Welcome</h2>
          <p className="text-slate-500">Select your portal . . .</p>
        </div>

        {/* Portal list */}
        <div></div>

        {/* Footer */}
        <div></div>
      </div>
    </main>
  )
}

export default LoginPage