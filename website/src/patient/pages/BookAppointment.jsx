import { useState } from "react";
import { generateSlots } from "../../utils/generateSlots";
import PatientLayout from "../PatientLayout";

function BookAppointment() {

const user = JSON.parse(localStorage.getItem("currentUser"));
const availability = JSON.parse(localStorage.getItem("doctorAvailability"));
const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

const now = new Date();
const currentHours = now.getHours();
const currentMinutes = now.getMinutes();

const [name,setName] = useState("");
const [age,setAge] = useState("");
const [gender,setGender] = useState("");
const [date,setDate] = useState("");
const [selectedSlot,setSelectedSlot] = useState("");

/* ------------------- DATE LIMIT (TODAY → NEXT 7 DAYS) ------------------- */

const today = new Date();

const formatLocalDate = (date)=>{
const year = date.getFullYear();
const month = String(date.getMonth()+1).padStart(2,"0");
const day = String(date.getDate()).padStart(2,"0");

return `${year}-${month}-${day}`;
};

const minDate = formatLocalDate(today);

const maxDateObj = new Date();
maxDateObj.setDate(today.getDate()+7);

const maxDate = formatLocalDate(maxDateObj);


/* ------------------- CHECK PAST SLOT ------------------- */

const isPastSlot = (slot)=>{

if(!date) return false;

const today = new Date();
const selected = new Date(date.split("-").reverse().join("-"));

const isToday = selected.toDateString() === today.toDateString();

if(!isToday) return false;

const [slotHour,slotMinute] = slot.split(":").map(Number);

if(slotHour < currentHours) return true;

if(slotHour === currentHours && slotMinute <= currentMinutes){
return true;
}

return false;

};


/* ------------------- GENERATE SLOTS ------------------- */

const slots = availability
? generateSlots(
availability.start,
availability.end,
availability.slotTime
)
: [];


/* ------------------- CHECK OFF DAY ------------------- */

const selectedDate = new Date(date);

const dayName = selectedDate.toLocaleDateString(
"en-US",
{weekday:"long"}
);

const isOffDay = availability?.offDays?.includes(dayName);


/* ------------------- BOOK APPOINTMENT ------------------- */

const bookAppointment = ()=>{

if(!name || !age || !gender || !date || !selectedSlot){
alert("Please fill all fields");
return;
}

const newAppointment = {

id: Date.now(),
accountEmail: user.email,
name,
age,
gender,
date,
time: selectedSlot,
status: "pending"

};

appointments.push(newAppointment);

localStorage.setItem("appointments",JSON.stringify(appointments));

/* trigger live update */
window.dispatchEvent(new Event("appointmentsUpdated"));

alert("Appointment Requested");

setSelectedSlot("");

};


/* ------------------- DATE FORMAT ------------------- */

const formatDate = (value)=>{

const parts = value.split("-");
return `${parts[2]}-${parts[1]}-${parts[0]}`;

};


/* ------------------- UI ------------------- */

return(

<PatientLayout>

<h1 className="text-2xl font-bold mb-6">
Book Appointment
</h1>

<div className="bg-white p-6 rounded-xl shadow max-w-3xl">

{/* Patient Info */}

<div className="grid grid-cols-3 gap-4 mb-4">

<input
placeholder="Patient Name"
className="border p-2 rounded"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Age"
type="number"
className="border p-2 rounded"
onChange={(e)=>setAge(e.target.value)}
/>

<select
className="border p-2 rounded"
onChange={(e)=>setGender(e.target.value)}
>
<option value="">Gender</option>
<option>Male</option>
<option>Female</option>
</select>

</div>


{/* Date Picker */}

<label className="block font-medium mb-2">
Select Appointment Date (Next 7 days)
</label>

<input
type="date"
min={minDate}
max={maxDate}
className="border p-2 rounded mb-4"
onChange={(e)=>setDate(formatDate(e.target.value))}
/>


{/* OFF DAY MESSAGE */}

{isOffDay && (

<p className="text-red-500 mb-4">
Doctor is not available on this day
</p>

)}


{/* /* ------------------- SLOTS ------------------- */ }

<h3 className="font-semibold mb-3">
Available Slots
</h3>

<div className="grid grid-cols-4 gap-3">

{slots.map((slot)=>{

const isBooked = appointments.some(
(a)=>a.time === slot && a.date === date
);

const isPast = isPastSlot(slot);

return(

<button
key={slot}
disabled={isBooked || isOffDay || isPast}
onClick={()=>setSelectedSlot(slot)}
className={`p-3 rounded-lg border

${isBooked || isOffDay || isPast
? "bg-gray-300 cursor-not-allowed"
: selectedSlot === slot
? "bg-blue-600 text-white"
: "bg-blue-100 hover:bg-blue-200"
}

`}
>

{slot}

</button>

);

})}

</div>


{/* CONFIRM BUTTON */}

<button
onClick={bookAppointment}
className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
>

Confirm Appointment

</button>

</div>

</PatientLayout>

);

}

export default BookAppointment;