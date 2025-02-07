"use client";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect } from "react"

const UserPage = () => {
    const router = useRouter()
    useEffect(() => {
        const flag = false
        if(flag){
            router.push('/')

        }
    }, [])


    return(
        <>
            <div className="max-w-2xl mx-auto p-4">
                <div className="bg-white shadow-lg rounded-2xl p-6">
                    {/* Header Section */}
                    <div className="relative h-40 bg-green-700 rounded-t-2xl">
                    <div className="absolute -bottom-12 left-4 w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                        <img 
                        src="https://cdn.pixabay.com/photo/2020/05/11/04/13/mickey-mouse-5156421_1280.png" 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    </div>
                    
                    {/* Profile Info */}
                    <div className="mt-14 px-4">
                    <h1 className="text-2xl font-bold">John Doe</h1>
                    <p className="text-gray-500">@johndoe</p>
                    <p className="mt-2 text-gray-700">Web Developer | Tech Enthusiast | Coffee Lover</p>
                    <div className="mt-3 flex space-x-4 text-gray-600">
                        <span><strong>500</strong> Following</span>
                        <span><strong>1.2K</strong> Followers</span>
                    </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="mt-4 flex justify-end">
                    <button className="bg-green-700 text-white px-4 py-2 rounded-xl">Follow</button>
                    </div>
                </div>
                
                {/* Posts Section */}
                <div className="mt-6">
                    <div className="bg-white shadow-md rounded-2xl p-4">
                    <p className="text-gray-800">Excited to start a new project! 🚀 #coding</p>
                    <p className="text-gray-500 mt-2">2 hours ago</p>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl p-4 mt-4">
                    <p className="text-gray-800">Just discovered a cool new JavaScript library. More on this soon!</p>
                    <p className="text-gray-500 mt-2">1 day ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPage