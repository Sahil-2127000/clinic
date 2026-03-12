import { useEffect, useState } from "react"
import PatientLayout from "../PatientLayout"

function Appointments(){

// const [appointments,setAppointments] = useState([])

// const user = JSON.parse(localStorage.getItem("currentUser"))

useEffect(()=>{

const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || []
console.log(storedAppointments);
// show only appointments of logged in patient
const myAppointments = storedAppointments.filter(
    a => a.email === user?.email
    )
console.log(myAppointments);
setAppointments(myAppointments)

},[])

const getStatusColor = (status)=>{

if(status === "pending") return "bg-yellow-100 text-yellow-700"
if(status === "approved") return "bg-green-100 text-green-700"
if(status === "rejected") return "bg-red-100 text-red-700"
if(status === "completed") return "bg-gray-200 text-gray-700"

return ""

}


// COpied
const user = JSON.parse(localStorage.getItem("currentUser"));

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = () => {
      const data = JSON.parse(localStorage.getItem("appointments")) || [];
      setAppointments(data);
    };

    // initial load
    loadAppointments();

    // listen for updates
    window.addEventListener("appointmentsUpdated", loadAppointments);

    return () =>
      window.removeEventListener("appointmentsUpdated", loadAppointments);
  }, []);

  // appointments of this patient
  const myAppointments = appointments.filter(
    (a) => a.accountEmail === user?.email,
  );

  const now = new Date();

  // UPCOMING
  const upcoming = myAppointments.filter((a) => {
    if (a.status !== "approved") return false;

    const [day, month, year] = a.date.split("-").map(Number);
    const [hour, minute] = a.time.split(":").map(Number);

    const appointmentDate = new Date(year, month - 1, day, hour, minute);

    return appointmentDate > now;
  });

  // COMPLETED
  const completed = myAppointments.filter((a) => {
    if (a.status === "completed") return true;

    if (a.status !== "approved") return false;

    const [day, month, year] = a.date.split("-").map(Number);
    const [hour, minute] = a.time.split(":").map(Number);

    const appointmentDate = new Date(year, month - 1, day, hour, minute);

    return appointmentDate < now;
  });

  // CANCELLED
  const cancelled = myAppointments.filter((a) => a.status === "rejected");

  // sort upcoming appointments by date & time
  const nextAppointment = upcoming.sort((a, b) => {
    const [d1, m1, y1] = a.date.split("-").map(Number);
    const [d2, m2, y2] = b.date.split("-").map(Number);

    const date1 = new Date(
      y1,
      m1 - 1,
      d1,
      a.time.split(":")[0],
      a.time.split(":")[1],
    );

    const date2 = new Date(
      y2,
      m2 - 1,
      d2,
      b.time.split(":")[0],
      b.time.split(":")[1],
    );

    return date1 - date2;
  })[0];
  //
return(

<PatientLayout>

<h1 className="text-2xl font-bold mb-6">
My Appointments
</h1>

<div className="bg-white p-6 rounded-xl shadow">
        {/* <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2> */}

        {myAppointments.length === 0 ? (
          <p className="text-gray-500">No appointments yet</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-2">Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {myAppointments
                .slice(-5)
                .reverse()
                .map((a) => (
                  <tr key={a.id} className="border-b">
                    <td className="py-2">{a.name}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>

                    <td>
                      <span
                        className={`px-2 py-1 rounded text-sm

${a.status === "approved" && "bg-green-300 text-black-600"}
${a.status === "pending" && "bg-yellow-400 text-black-600"}
${a.status === "completed" && "bg-gray-300 text-black-900"}
${a.status === "rejected" && "bg-red-200 text-black-600"}

`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>

</PatientLayout>

)

}

export default Appointments