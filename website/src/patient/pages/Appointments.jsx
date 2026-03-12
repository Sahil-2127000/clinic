import { useEffect, useState } from "react"
import PatientLayout from "../PatientLayout"

function Appointments(){

const [appointments,setAppointments] = useState([])

const user = JSON.parse(localStorage.getItem("currentUser"))

useEffect(()=>{

const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || []
console.log(storedAppointments);
// show only appointments of logged in patient
const myAppointments = storedAppointments.filter(
    a => a.email === user?.email
    )
console.log(myAppointments);
setAppointments(myAppointments)

},[])

const getStatusColor = (status)=>{

if(status === "pending") return "bg-yellow-100 text-yellow-700"
if(status === "approved") return "bg-green-100 text-green-700"
if(status === "rejected") return "bg-red-100 text-red-700"
if(status === "completed") return "bg-gray-200 text-gray-700"

return ""

}

return(

<PatientLayout>

<h1 className="text-2xl font-bold mb-6">
My Appointments
</h1>

<div className="bg-white rounded-xl shadow p-6">

{appointments.length === 0 ? (

<p className="text-gray-500">
No appointments booked yet
</p>

) : (

appointments.map((a)=>(
<div
key={a.id}
className="flex justify-between items-center border-b py-4"
>

<div>

<p className="font-semibold text-lg">
{a.name}
</p>

<p className="text-sm text-gray-500">
Age: {a.age} • {a.gender}
</p>

<p className="text-sm text-gray-500">
Date: {a.date}
</p>

<p className="text-sm text-gray-500">
Time: {a.time}
</p>

</div>

<span
className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(a.status)}`}
>
{a.status}
</span>

</div>
))

)}

</div>

</PatientLayout>

)

}

export default Appointments