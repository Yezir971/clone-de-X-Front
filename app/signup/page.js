"use client"
import { useRef, useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("")
    // la ref va permettre de dissocier les informations a envoyer en bdd du confirm mot de passe 
    const refName = useRef()
    const refMail = useRef()
    const refPassword1 = useRef()
    const refPassword2 = useRef()
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
            // une fois evoyer on reinitialiser les inputs 
            refName.current.value = ""
            refMail.current.value = ""
            refPassword1.current.value = ""
            refPassword2.current.value = ""
            setFormData({})
            const data = await response.json()
            setMessage(data.message)
            
        } catch (error) {
            console.error(error.message)
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== refPassword2.current.value) {
            setMessage('Les mots de passe ne correspondent pas');
            return;
        }
        sendUser(formData)





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
                                <input onChange={handleChange} ref={refName} type="text" name="username" id="username" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange} ref={refMail} type="text" name="email" id="email" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
                            </div>
                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <input onChange={handleChange} ref={refPassword1} type="password" name="password" id="password" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
                            </div>
                            <div>
                                <label htmlFor="password2">Confirmer le mot de passe</label>
                                <input ref={refPassword2} type="password" name="password2" id="password2" className="w-full p-3 bg-white border border-[#00A5CF] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00A5CF]"/>
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