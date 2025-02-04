"use client"
import { useRef, useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("")
    // la ref va permettre de dissocier les informations a envoyer en bdd du confirm mot de passe 
    const ref = useRef()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const sendUser = async (body) => {
        try {
            const response = await fetch('http://localhost:3000/api/user/signup', {
                method:"POST",
                headers:{
                    'Content-type':'application/json',
                },
                body: JSON.stringify(body)

            })
            const data = await response.json()
            setMessage(data.message)
            console.log(data)
            
        } catch (error) {
            console.error(error.message)
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== ref.current.value) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        sendUser(formData)
        console.log('Inscription', formData);
    };
    return(
        <>
            <div className="min-h-screen  flex items-center justify-center px-4 ">
                <div className="w-full max-w-md">
                    <div className="border border-[#00A5CF] rounded-xl shadow-lg p-8">
                        <form className="space-y-6" onSubmit={handleSubmit} method="post" action="">
                            <h1>Créer un compte</h1>
                            
                            <div>
                                <label htmlFor="username">Nom d'utilisateur</label>
                                <input onChange={handleChange} type="text" name="username" id="username" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange} type="text" name="email" id="email" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
                            </div>
                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <input onChange={handleChange} type="password" name="password" id="password" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
                            </div>
                            <div>
                                <label htmlFor="password2">Confirmer le mot de passe</label>
                                <input ref={ref} type="password" name="password2" id="password2" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
                                
                            </div>
                            <input type="submit" value="Inscription"/>

                            <p>Déjà un compte ? <a href="/login">Connectez-vous</a></p>
                        </form>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp