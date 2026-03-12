import { useEffect, useState } from "react"
import DoctorSidebar from "../components/DoctorSidebar"
import StatCards from "../components/StatCards"
import TodayAppointments from "../components/TodayAppointments"
import AppointmentRequests from "../components/AppointmentRequests"
import CurrentPatient from "../components/CurrentPatient"

function DoctorDashboard(){

    useEffect(()=>{
    document.title = "Doctor Dashboard | Dr. M.V. Sharma Clinic"
    },[])

const [appointments,setAppointments] = useState([])

const loadAppointments = () => {

const data =
JSON.parse(localStorage.getItem("appointments")) || []

setAppointments(data)

}

useEffect(()=>{

// load appointments initially
loadAppointments()

// listen for updates
window.addEventListener("appointmentsUpdated", loadAppointments)

return () =>
window.removeEventListener("appointmentsUpdated", loadAppointments)

},[])

return(

<div className="flex bg-gray-50 min-h-screen">

<DoctorSidebar/>

<div className="flex-1 p-8">

<h1 className="text-3xl font-bold mb-6">
Dashboard
</h1>

{/* pass appointments to stat cards */}
<StatCards appointments={appointments}/>

<div className="grid grid-cols-3 gap-6">

<TodayAppointments appointments={appointments}/>

<CurrentPatient appointments={appointments} setAppointments={setAppointments}/>

<AppointmentRequests appointments={appointments} setAppointments={setAppointments}/>

</div>

</div>

</div>

)

}

export default DoctorDashboard