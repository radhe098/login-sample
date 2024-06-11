import {React} from 'react';

export default function login() {
  return (
    <div className='  flex justify-center items-center h-screen' >
        <div  className="bg-white bg-opacity-65 w-[70%] rounded-md  h-[70%] text-center mt-12  text-2xl flex flex-col justify-start items-center">
        <h1 className=' text-4xl mt-12 '>Sample Login Page</h1>
      <div className='text-2xl  flex flex-col justify-center items-center h-[24rem] w-[85%]'>
      <div className='w-[90%]  p-12 h-auto flex flex-col space-y-8 justify-center m-auto md:flex-wrap sm:flex-wrap'>
        <div className="flex justify-center gap-3">
          <h1>Username</h1>
        <div className='w-[12rem] overflow-hidden bg-green-200'> 
          <input type="text" />
          </div> 
        </div>
        <div className="flex justify-center gap-3 ">
          <h1>password</h1>
          <div className='w-[12rem] overflow-hidden bg-green-200'> 
          <input type="text" />
          </div> 
        </div>
        <div >
            <button className=' border-black border bg-red-200 p-1 px-4 w-auto ' >Submit</button>
        </div>
        <div >
           <h1 className=' hover:text-blue-900 hover:cursor-pointer'>SignUp ?</h1>
        </div>
      </div>    
    </div>
        </div>
        
    </div>
  )
}
