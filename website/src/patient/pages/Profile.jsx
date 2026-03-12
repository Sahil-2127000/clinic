import { useState, useEffect } from "react"
import PatientLayout from "../PatientLayout"

function Profile(){

const user = JSON.parse(localStorage.getItem("currentUser"))

const [profile,setProfile] = useState(null)
const [editMode,setEditMode] = useState(false)

const [formData,setFormData] = useState({
firstName:"",
lastName:"",
email:user?.email || "",
phone:"",
age:"",
gender:"",
address:"",
photo:""
})

useEffect(()=>{

const savedProfile = JSON.parse(localStorage.getItem("patientProfile"))

if(savedProfile){
setProfile(savedProfile)
setFormData(savedProfile)
}else{
setEditMode(true)
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

localStorage.setItem("patientProfile",JSON.stringify(updatedProfile))

setProfile(updatedProfile)
setFormData(updatedProfile)

}

reader.readAsDataURL(file)

}

const triggerFileInput = ()=>{
document.getElementById("avatarUpload").click()
}

const saveProfile = ()=>{

localStorage.setItem("patientProfile",JSON.stringify(formData))

setProfile(formData)

setEditMode(false)

alert("Profile Saved")

}

const editProfile = ()=>{
setEditMode(true)
}

return(

<PatientLayout>

<h1 className="text-2xl font-bold mb-6">
My Profile
</h1>

<div className="bg-white rounded-xl shadow p-8 max-w-4xl">

{/* VIEW MODE */}

{!editMode && profile && (

<div>

<div className="flex items-center justify-between mb-8">

<div className="flex items-center gap-4">

{/* Hidden input for avatar upload */}

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
className="cursor-pointer"
>

{profile.photo ? (

<img
src={profile.photo}
className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
/>

) : (

<div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
{profile.firstName?.charAt(0)}
</div>

)}

</div>

<div>

<h2 className="text-xl font-semibold">
{profile.firstName} {profile.lastName}
</h2>


</div>

</div>

<button
onClick={editProfile}
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
<p className="text-gray-500 text-sm">Age</p>
<p className="font-semibold">{profile.age}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Gender</p>
<p className="font-semibold">{profile.gender}</p>
</div>

<div className="col-span-2">
<p className="text-gray-500 text-sm">Address</p>
<p className="font-semibold">{profile.address}</p>
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

{/* Styled file upload */}

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
name="age"
placeholder="Age"
value={formData.age}
onChange={handleChange}
className="border p-2 rounded"
/>

<select
name="gender"
value={formData.gender}
onChange={handleChange}
className="border p-2 rounded"
>

<option value="">Gender</option>
<option>Male</option>
<option>Female</option>

</select>

</div>

<textarea
name="address"
placeholder="Address"
value={formData.address}
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

</PatientLayout>

)

}

export default Profile