import { useState } from "react"
import DoctorSidebar from "../components/DoctorSidebar"

function DoctorProfile(){

const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [email,setEmail] = useState("")
const [designation,setDesignation] = useState("")
const [photo,setPhoto] = useState(null)

const saveProfile = ()=>{

const profile = {
firstName,
lastName,
email,
designation,
photo
}

localStorage.setItem("doctorProfile",JSON.stringify(profile))

alert("Profile Updated")

}

const handlePhoto = (e)=>{

const file = e.target.files[0]

const reader = new FileReader()

reader.onloadend = ()=>{
setPhoto(reader.result)
}

reader.readAsDataURL(file)

}

return(

<div className="flex min-h-screen bg-gray-50">

<DoctorSidebar/>

<div className="flex-1 p-8">

<h1 className="text-2xl font-bold mb-6">
Doctor Profile
</h1>

<div className="bg-white p-6 rounded-xl shadow max-w-lg">

{/* Photo */}

<div className="mb-4">

{photo && (
<img
src={photo}
alt="profile"
className="w-24 h-24 rounded-full mb-3"
/>
)}

<input type="file" onChange={handlePhoto}/>

</div>

<label className="block font-medium mb-1">
First Name
</label>

<input
className="border p-2 w-full mb-3 rounded"
onChange={(e)=>setFirstName(e.target.value)}
/>

<label className="block font-medium mb-1">
Last Name
</label>

<input
className="border p-2 w-full mb-3 rounded"
onChange={(e)=>setLastName(e.target.value)}
/>

<label className="block font-medium mb-1">
Current Email
</label>

<p className="text-gray-600 mb-2">
doctor@example.com
</p>

<label className="block font-medium mb-1">
Update Email
</label>

<input
className="border p-2 w-full mb-3 rounded"
onChange={(e)=>setEmail(e.target.value)}
/>

<label className="block font-medium mb-1">
Designation
</label>

<input
placeholder="Cardiologist / Dentist"
className="border p-2 w-full mb-4 rounded"
onChange={(e)=>setDesignation(e.target.value)}
/>

<button
onClick={saveProfile}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Save Profile
</button>

</div>

</div>

</div>

)

}

export default DoctorProfile