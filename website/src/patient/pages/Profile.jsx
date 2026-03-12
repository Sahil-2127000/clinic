import PatientLayout from "../PatientLayout"

function Profile(){

const user = JSON.parse(localStorage.getItem("currentUser"))

return(

<PatientLayout>

<h2 className="text-2xl font-bold mb-6">
My Profile
</h2>

<div className="bg-white p-6 rounded-xl shadow">

<p><strong>Name:</strong> {user.name}</p>
<p><strong>Email:</strong> {user.email}</p>

</div>

</PatientLayout>

)

}

export default Profile