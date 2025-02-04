import  connect  from "@/libs/mongodb";
import Users from "@/models/users.model"
export async function POST(req) {
    try {
        connect()
        const body = await req.json()
        const newUser = await addUser(body)

        return Response.json({message:"Votre compte a bien été créé !",  newUser:newUser, status: 201 })
    } catch (error) {
        return Response.json({message:"Votre compte n'a pas été créé !", status: 400 })
    }    
}

const addUser = async (user) => {
    try {
        const response = Users.create({...user})
        return response
    } catch (error) {
        throw new Error(error.message);
        
    }
}