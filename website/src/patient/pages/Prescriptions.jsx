import { useEffect, useState } from "react"
import PatientLayout from "../PatientLayout"

function Prescriptions(){

const user = JSON.parse(localStorage.getItem("currentUser"))

const [prescriptions,setPrescriptions] = useState([])

useEffect(()=>{

const all =
JSON.parse(localStorage.getItem("prescriptions")) || []

// show prescriptions only for this patient
const myPrescriptions = all.filter(
p => p.patientEmail === user?.email
)

setPrescriptions(myPrescriptions)

},[])

return(

<PatientLayout>

<h1 className="text-2xl font-bold mb-6">
My Prescriptions
</h1>

<div className="bg-white p-6 rounded-xl shadow">

{prescriptions.length === 0 && (
<p className="text-gray-500">
No prescriptions yet
</p>
)}

{prescriptions.map(p => (

<div key={p.id} className="border-b py-4">

<p className="text-sm text-gray-500">
{p.date}
</p>

<p className="font-semibold text-lg">
{p.medicine}
</p>

<p className="text-gray-600">
Timing: {p.timing}
</p>

</div>

))}

</div>

</PatientLayout>

)

}

export default Prescriptions