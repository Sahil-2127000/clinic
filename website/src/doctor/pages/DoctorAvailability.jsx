import { useState } from "react"
import DoctorSidebar from "../components/DoctorSidebar"

function DoctorAvailability(){

const [start,setStart] = useState("")
const [end,setEnd] = useState("")
const [slotTime,setSlotTime] = useState(15)
const [offDays,setOffDays] = useState([])

const days = [
"Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday","Sunday"
]

const toggleDay = (day)=>{

if(offDays.includes(day)){
setOffDays(offDays.filter(d => d !== day))
}else{
setOffDays([...offDays,day])
}

}

const saveAvailability = ()=>{

const data = {
start,
end,
slotTime,
offDays
}

localStorage.setItem("doctorAvailability", JSON.stringify(data))

alert("Availability Saved")

}

const markUnavailableToday = ()=>{

let appointments =
JSON.parse(localStorage.getItem("appointments")) || []

const today = new Date().toLocaleDateString("en-GB")

appointments = appointments.map(a=>{

if(a.date === today){
return {...a,status:"cancelled"}
}

return a

})

localStorage.setItem("appointments",JSON.stringify(appointments))

window.dispatchEvent(new Event("appointmentsUpdated"))

alert("All today's appointments cancelled")

}

return(

<div className="flex min-h-screen bg-gray-50">

{/* Sidebar */}
<DoctorSidebar/>

{/* Main Content */}
<div className="flex-1 p-8">

<div className="bg-white p-6 rounded-xl shadow max-w-xl">

<h2 className="text-xl font-semibold mb-4">
Doctor Availability
</h2>

<label className="block mb-1">
Opening Time
</label>

<input
type="time"
className="border p-2 w-full mb-3"
onChange={(e)=>setStart(e.target.value)}
/>

<label className="block mb-1">
Closing Time
</label>

<input
type="time"
className="border p-2 w-full mb-3"
onChange={(e)=>setEnd(e.target.value)}
/>

<label className="block mb-1">
Average Time Per Patient (minutes)
</label>

<input
type="number"
value={slotTime}
className="border p-2 w-full mb-4"
onChange={(e)=>setSlotTime(e.target.value)}
/>

<h3 className="font-semibold mb-2">
Weekly Off Days
</h3>

<div className="grid grid-cols-3 gap-2 mb-4">

{days.map(day=>(
<label key={day} className="flex items-center gap-2">

<input
type="checkbox"
onChange={()=>toggleDay(day)}
/>

{day}

</label>
))}

</div>

<button
onClick={saveAvailability}
className="bg-blue-600 text-white px-4 py-2 rounded mr-3"
>
Save Availability
</button>

<button
onClick={markUnavailableToday}
className="bg-red-500 text-white px-4 py-2 rounded"
>
Doctor Not Available Today
</button>

</div>

</div>

</div>

)

}

export default DoctorAvailability