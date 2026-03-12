import PatientLayout from "../PatientLayout"

function PatientDashboard(){

const user = JSON.parse(localStorage.getItem("currentUser"))

return(

<PatientLayout>

<h1 className="text-3xl font-bold text-gray-800 mb-6">
Welcome {user?.name}
</h1>

<div className="grid grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-gray-500">Upcoming Appointments</h3>
<p className="text-2xl font-bold text-blue-600">2</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-gray-500">Prescriptions</h3>
<p className="text-2xl font-bold text-blue-600">3</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-gray-500">Doctors Visited</h3>
<p className="text-2xl font-bold text-blue-600">5</p>
</div>

</div>

</PatientLayout>

)

}

export default PatientDashboard