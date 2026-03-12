import { useState, useEffect } from "react"
import DoctorSidebar from "../components/DoctorSidebar"

function DoctorProfile(){

const user = JSON.parse(localStorage.getItem("currentUser"))

const [profile,setProfile] = useState(null)
const [editMode,setEditMode] = useState(false)

const [formData,setFormData] = useState({
firstName:"",
lastName:"",
email:user?.email || "",
phone:"",
specialization:"",
experience:"",
clinicAddress:"",
photo:""
})

useEffect(()=>{

const savedProfile = JSON.parse(
localStorage.getItem(`doctorProfile_${user?.email}`)
)

if(savedProfile){

setProfile(savedProfile)
setFormData(savedProfile)

}else{

const defaultProfile = {
firstName:user?.name?.split(" ")[0] || "",
lastName:user?.name?.split(" ")[1] || "",
email:user?.email || "",
phone:"",
specialization:"",
experience:"",
clinicAddress:"",
photo:""
}

setProfile(defaultProfile)
setFormData(defaultProfile)

}

},[])

const handleChange = (e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
})
}

const handleImage = (e)=>{

const file = e.target.files[0]
if(!file) return

const reader = new FileReader()

reader.onloadend = ()=>{
setFormData({
...formData,
photo:reader.result
})
}

reader.readAsDataURL(file)

}

const handleAvatarUpload = (e)=>{

const file = e.target.files[0]
if(!file) return

const reader = new FileReader()

reader.onloadend = ()=>{

const updatedProfile = {
...(profile || formData),
photo:reader.result
}

localStorage.setItem(
`doctorProfile_${user?.email}`,
JSON.stringify(updatedProfile)
)

setProfile(updatedProfile)
setFormData(updatedProfile)

}

reader.readAsDataURL(file)

}

const triggerFileInput = ()=>{
document.getElementById("avatarUpload").click()
}

const saveProfile = ()=>{

localStorage.setItem(
`doctorProfile_${user?.email}`,
JSON.stringify(formData)
)

setProfile(formData)
setEditMode(false)

alert("Profile Saved")

}

return(

<div className="flex bg-gray-50 min-h-screen">

<DoctorSidebar/>

<div className="flex-1 p-8">

<h1 className="text-2xl font-bold mb-6">
Doctor Profile
</h1>

<div className="bg-white rounded-xl shadow p-8 max-w-4xl">

{/* VIEW MODE */}

{!editMode && profile && (

<div>

<div className="flex items-center justify-between mb-8">

<div className="flex items-center gap-4">

<input
type="file"
accept="image/*"
id="avatarUpload"
className="hidden"
onChange={handleAvatarUpload}
/>

{/* Avatar */}

<div
onClick={triggerFileInput}
className="cursor-pointer relative w-20 h-20"
>

{profile.photo ? (

<img
src={profile.photo}
className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
/>

):( 

<div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
{profile.firstName?.charAt(0)}
</div>

)}

{/* Camera Icon */}

<div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">

<svg
xmlns="http://www.w3.org/2000/svg"
className="w-5 h-5 text-gray-600"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>

<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M3 7h4l2-2h6l2 2h4v12H3V7z"
/>

<circle cx="12" cy="13" r="3"/>

</svg>

</div>

</div>

<div>

<h2 className="text-xl font-semibold">
Dr. {profile.firstName} {profile.lastName}
</h2>

<p className="text-gray-500">
{profile.specialization}
</p>

</div>

</div>

<button
onClick={()=>setEditMode(true)}
className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
>
Edit Profile
</button>

</div>

{/* Profile Info */}

<div className="grid grid-cols-2 gap-6">

<div>
<p className="text-gray-500 text-sm">First Name</p>
<p className="font-semibold">{profile.firstName}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Last Name</p>
<p className="font-semibold">{profile.lastName}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Email</p>
<p className="font-semibold">{profile.email}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Phone</p>
<p className="font-semibold">{profile.phone}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Specialization</p>
<p className="font-semibold">{profile.specialization}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Experience</p>
<p className="font-semibold">{profile.experience} years</p>
</div>

<div className="col-span-2">
<p className="text-gray-500 text-sm">Clinic Address</p>
<p className="font-semibold">{profile.clinicAddress}</p>
</div>

</div>

</div>

)}

{/* EDIT MODE */}

{editMode && (

<div>

<h2 className="text-lg font-semibold mb-6">
Edit Profile
</h2>

<label className="block mb-6">

<p className="text-sm text-gray-500 mb-2">
Upload Profile Picture
</p>

<input
type="file"
accept="image/*"
onChange={handleImage}
className="block w-full text-sm text-gray-500
file:mr-4 file:py-2 file:px-4
file:rounded-lg file:border-0
file:bg-blue-600 file:text-white
hover:file:bg-blue-700"
/>

</label>

<div className="grid grid-cols-2 gap-4 mb-4">

<input
name="firstName"
placeholder="First Name"
value={formData.firstName}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="lastName"
placeholder="Last Name"
value={formData.lastName}
onChange={handleChange}
className="border p-2 rounded"
/>

</div>

<input
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
className="border p-2 rounded w-full mb-4"
/>

<input
name="phone"
placeholder="Phone Number"
value={formData.phone}
onChange={handleChange}
className="border p-2 rounded w-full mb-4"
/>

<div className="grid grid-cols-2 gap-4 mb-4">

<input
name="specialization"
placeholder="Specialization"
value={formData.specialization}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="experience"
placeholder="Experience (years)"
value={formData.experience}
onChange={handleChange}
className="border p-2 rounded"
/>

</div>

<textarea
name="clinicAddress"
placeholder="Clinic Address"
value={formData.clinicAddress}
onChange={handleChange}
className="border p-2 rounded w-full mb-4"
/>

<div className="flex gap-3">

<button
onClick={saveProfile}
className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
>
Save Profile
</button>

<button
onClick={()=>setEditMode(false)}
className="bg-gray-300 px-6 py-2 rounded-lg"
>
Cancel
</button>

</div>

</div>

)}

</div>

</div>

</div>

)

}

export default DoctorProfile