

const LoginPage = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row" >
      <div className="hidden md:flex flex-col w-1/2 bg-black text-white items-center justify-center">
            <div className="w-fit justify-start" >
              <h1 className="text-[5vw] text-gray-200">Quartz</h1>
              <h3 className="text-[1.5vw] text-gray-600 " >A simple way to manage your business</h3>
            </div>
      </div>

      <div className="w-1/2 bg-gray-300" >
        Login Part
      </div>
    </main>
  )
}

export default LoginPage