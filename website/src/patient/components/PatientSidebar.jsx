import { NavLink, useNavigate } from "react-router-dom";

function PatientSidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const profile = JSON.parse(
    localStorage.getItem(`patientProfile_${user?.email}`),
  );

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Profile */}

        <div className="flex flex-col items-center mb-10">
          {profile?.photo ? (
            <img
              src={profile.photo}
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-400"
            />
          ) : (
            <div className="w-30 h-30 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
              {profile?.firstName?.charAt(0) || user?.name?.charAt(0)}
            </div>
          )}

          <h2 className="mt-4 text-xl font-semibold">
            {profile?.firstName} {profile?.lastName}
          </h2>

          <p className="text-gray-500">Patient</p>
        </div>

        {/* Navigation */}

        <div className="flex flex-col space-y-4">
          <NavLink
            to="/patient/dashboard"
            className={({ isActive }) =>
              `p-4 rounded-xl ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/patient/book"
            className={({ isActive }) =>
              `p-4 rounded-xl ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Book Appointment
          </NavLink>

          <NavLink
            to="/patient/appointments"
            className={({ isActive }) =>
              `p-4 rounded-xl ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Appointments
          </NavLink>
          


          <NavLink
            to="/patient/profile"
            className={({ isActive }) =>
              `p-4 rounded-xl ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/patient/prescriptions"
            className={({ isActive }) =>
              `p-4 rounded-xl ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Prescriptions
          </NavLink>
        </div>
      </div>

      {/* Logout */}

      <button
        onClick={logout}
        className="bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default PatientSidebar;
