import { useState } from "react"
import DoctorSidebar from "../components/DoctorSidebar"

function DoctorAppointments(){

const [appointments,setAppointments] = useState(
(JSON.parse(localStorage.getItem("appointments")) || [])
.filter(a => a.status === "pending")
)

const updateStatus = (id,status)=>{

let allAppointments =
JSON.parse(localStorage.getItem("appointments")) || []

// update appointment status
allAppointments = allAppointments.map(a=>{
if(a.id === id){
return {...a, status: status}
}
return a
})

// save updated list
localStorage.setItem("appointments", JSON.stringify(allAppointments))

// remove from doctor request list
setAppointments(prev => prev.filter(a => a.id !== id))

}

return(

<div className="flex bg-gray-50 min-h-screen">

<DoctorSidebar/>

<div className="flex-1 p-8">

<h2 className="text-2xl font-bold mb-6">
Appointment Requests
</h2>

{appointments.length === 0 && (
<p className="text-gray-500">No pending appointments</p>
)}

{appointments.map(a => (

<div key={a.id} className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">

<div>

<p className="font-semibold">{a.patient}</p>

<p className="text-sm text-gray-500">
{a.date} • {a.time}
</p>

</div>

<div>

<button
onClick={()=>updateStatus(a.id,"approved")}
className="bg-green-500 text-white px-3 py-1 rounded mr-2"
>
Accept
</button>

<button
onClick={()=>updateStatus(a.id,"rejected")}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Reject
</button>

</div>

</div>

))}

</div>

</div>

)

}

export default DoctorAppointments