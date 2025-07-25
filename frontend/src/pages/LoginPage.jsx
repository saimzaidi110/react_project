import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function SignupPage() {
    const {userlogin }=useContext(UserContext)
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();


        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:3000/users/login", {

                email,
                password,
            });

            let { status, message, user } = response.data
            if (status) {
                console.log("Login success:", user);
                toast.success(message)
                userlogin(user);

                // Navigate to login page or dashboard
                
                if(user?.role=="admin"){
                    navigate('/dashboard')
                }
                
                else{
                    navigate("/");
                }

            }
            else {
                toast.error(message)
            }

        } catch (err) {
            console.error("Login error:", err);
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };


    // emailRef.current.value = ""
    // passwordRef.current.value = ""



    return (
        <div>

            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Welcome Back!</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Login to your account</p>
                    </div>

                    <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div class="overflow-hidden bg-white rounded-md shadow-md">
                            <div class="px-4 py-6 sm:px-8 sm:py-7">
                                <form action="#" method="POST">
                                    <div class="space-y-5">
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter email to get started"
                                                    ref={emailRef}
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div class="flex items-center justify-between">
                                                <label for="" class="text-base font-medium text-gray-900"> Password </label>

                                                <a href="#" title="" class="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"> Forgot password? </a>
                                            </div>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                        />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="password"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter your password"
                                                    ref={passwordRef}
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button onClick={handleSubmit} class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                Log in
                                            </button>
                                        </div>

                                        <div class="text-center">
                                            <p class="text-base text-gray-600">Don’t have an account? <Link to="/signup" title="" class="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Create a free account</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
