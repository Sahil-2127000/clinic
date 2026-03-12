import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = (e) => {
    e.preventDefault()
  
    const users = JSON.parse(localStorage.getItem("users")) || []
  
    const user = users.find(
      u => u.email === email && u.password === password
    )
  
    if(user){
  
      // IMPORTANT: update current user
      localStorage.setItem("currentUser", JSON.stringify(user))
  
      navigate("/patient/dashboard")
  
    } else {
      alert("Invalid login")
    }
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
Clinic Login
</h2>

<form onSubmit={handleLogin} className="space-y-4">

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
Login
</button>

</form>

<p className="text-center text-gray-600 mt-4">

Don't have an account?

<span
onClick={()=>navigate("/signup")}
className="text-blue-600 cursor-pointer ml-1"
>
Signup
</span>

</p>

</div>

</div>

)

}

export default Login