import { useEffect, useState } from "react"
import DoctorSidebar from "../components/DoctorSidebar"

function AppointmentRequests(){

const [appointments,setAppointments] = useState([])

const loadAppointments = () => {

const data =
JSON.parse(localStorage.getItem("appointments")) || []

setAppointments(data)

}

useEffect(()=>{

loadAppointments()

window.addEventListener("appointmentsUpdated", loadAppointments)

return () =>
window.removeEventListener("appointmentsUpdated", loadAppointments)

},[])

const updateStatus = (id,status)=>{

let all =
JSON.parse(localStorage.getItem("appointments")) || []

all = all.map(a=>{
if(a.id === id){
return {...a,status}
}
return a
})

localStorage.setItem("appointments",JSON.stringify(all))

window.dispatchEvent(new Event("appointmentsUpdated"))

}

const getStatusColor = (status)=>{

if(status === "approved") return "bg-green-100 text-green-700"
if(status === "pending") return "bg-yellow-100 text-yellow-700"
if(status === "rejected") return "bg-red-100 text-red-700"
if(status === "completed") return "bg-gray-200 text-gray-700"
if(status === "cancelled") return "bg-red-200 text-red-600"

return ""

}

return(

<div className="flex bg-gray-50 min-h-screen">

{/* Sidebar */}
<div className="fixed top-0 left-0 h-screen w-64">
<DoctorSidebar/>
</div>

{/* Main Content */}
<div className="flex-1 ml-64 p-8">

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Appointment History
</h3>

{appointments.length === 0 && (
<p className="text-gray-500">
No appointments yet
</p>
)}


{appointments
.sort((a,b)=>{
const [d1,m1,y1] = a.date.split("-").map(Number)
const [d2,m2,y2] = b.date.split("-").map(Number)

const date1 = new Date(y1, m1-1, d1, ...a.time.split(":").map(Number))
const date2 = new Date(y2, m2-1, d2, ...b.time.split(":").map(Number))

return date1 - date2
})
.map(a=>(

<div key={a.id} className="flex justify-between border-b py-3 items-center">

<div>
<p className="font-semibold">{a.name}</p>

<p className="text-sm text-gray-500">
{a.date} • {a.time}
</p>
</div>

<div className="flex items-center gap-3">

<span
className={`px-2 py-1 rounded text-sm ${getStatusColor(a.status)}`}
>
{a.status}
</span>

{a.status === "pending" && (
<>
<button
onClick={()=>updateStatus(a.id,"approved")}
className="bg-green-500 text-white px-3 py-1 rounded"
>
Accept
</button>

<button
onClick={()=>updateStatus(a.id,"rejected")}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Reject
</button>
</>
)}

</div>

</div>

))}

</div>

</div>

</div>

)

}

export default AppointmentRequests