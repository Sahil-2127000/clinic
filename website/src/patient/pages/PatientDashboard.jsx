import { useState, useEffect } from "react";
import PatientLayout from "../PatientLayout";

function PatientDashboard() {
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
  const cancelled = myAppointments.filter((a) => a.status === "cancelled");

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

  return (
    <PatientLayout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome {user?.name}
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Upcoming</h3>
          <p className="text-3xl font-bold text-blue-600">{upcoming.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total</h3>
          <p className="text-3xl font-bold text-blue-600">
            {myAppointments.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Completed</h3>
          <p className="text-3xl font-bold text-green-600">
            {completed.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Cancelled</h3>
          <p className="text-3xl font-bold text-red-600">{cancelled.length}</p>
        </div>
      </div>

      {/* Next Appointment */}

      <div className="bg-blue-600 text-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">Next Appointment</h2>

        {nextAppointment ? (
          <div>
            <p className="text-lg font-bold">{nextAppointment.name}</p>

            <p className="text-blue-100">
              {nextAppointment.date} • {nextAppointment.time}
            </p>
          </div>
        ) : (
          <p className="text-blue-100">No upcoming appointments</p>
        )}
      </div>

      {/* Recent Appointments Table */}

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>

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

${a.status === "approved" && "bg-green-100 text-green-600"}
${a.status === "pending" && "bg-yellow-100 text-yellow-600"}
${a.status === "completed" && "bg-gray-200 text-gray-700"}
${a.status === "cancelled" && "bg-red-100 text-red-600"}

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
  );
}

export default PatientDashboard;
