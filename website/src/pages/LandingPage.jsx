import { useNavigate } from "react-router-dom"

function LandingPage(){

const navigate = useNavigate()

return(

<div className="min-h-screen bg-gray-50">

{/* Navbar */}

<nav className="bg-white shadow-md">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="text-2xl font-bold text-blue-600">
HealthCare Clinic
</h1>

<div className="space-x-6 hidden md:flex">

<a href="#" className="text-gray-600 hover:text-blue-600">
Home
</a>

<a href="#" className="text-gray-600 hover:text-blue-600">
Services
</a>

<a href="#" className="text-gray-600 hover:text-blue-600">
Doctors
</a>

<a href="#" className="text-gray-600 hover:text-blue-600">
Contact
</a>

</div>

<div className="space-x-4">

<button
onClick={()=>navigate("/login")}
className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
>
Login
</button>

<button
onClick={()=>navigate("/signup")}
className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
>
Signup
</button>

</div>

</div>

</nav>

{/* Hero Section */}

<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

<div>

<h2 className="text-4xl font-bold text-gray-800 leading-tight">

Your Health  
<span className="text-blue-600">Our Priority</span>

</h2>

<p className="mt-6 text-gray-600">

Book appointments with experienced doctors easily through our clinic management system.

</p>

<div className="mt-6 space-x-4">

<button
onClick={()=>navigate("/signup")}
className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
Book Appointment
</button>

<button
onClick={()=>navigate("/login")}
className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100"
>
Login
</button>

</div>

</div>

<img
src="https://images.unsplash.com/photo-1588776814546-ec7e7dfe52f1"
className="rounded-xl shadow-lg"
/>

</section>

{/* Services Section */}

<section className="bg-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h3 className="text-3xl font-bold text-gray-800">
Our Services
</h3>

<p className="text-gray-600 mt-3">
We provide the best healthcare services
</p>

<div className="grid md:grid-cols-3 gap-8 mt-10">

<div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg">

<h4 className="text-xl font-semibold text-blue-600">
General Checkup
</h4>

<p className="text-gray-600 mt-2">
Routine health checkups and consultation.
</p>

</div>

<div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg">

<h4 className="text-xl font-semibold text-blue-600">
Specialist Doctors
</h4>

<p className="text-gray-600 mt-2">
Consult experienced specialist doctors.
</p>

</div>

<div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg">

<h4 className="text-xl font-semibold text-blue-600">
Online Appointment
</h4>

<p className="text-gray-600 mt-2">
Book appointments easily online.
</p>

</div>

</div>

</div>

</section>

{/* Footer */}

<footer className="bg-gray-900 text-white py-6 text-center">

<p>
© 2026 HealthCare Clinic. All rights reserved.
</p>

</footer>

</div>

)

}

export default LandingPage