import { NavLink, useNavigate } from "react-router-dom"

function DoctorSidebar(){

const navigate = useNavigate()

const logout = ()=>{
localStorage.removeItem("currentUser")
navigate("/")
}

return(

<div className="w-64 bg-white shadow-lg p-6">

<div className="text-center mb-8">

<img
src="https://randomuser.me/api/portraits/men/32.jpg"
className="w-20 h-20 rounded-full mx-auto"
/>

<h3 className="mt-3 font-semibold">Dr. Martin Deo</h3>
<p className="text-sm text-gray-500">MBBS, MD</p>
</div>

<div className="flex flex-col space-y-3">

<NavLink to="/doctor/dashboard"
className={({isActive}) =>
`p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
}>
Dashboard
</NavLink>

<NavLink to="/doctor/appointments"
className={({isActive}) =>
    `p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
    }
>

Appointments
</NavLink>

<NavLink to="/doctor/profile"
className={({isActive}) =>
    `p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
    }>
Profile
</NavLink>

<NavLink
to="/doctor/availability"
className={({isActive}) =>
`p-3 rounded-lg ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
}
>
Availability
</NavLink>

<button
onClick={logout}
className="p-3 bg-red-500 text-white rounded-lg mt-4"
>
Logout
</button>

</div>

</div>

)

}

export default DoctorSidebar