function StatCards(){

    const appointments =
    JSON.parse(localStorage.getItem("appointments")) || []
    
    const totalPatients = appointments.length
    const pending = appointments.filter(a=>a.status==="pending").length
    const approved = appointments.filter(a=>a.status==="approved").length
    
    return(
    
    <div className="grid grid-cols-3 gap-6 mb-6">
    
    <div className="bg-white p-6 rounded-xl shadow">
    <h3>Total Patients</h3>
    <p className="text-2xl text-blue-600">{totalPatients}</p>
    </div>
    
    <div className="bg-white p-6 rounded-xl shadow">
    <h3>Pending Requests</h3>
    <p className="text-2xl text-orange-500">{pending}</p>
    </div>
    
    <div className="bg-white p-6 rounded-xl shadow">
    <h3>Approved Appointments</h3>
    <p className="text-2xl text-green-500">{approved}</p>
    </div>
    
    </div>
    
    )
    
    }
    
    export default StatCards