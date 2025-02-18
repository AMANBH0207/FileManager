import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, React } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const[login,setLogin]=useState('email')

  const navigatetoExplorer = ()=>{
    navigate('/explorer')
  }


  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='border border-gray-200 rounded-lg lg:w-[28%]'>
        <div className="flex flex-col px-8 py-8 ">
  <div className="sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to access your files</h2>
  </div>

  <div className="sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        {login==='email'?
        <>
        <label className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
        </>
        :
        <>
        <label className="block text-sm/6 font-medium text-gray-900">Phone number</label>
        <div className="mt-2">
          <input type="phone" name="phone" id="phone" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
        </>
        }
        
      </div>

      <div>

      {login==='email'?
      <>
        <div className="flex items-center justify-between">
          <label className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </>
      :
      <>
      <div className="flex items-center justify-between">
          <label className="block text-sm/6 font-medium text-gray-900">Otp</label>
        </div>
        <div className="mt-2">
          <input type="number" name="otp" id="otp" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      
      </>
      }
        
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={navigatetoExplorer}>Sign in</button>
      </div>
    </form>

    <div className="mt-10 px-10 text-center text-sm/6 text-gray-500 flex justify-between">

    <div className='border border-gray-200 rounded-full cursor-pointer px-3 py-2'><FontAwesomeIcon icon={faGoogle} /></div>
    <div className='border border-gray-200 rounded-full cursor-pointer px-3 py-2' onClick={()=>setLogin('email')}><FontAwesomeIcon icon={faEnvelope} /></div>
    <div className='border border-gray-200 rounded-full cursor-pointer px-3 py-2'onClick={()=>setLogin('phone')}><FontAwesomeIcon icon={faPhone} /></div>
    </div>

  </div>
</div>
    </div>
    </div>
    
        

  )
}

export default Login