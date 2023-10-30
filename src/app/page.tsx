import Image from "next/image";
import Navbar from "./components/Navbar/navbar";

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="profile pt-14 bg-gradient-to-r from-slate-50 to-slate-400">
      <div className="grid align-middle">
          <div className="flex justify-center">
            <Image
                className="rounded-full h-full"
                alt="profile-picture"
                loading="lazy"
                src="/Tiger.jpeg"
                height={200}
                width={200}
            />
          </div>
          <div className="text-sm my-4 mx-16 text-left">
              <h1 className="font-semibold">Hi, I am Akmal!</h1>
              <h1>Junior Frontend Engineer with a strong focus on creating a sustainable code.</h1>
          </div>
          
        {/* tect stack */}
        <div className="specialties grid my-4 mx-16">
          <h1 className="text-sm font-semibold mb-2">Specialties</h1>
          <div className="grid grid-cols-2 justify-items-center border-solid border-2 border-slate-500 rounded">
            <img
              className="object-cover h-20 w-20 rounded-md"
              alt="js-logo"
              src="/js-logo.png"
            />
            <img
              className="object-cover h-20 w-20 rounded-md"
              alt="react-logo"
              src="/react-logo.png"
            />
            <img
              className="object-cover h-20 w-20 rounded-md"
              alt="golang-logo"
              src="/golang-logo.png"
            />
            <img
              className="object-cover h-20 w-20 rounded-md"
              alt="js-logo"
              src="/js-logo.png"
            />
            <img
              className="object-cover h-20 w-20 rounded-md"
              alt="react-logo"
              src="/react-logo.png"
            />
            <img
              className="object-cover h-20 w-20 rounded-md"
              alt="golang-logo"
              src="/golang-logo.png"
            />
          </div>
        </div>
      </div>
    </div>

    {/* experience section */}
    <div className="experience container mx-14">
    
    </div>

    {/* socmed section */}
    <div className="socmed container">

    </div>
    </>
  )
}

export default Dashboard;