import { useEffect, useState } from "react"

function AppointmentRequests(){

const [appointments,setAppointments] = useState([])

const loadAppointments = () => {

const data =
JSON.parse(localStorage.getItem("appointments")) || []

// show only pending appointments
const pending = data.filter(a => a.status === "pending")

setAppointments(pending)

}

useEffect(()=>{

// load initially
loadAppointments()

// listen for updates
window.addEventListener("appointmentsUpdated", loadAppointments)

return () =>
window.removeEventListener("appointmentsUpdated", loadAppointments)

},[])

const updateStatus = (id,status)=>{

let allAppointments =
JSON.parse(localStorage.getItem("appointments")) || []

// update status
allAppointments = allAppointments.map(a => {

if(a.id === id){
return {...a, status: status}
}

return a

})

// save updated appointments
localStorage.setItem("appointments", JSON.stringify(allAppointments))

// trigger dashboard update
window.dispatchEvent(new Event("appointmentsUpdated"))

}

return(

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Appointment Requests
</h3>

{appointments.length === 0 && (
<p className="text-gray-500">No pending requests</p>
)}

{appointments.map(a=>(
<div key={a.id} className="flex justify-between items-center border-b py-3">

<div>
<p className="font-semibold">{a.name}</p>
<p className="text-sm text-gray-500">{a.age} yrs • {a.gender}</p>
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

)

}

export default AppointmentRequests