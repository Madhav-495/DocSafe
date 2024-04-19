import React, { useEffect, useState, useCallback } from 'react';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import axios from 'axios'
function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerId, setRegisterId] = useState("");
  const SingupHandler = useCallback(async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('registerEmail', registerEmail);
      formData.append('registerPassword', registerPassword);
      formData.append('registerName', registerName);
      formData.append('registerId', registerId);
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log(response.data);
    } catch (error) {
      console.log(`something went wrong ${error} `)
    }
  }, []);

  const AnimatedText = ({ text }) => {
    const words = text.split(' ');
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [cursorPosition, setCursorPosition] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setVisibleIndex(prevIndex => (prevIndex + 1) % words.length);
        setCursorPosition(words.slice(0, visibleIndex + 1).join(' ').length);
      }, 500); // Adjust the duration between texts as needed

      return () => clearInterval(interval);
    }, [words, visibleIndex]);

    return (
      <div className="relative">
        <p className='font-medium text-lg leading-1 text-pink-400'>
          {words.slice(0, visibleIndex + 1).join(' ')}
        </p>
      </div>
    );
  };
  const LoginForm = () => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className='p-3 text-3xl font-bold text-sky-400'>Dsafe</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <h3 className='text-xl font-semibold text-sky-400 pt-2'>Sign In!</h3>
        <div className='flex space-x-2 m-4 items-center justify-center'>
          <div className="socialIcon">
            <Facebook />
          </div>
          <div className="socialIcon">
            <GitHub />
          </div>
          <div className="socialIcon">
            <Google />
          </div>
        </div>
        {/* Inputs */}
        <div className='flex flex-col items-center justify-center'>
          <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-400 m-1 focus:shadow-md focus:border-sky-400 focus:outline-none focus:ring-0 text-black' placeholder='Email'></input>
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-400 m-1 focus:shadow-md focus:border-sky-400 focus:outline-none focus:ring-0 text-black' placeholder='Password'></input>
          <button className='rounded-2xl m-2 text-white bg-sky-400 w-2/5 px-4 py-2 shadow-md hover:text-sky-400 hover:bg-white transition duration-200 ease-in'>
            Sign In
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <p className='text-sky-400 mt-4 text-sm'>Don't have an account?</p>
        <p className='text-sky-400 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
      </div>
    )
  }

  const SignUpForm = () => {
    return (
      <div className="bg-sky-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <h2 className='p-3 text-3xl font-bold text-white'>DocuSafe</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
        <div className='flex space-x-2 m-4 items-center justify-center'>
          <div className="socialIcon border-white">
            <Facebook className="text-white" />
          </div>
          <div className="socialIcon border-white">
            <GitHub className="text-white" />
          </div>
          <div className="socialIcon border-white">
            <Google className="text-white" />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-2'>
          <input
            type="text"
            className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-400 m-1 focus:shadow-md focus:border-sky-400 focus:outline-none focus:ring-0 text-black'
            placeholder='Name'
            value={registerName} // Attach the state hook value
            onChange={(e) => setRegisterName(e.target.value)}
             // Set the state hook value on change
          />

          <input
            type='email'
            className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-400 m-1 focus:shadow-md focus:border-sky-400 focus:outline-none focus:ring-0 text-black'
            placeholder='Email'
            value={registerEmail} // Attach the state hook value
            onChange={(e) => setRegisterEmail(e.target.value)} // Set the state hook value on change
          />

          <input
            type="password"
            className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-400 m-1 focus:shadow-md focus:border-sky-400 focus:outline-none focus:ring-0 text-black'
            placeholder='Password'
            value={registerPassword} // Attach the state hook value
            onChange={(e) => setRegisterPassword(e.target.value)} // Set the state hook value on change
          />

          <input
            type="text"
            className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-400 m-1 focus:shadow-md focus:border-sky-400 focus:outline-none focus:ring-0 text-black'
            placeholder='Regno or FacultyId'
            value={registerId} // Attach the state hook value
            onChange={(e) => setRegisterId(e.target.value)} // Set the state hook value on change
          />
          <button className='rounded-2xl m-4 text-sky-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-sky-400 transition duration-200 ease-in' onclick={SingupHandler}>
            Sign Up
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className='text-white mt-4 text-sm'>Already have an account?</p>
        <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className='text-6xl text-sky-500 font-bold'>DocuSafe</p>
          <AnimatedText text="Save Your Docs , Use Them EveryWhere Anytime with Anyone" />

        </div>
        {
          isLogin ? (
            <LoginForm />
          ) : (
            <SignUpForm />
          )
        }
      </main>
    </div>
  )
}

export default LoginPage;
