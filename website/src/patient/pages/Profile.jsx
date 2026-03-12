import { useState, useEffect } from "react"
import PatientLayout from "../PatientLayout"

function Profile(){

const user = JSON.parse(localStorage.getItem("currentUser")) || {}

const [profile,setProfile] = useState({
firstName:"",
lastName:"",
email:"",
phone:"",
age:"",
gender:"",
address:"",
photo:""
})

useEffect(()=>{

const stored = JSON.parse(localStorage.getItem("patientProfile"))

if(stored){
setProfile(stored)
}else{
setProfile({
firstName:user?.name || "",
lastName:"",
email:user?.email || "",
phone:"",
age:"",
gender:"",
address:"",
photo:""
})
}

},[])

const handleChange = (e)=>{

setProfile({
...profile,
[e.target.name]:e.target.value
})

}

const handlePhoto = (e)=>{

const file = e.target.files[0]

const reader = new FileReader()

reader.onloadend = ()=>{
setProfile({...profile,photo:reader.result})
}

if(file){
reader.readAsDataURL(file)
}

}

const saveProfile = ()=>{

localStorage.setItem("patientProfile",JSON.stringify(profile))

alert("Profile Updated")

}

return(

<PatientLayout>

<h1 className="text-2xl font-bold mb-6">
My Profile
</h1>

<div className="bg-white p-8 rounded-xl shadow max-w-3xl">

{/* Profile Image */}

<div className="flex items-center gap-6 mb-6">

<img
src={profile.photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
className="w-24 h-24 rounded-full object-cover border"
/>

<input type="file" onChange={handlePhoto}/>

</div>


{/* Name */}

<div className="grid grid-cols-2 gap-4 mb-4">

<input
name="firstName"
value={profile.firstName}
onChange={handleChange}
placeholder="First Name"
className="border p-2 rounded"
/>

<input
name="lastName"
value={profile.lastName}
onChange={handleChange}
placeholder="Last Name"
className="border p-2 rounded"
/>

</div>


{/* Email */}

<input
name="email"
value={profile.email}
onChange={handleChange}
placeholder="Email"
className="border p-2 rounded w-full mb-4"
/>


{/* Phone */}

<input
name="phone"
value={profile.phone}
onChange={handleChange}
placeholder="Phone Number"
className="border p-2 rounded w-full mb-4"
/>


{/* Age + Gender */}

<div className="grid grid-cols-2 gap-4 mb-4">

<input
name="age"
value={profile.age}
onChange={handleChange}
placeholder="Age"
className="border p-2 rounded"
/>

<select
name="gender"
value={profile.gender}
onChange={handleChange}
className="border p-2 rounded"
>

<option value="">Gender</option>
<option>Male</option>
<option>Female</option>

</select>

</div>


{/* Address */}

<textarea
name="address"
value={profile.address}
onChange={handleChange}
placeholder="Address"
className="border p-2 rounded w-full mb-4"
/>


{/* Save */}

<button
onClick={saveProfile}
className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
>
Save Profile
</button>

</div>

</PatientLayout>

)

}

export default Profile