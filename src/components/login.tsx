import rocket from "../../public/rocket.png";
import {   useState } from 'react';
import {motion} from 'framer-motion';
import space from "../../public/space.jpg";
export default function Login() {
  const [uname, setuname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [signup, setSignup] = useState(false);
  const [isClosed, setsClosed] = useState(false);
  const [launch, setlaunch] = useState(false);

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
    const unameRegex = /^123$/i;
    const passwordRegex = /^123$/i;
    if (unameRegex.test(uname) && passwordRegex.test(password)) {
      // alert("Welcome to the page");
      setsClosed(true);
      setTimeout(() => {
        setlaunch(true);
      }, 500); // 1 second delay before launching the rocket
     
      setTimeout(() => {
        console.log("launching rocket");
      }, 2000); // 1 second delay before launching the rocket
      return;
    } else {
      alert("Invalid credentials");
    }
  };

  const register = () => {
    alert("You are registered");
  };

  return (
    <>
    <motion.div
    initial={{ width: '100%', opacity: 1 }}
    animate={
        isClosed
        ? { width: '0%', opacity: 0, scaleX: 0 , scaleY: 0, height: 0}
        : { width: '100%', opacity: 1, y: [0, -2, 0] }
    }
    transition={{
      width: { duration: 0.5, ease: 'easeInOut' },
      opacity: { duration: 0.5, ease: 'easeInOut' },
      y: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
    }}
      style={{
        backgroundImage: `url(${space})`
      }}
      className="flex justify-center items-center h-screen bg-cover bg-center p-4 sm:p-8 "
    >
      <motion.div
      animate={{ y: [0,2, 0] }}
      transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      // transition={{ duration: 0.5, ease: 'easeInOut' }}

      className="bg-gray-700 bg-opacity-65 rounded-md h-auto text-center flex flex-col justify-start items-center p-4 sm:p-8 w-full max-w-4xl 
       ">
        <h1 className="  mt-8"></h1>
        <div className="text-xl  rounded-lg sm:text-2xl flex flex-col justify-center items-center h-auto  mt-4 sm:mt-0 w-[42rem]  ">  
          <div className="w-auto p-4 sm:p-2 h-auto flex flex-col space-y-4 sm:space-y-6 justify-center m-auto">
            {!signup ? (
              <>  
                
                <div className="flex flex-col 
                 w-[32rem] rounded-xl pl-2 sm:flex-row justify-center ">
                  <h1 className=' rounded-l-lg w-1/4 bg-fuchsia-500 ' >Username</h1>
                  <div className="w-3/4  rounded-sm overflow-hidden">
                    <input type="password" value={uname} className=" w-full p-1" onChange={usernamechange} />
                  </div>
                </div>
                <div className="flex flex-col 
                 w-[32rem] rounded-xl pl-2 sm:flex-row justify-center ">
                  <h1 className=' rounded-l-lg w-1/4 bg-fuchsia-500 ' >Password</h1>
                  <div className="w-3/4  rounded-sm overflow-hidden">
                    <input type="password" value={password} className=" w-full p-1" onChange={passchange} />
                  </div>
                </div>
                <div>
                  <button onClick={handlesubmit} className="border-black border bg-fuchsia-700 rounded-lg text-white text- p-1 px-4 w-auto">Submit</button>
                </div>
                <div>
                  <h1 onClick={toggleSignup} className="hover:text-blue-200 text-white   hover:cursor-pointer">SignUp?</h1>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col 
                 w-[32rem] rounded-xl pl-2 sm:flex-row justify-center ">
                  <h1 className=' rounded-l-lg w-1/4 bg-fuchsia-500 ' >Username</h1>
                  <div className="w-3/4 rounded-sm overflow-hidden">
                    <input type="text" className=" w-full p-1" value={uname} onChange={usernamechange} />
                  </div>
                </div>
                <div className="flex flex-col 
                 w-[32rem] rounded-xl pl-2 sm:flex-row justify-center">
                  <h1 className="rounded-l-lg w-1/4 bg-fuchsia-500 ">Email</h1>
                  <div className="w-3/4 rounded-sm overflow-hidden">
                    <input type="email" className="w-full p-1" value={email} onChange={emailchange} />
                  </div>
                </div>
                <div className="flex flex-col 
                 w-[32rem] rounded-xl pl-2 sm:flex-row justify-center ">
                  <h1 className=' rounded-l-lg w-1/4 bg-fuchsia-500 ' >Password</h1>
                  <div className="w-3/4  rounded-sm overflow-hidden">
                    <input type="password" value={password} className=" w-full p-1" onChange={passchange} />
                  </div>
                </div>
                <div>
                  <button onClick={register} className="border-black border  bg-fuchsia-700 rounded-lg text- p-1 px-4 w-auto">Submit</button>
                </div>
                <div>
                  <button onClick={toggleSignup} className="hover:text-blue-200 text-white hover:cursor-pointer">Login?</button>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div> 
    {launch && (
      <div className="w-full h-full justify-center flex mt--[600px]">
        <motion.div
          initial={{
            x: '0%',
            y: 'calc(100vh - 15rem)',
            width: '15rem',
            height: '15rem',
          }}
          animate={{
            x: 'calc(100vw - -1rem)', // Move to the right (top-right corner)
            y: '-300%', // Move to the top (top-right corner)
            width: '15rem',
            height: '15rem',
            opacity:1
          }}
          transition={{
            duration: 1, // Adjust the duration based on launch state
            ease: 'easeInOut',
          }}
          className="fixed bottom-0 left-0 z-500"
        >
          <img src={rocket} alt="Rocket" className="h-full w-full object-contain" />
        </motion.div>
        </div>  
       
        ) }
    </>
  );
}   
