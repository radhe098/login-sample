import {React} from 'react';

export default function login() {
  return (
    <div className='  flex justify-center items-center h-screen' >
        <div className=" bg-white w-[75%] h-[85%] text-center  ">
            Login Page 
            <div className='bg-violet-800 text-2xl flex-col flex justify-center items-center h-[20rem]'>
      constraints
      <div className='w-[90%] bg-green-300 h-[200px] flex flex-col space-y-8 justify-center m-auto'>
        <div className="flex justify-between gap-12">
          <h1>Username</h1>
          <input type="text" className="flex-grow" />
        </div>
        <div className="flex justify-between gap-12">
          <h1>Username</h1>
          <input type="text" className="flex-grow" />
        </div>
        <div>
            <button>Submit</button>
        </div>
      </div>
    </div>
        </div>
        
    </div>
  )
}
