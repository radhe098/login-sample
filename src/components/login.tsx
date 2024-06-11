import { useState } from 'react';
import img from "../../public/ bgimg.jpg" 

export default function Login() {
  const [uname, setuname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [signup, setSignup] = useState(false);

  const toggleSignup = () => {
    setSignup(!signup);
  };

  const usernamechange = (e: any) => {
    setuname(e.target.value);
  };

  const emailchange = (e: any) => {
    setemail(e.target.value);
  };

  const passchange = (e: any) => {
    setpassword(e.target.value);
  };

  const handlesubmit = () => {
    const unameRegex = /^Jhon Doe$/i;
    const passwordRegex = /^jhondoe@123$/i;
    if (unameRegex.test(uname) && passwordRegex.test(password)) {
      alert("Welcome to the page");
      return;
    } else {
      alert("Invalid credentials");
    }
  };

  const register = () => {
    alert("You are registered");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${img})`
      }}
      className="flex justify-center items-center h-screen bg-cover bg-center"
    >
      <div className="bg-white bg-opacity-45 w-[90%] sm:w-[70%] rounded-md h-auto text-center p-4 flex flex-col justify-start items-center">
        <h1 className="text-3xl sm:text-4xl mt-8">Sample Login Page</h1>
        <h1 className="border-b border-white w-[80%] sm:w-[60%] mt-8"></h1>
        <div className="text-xl sm:text-2xl flex flex-col justify-center items-center h-auto w-full sm:w-[85%] mt-4 sm:mt-0">
          <div className="w-full p-4 sm:p-12 h-auto flex flex-col space-y-4 sm:space-y-6 justify-center m-auto">
            {!signup ? (
              <>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <h1>Username</h1>
                  <div className="w-full sm:w-[16rem] rounded-sm overflow-hidden">
                    <input type="text" className="w-full p-1" value={uname} onChange={usernamechange} />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <h1>Password</h1>
                  <div className="w-full sm:w-[16rem] rounded-sm overflow-hidden">
                    <input type="password" value={password} className="w-full p-1" onChange={passchange} />
                  </div>
                </div>
                <div>
                  <button onClick={handlesubmit} className="border-black border bg-red-200 p-1 px-4 w-auto">Submit</button>
                </div>
                <div>
                  <h1 onClick={toggleSignup} className="hover:text-blue-900 hover:cursor-pointer">SignUp?</h1>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <h1>Username</h1>
                  <div className="w-full sm:w-[16rem] rounded-sm overflow-hidden">
                    <input type="text" className="w-full p-1" value={uname} onChange={usernamechange} />
                  </div>
                </div>
                <div className="flex lg:ml-12 flex-col sm:flex-row justify-center gap-3">
                  <h1>Email</h1>
                  <div className="w-full sm:w-[16rem] rounded-sm overflow-hidden">
                    <input type="email" className="w-full p-1" value={email} onChange={emailchange} />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <h1>Password</h1>
                  <div className="w-full sm:w-[16rem] rounded-sm overflow-hidden">
                    <input type="password" className="w-full p-1" value={password} onChange={passchange} />
                  </div>
                </div>
                <div>
                  <button onClick={register} className="border-black border bg-red-200 p-1 px-4 w-auto">Submit</button>
                </div>
                <div>
                  <button onClick={toggleSignup} className="hover:text-blue-900 hover:cursor-pointer">Login?</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
