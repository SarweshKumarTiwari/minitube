import axios, { AxiosError } from 'axios';
import logo from '../assets/icon-50x50.png'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Alerts from '../components/Alerts';
import { useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import { useMutation } from 'react-query';
import Spinner from '../components/spinner/Spinner';

type loginForm = {
    email: string,
    password: string
}
export default function SignIn() {
    const navigate = useNavigate();
    const [alert, setalert] = useState<JSX.Element | null>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<loginForm>();
    const { setuser } = useContext(AuthContext);
    const submit = useMutation({
        mutationFn: (data: loginForm) => axios.post("/auth/token", data),
        onSuccess: () => {
            setuser({ isAuth: true });
            navigate("/");
        },
        onError: (err: AxiosError<{ error: string }>) => {
            setalert(
                <Alerts callback={() => setalert(null)} state='error'>
                    <p>{err.response?.data.error}</p>
                </Alerts>
            )
        }
    })
    const onSubmit: SubmitHandler<loginForm> = (data: loginForm) => submit.mutate(data);
    return (
        <div className="min-h-screen  flex flex-col items-center pt-4 bg-gray-100">
            <div className={`relative bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-0 md:py-4 rounded-md w-full max-w-sm `}>
                {alert}
                <div className={`flex flex-col w-full ${alert ? "blur-sm" : ""}`}>
                    <div className="flex w-full space-x-2 items-center justify-center">
                        <img src={logo} alt="logo" width={50} height={50} />
                        <h1 className="text-2xl text-gray-600">MiniTube</h1>
                    </div>
                    <button className="relative mt-4 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                        <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
                        <span>Login with Facebook</span>
                    </button>
                    <div className="relative mt-4 h-px bg-gray-300">
                        <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col space-y-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input id="email" {...register("email", { required: "email is required" })} type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                                </div>
                                <p className="text-sm text-[red]">{errors.email?.message?.length ? errors.email?.message : ""}</p>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <span>
                                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input id="password" {...register("password", { required: "password is not given" })} type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
                                </div>
                                <p className="text-sm text-[red]">{errors.password?.message?.length ? errors.password?.message : ""}</p>
                            </div>

                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex ml-auto">
                                    <a href="/" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
                                </div>
                            </div>

                            <div className="flex w-full">
                                <button type="submit" className="focus:outline-none text-white text-sm sm:text-base bg-greenc hover:bg-greenc-200 rounded py-2 w-full transition duration-150 ease-in" disabled={submit.isLoading}>
                                   {!submit.isLoading?<div className='flex items-center justify-center'>
                                        <span className="mr-2 uppercase">Login</span>
                                        <span>
                                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                    </div>:
                                    <Spinner className='white w-[10px] h-[10px]'/>}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <a href="/signup" className="inline-flex items-center font-bold text-greenc hover:text-greenc-200 text-xs text-center">
                            <span>
                                <svg className="h-6 w-6 fill-greenc stroke-greenc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </span>
                            <span className="ml-2">You don't have an account?</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
