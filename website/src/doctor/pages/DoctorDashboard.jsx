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
<>
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

{/* SVG Graphics Section */}

<div className="mt-16">

{/* Medical Icons */}

<div className="flex justify-center gap-12 text-blue-400 mb-6">

<svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 8h-3V5a3 3 0 10-6 0v3H7a3 3 0 000 6h3v3a3 3 0 006 0v-3h3a3 3 0 000-6z"/>
</svg>

<svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6h6v-2h-4z"/>
</svg>


</div>

{/* Bottom Wave */}

<svg
viewBox="0 0 1440 200"
className="w-full"
xmlns="http://www.w3.org/2000/svg"
>
<path
fill="#DBEAFE"
fillOpacity="1"
d="M0,128L60,122.7C120,117,240,107,360,112C480,117,600,139,720,144C840,149,960,139,1080,122.7C1200,107,1320,85,1380,74.7L1440,64L1440,200L0,200Z"
/>
</svg>

</div>

</div>

</div>
</>
)

}

export default DoctorDashboard