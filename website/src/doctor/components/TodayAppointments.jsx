function TodayAppointments(){

    const appointments =
    JSON.parse(localStorage.getItem("appointments")) || []
    
    // get today's date in DD-MM-YYYY format
    const today = new Date()
    
    const formattedToday =
    `${String(today.getDate()).padStart(2,"0")}-${String(today.getMonth()+1).padStart(2,"0")}-${today.getFullYear()}`
    
    // filter today's approved appointments
    const todayAppointments =
    appointments
    .filter(a => a.status === "approved" && a.date === formattedToday)
    
    // sort by time
    .sort((a,b) => {
    
    const [h1,m1] = a.time.split(":").map(Number)
    const [h2,m2] = b.time.split(":").map(Number)
    
    return h1 !== h2 ? h1 - h2 : m1 - m2
    
    })
    
    return(
    
    <div className="bg-white p-6 rounded-xl shadow">
    
    <h3 className="font-semibold mb-4">
    Today's Appointments
    </h3>
    
    {todayAppointments.length === 0 && (
    <p className="text-gray-500">
    No approved appointments today
    </p>
    )}
    
    {todayAppointments.map(a => (
    
    <div key={a.id} className="flex justify-between border-b py-2">
    
    <div>
    <p className="font-medium">{a.name}</p>
    <p className="text-sm text-gray-500">
    {a.date}
    </p>
    </div>
    
    <p className="text-blue-600">
    {a.time}
    </p>
    
    </div>
    
    ))}
    
    </div>
    
    )
    
    }
    
    export default TodayAppointments