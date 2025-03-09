import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { GoogleIcon } from '../icons';
import Logo from '../logo';

export default function Login() {
    return (
        <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
            <div className='flex items-center gap-4 my-6'>

                <Logo /> <span>/</span> <span className='text-2xl text-black font-medium'>Site adminstation</span>
            </div>
            <div className="bg-white p-10  rounded-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in</h2>
                <p className="text-gray-600 mb-6">Welcome back! Please log in to continue.</p>
                <button
                    className="flex items-center  gap-3 justify-center border border-gray-300 hover:bg-blue-50 text-gray-700 py-3 px-4 w-full rounded-md transition duration-200"
                    onClick={() => signIn('google')}
                >
                    <GoogleIcon /> 
                    Sign in with Google
                </button>
                <p className='text-gray-600 mt-4'>Only prelisted admins can login, if you can't access this, pleace contact the developer for <a href='mailto:jazzybruno45@gmail.com' className='text-blue-600'>help</a> </p>
            </div>
            <Link href="/" className="mt-6 text-gray-600 hover:text-blue-600 transition duration-200">
                Go back home
            </Link>
        </div>
    );
}
