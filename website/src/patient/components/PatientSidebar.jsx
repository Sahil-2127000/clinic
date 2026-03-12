import { NavLink, useNavigate } from "react-router-dom";

function PatientSidebar() {
  const navigate = useNavigate();

  const logout = () => {
localStorage.removeItem("currentUser");
window.dispatchEvent(new Event("appointmentsUpdated"));
navigate("/");
};

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6 sticky top-0">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Patient Portal</h2>

      <div className="flex flex-col space-y-3">
        <NavLink
          to="/patient/dashboard"
          className={({ isActive }) =>
            `p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/patient/appointments"
          className={({ isActive }) =>
            `p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
          }
        >
          Appointments
        </NavLink>

        <NavLink
          to="/patient/book"
          className={({ isActive }) =>
            `p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
          }
        >
          Book Appointment
        </NavLink>

        <NavLink
          to="/patient/profile"
          className={({ isActive }) =>
            `p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/patient/prescriptions"
          className={({ isActive }) =>
            `p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
          }
        >
          Prescriptions
        </NavLink>

        <button
          onClick={logout}
          className="p-3 rounded-lg bg-red-500 text-white mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default PatientSidebar;
