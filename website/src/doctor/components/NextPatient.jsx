function NextPatient(){

    const appointments =
    JSON.parse(localStorage.getItem("appointments")) || []
    
    const next = appointments[0]
    
    if(!next) return <div>No Patient</div>
    
    return(
    
    <div className="bg-white p-6 rounded-xl shadow">
    
    <h3 className="font-semibold mb-4">
    Next Patient
    </h3>
    
    <p><b>Name:</b> {next.patient}</p>
    <p><b>Date:</b> {next.date}</p>
    <p><b>Time:</b> {next.time}</p>
    <p><b>Status:</b> {next.status}</p>
    
    </div>
    
    )
    
    }
    
    export default NextPatient