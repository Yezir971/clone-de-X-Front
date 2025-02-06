"use client";

import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
    return(
        <>
            <div className="min-h-screen  flex items-center justify-center px-4 ">
                <div className="w-full max-w-md">
                    <div className="border border-[#16DB65] rounded-xl shadow-lg p-8">
                        <h1 className="text-[#ececec] text-3xl mb-3">Connectez-vous :</h1>
                            <form method="post" action="" className="flex flex-col space-y-6">
                            <div>
                                <label  htmlFor="username" className="text-[#ececec]">E-mail :</label>
                                <input  type="text" name="username" id="username" className="w-full p-3 bg-[#181818] border border-[#16DB65] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16DB65] focus:bg-[#1f1f1f] text-[#ececec]"/>
                            </div>
                            <div  className="relative">
                                <label  htmlFor="password" className="text-[#ececec]">Mot de passe :</label>
                                <input  type={showPassword ? 'text' : 'password'} name="password" id="password" className="w-full p-3 bg-[#181818] border border-[#16DB65] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16DB65] text-[#ececec] focus:bg-[#1f1f1f]"/>
                                <button type="button" className="absolute top-10 right-3" onClick={togglePasswordVisibility}>
                                    {showPassword ? <LuEye /> : < LuEyeClosed/>}
                                </button>
                            </div>
                            <input  type="submit" value="Connexion" className="bg-[#16DB65] hover:bg-[#058C42] border border-[#16DB65] hover:border-[#058C42] rounded-lg cursor-pointer text-lg"
                            />
                            <p className="text-[#ececec]">Pas encore de compte ? <a href="/signup" className="hover:underline">Inscrivez-vous</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login