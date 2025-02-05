import  connect  from "@/libs/mongodb";
import Users from "@/models/users.model"
import bcrypt from 'bcrypt'
const nodemailer = require('nodemailer'); 
const jwt = require('jsonwebtoken');


export async function POST(req) {
    try {
        connect()
        const body = await req.json()
        await addUser(body)
        // envoie de l'email pour valider le compte
        let user = await body
        console.log(user)
        return Response.json({message:"Un mail de confirmation vous à été envoyer !",  status: 201 })

        // return Response.json({message:"Votre compte a bien été créé !",  newUser:newUser, status: 201 })
    } catch (error) {
        return Response.json({message:"Votre compte n'a pas été créé !", error:error.message, status: 400 })
    }    
}

const sendMail  = async ({email, name}, id) => {
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_EMAIL_USERNAME;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: myEmail,
          pass: password,
        },
    });

    // // on génère le token 
    const token = jwt.sign(
        {
            id: id
        },
        process.env.TOKEN,
        { expiresIn: "24h"}
    )

    await transporter.sendMail({
        from: myEmail, 
        to: email, 
        subject: `Vérifiez votre email id : ${id}`, 
        text: `Hello ${name},\n\nMerci de vous être inscrit\n\nCordialement.`,
        html: `Cliquez sur ce lien pour vérifier votre email : http://localhost:3000/signup/${token}`, 
    });
}

const addUser = async (user) => {
    try {
        // hash du mot de passe entrer par l'utilisateur 
        
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = await Users.create({...user, password: hashedPassword, isVerified: false,})
        

        // mail de validation ici 
        // on trouve les informations de l'utilisateur avec findOne 
        const userInDb = await Users.findOne({email: user.email})
        if (!userInDb) {
            throw new Error("Utilisateur introuvable après insertion.");
        }
        
        const userId = userInDb._id.toString();
        sendMail(user, userId)
        // mail de validation ici 
        
    } catch (error) {
        // console.log(error.message)
        throw new Error(error.message);
        
    }
}