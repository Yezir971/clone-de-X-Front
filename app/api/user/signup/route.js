import  connect  from "@/libs/mongodb";
import Users from "@/models/users.model"
export async function POST(req) {
    try {
        connect()
        const body = await req.json()
        const newUser = await addUser(body)

        return Response.json({massage:"nouvelle utilisateur créé",  newUser:newUser, status: 201 })
    } catch (error) {
        console.error(error.message)
    }    
}

const addUser = async (user) => {
    try {
        const response = Users.create({...user})
        return response
    } catch (error) {
        throw new Error(error.massage);
        
    }
}