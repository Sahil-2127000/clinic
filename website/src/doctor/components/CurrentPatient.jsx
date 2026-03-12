import { useEffect, useState } from "react"

function CurrentPatient(){

const [appointments,setAppointments] = useState([])

const loadAppointments = () => {

const data =
JSON.parse(localStorage.getItem("appointments")) || []

setAppointments(data)

}

useEffect(()=>{

// load initially
loadAppointments()

// listen for updates
window.addEventListener("appointmentsUpdated", loadAppointments)

return () =>
window.removeEventListener("appointmentsUpdated", loadAppointments)

},[])

// approved appointments act as queue
// get today's date in same format (dd-mm-yyyy)
const today = new Date()
const todayDate = today.toLocaleDateString("en-GB")

// approved appointments only for today
const approvedAppointments =
appointments.filter(a =>
a.status === "approved" && a.date === todayDate
)

const currentPatient = approvedAppointments[0]
const nextPatient = approvedAppointments[1]

const finishConsultation = () => {

if(!currentPatient) return

let updated = appointments.map(a => {

if(a.id === currentPatient.id){
return {...a, status: "completed"}
}

return a

})

localStorage.setItem("appointments", JSON.stringify(updated))

// trigger update for all components
window.dispatchEvent(new Event("appointmentsUpdated"))

}

return(

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="text-lg font-semibold mb-4">
Current Patient
</h3>

{currentPatient ? (

<div>

<p className="font-semibold text-lg">
{currentPatient.name}
</p>

<p className="text-gray-500">
{currentPatient.age} yrs • {currentPatient.gender}
</p>

<p className="text-gray-500">
{currentPatient.date} • {currentPatient.time}
</p>

<button
onClick={finishConsultation}
className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
>
Finish Consultation
</button>

</div>

) : (

<p>No patient currently</p>

)}

</div>

)

}

export default CurrentPatient