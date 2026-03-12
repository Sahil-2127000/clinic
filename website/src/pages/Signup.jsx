import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSignup = (e)=>{

e.preventDefault()

const users = JSON.parse(localStorage.getItem("users")) || []

const newUser = {
name,
email,
password
}

users.push(newUser)

localStorage.setItem("users",JSON.stringify(users))

alert("Signup successful")

navigate("/login")

}

return(

<div className="min-h-screen flex items-center justify-center bg-blue-50">

<div className="bg-white p-8 rounded-xl shadow-lg w-96">

<button
onClick={()=>navigate("/")}
className="text-sm text-gray-500 mb-4"
>
← Back to Home
</button>

<h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
Create Account
</h2>

<form onSubmit={handleSignup} className="space-y-4">

<input
placeholder="Full Name"
className="w-full border p-3 rounded-lg"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="w-full border p-3 rounded-lg"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full border p-3 rounded-lg"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
>
Signup
</button>

</form>

<p className="text-center text-gray-600 mt-4">

Already have an account?

<span
onClick={()=>navigate("/login")}
className="text-blue-600 cursor-pointer ml-1"
>
Login
</span>

</p>

</div>

</div>

)

}

export default Signup