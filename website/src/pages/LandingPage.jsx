import { useNavigate } from "react-router-dom"

function LandingPage(){

const navigate = useNavigate()

return(

<div className="min-h-screen bg-gray-50">

{/* Header */}

<header className="bg-[#DBEAFE] shadow-sm">

<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="text-2xl font-bold text-blue-600">
Dr. M.V. Sharma Clinic
</h1>

<div className="space-x-4">

<button
onClick={()=>navigate("/login")}
className="bg-white px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-5 "
>
Login
</button>

<button
onClick={()=>navigate("/signup")}
className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
Book Appointment
</button>

</div>

</div>

</header>


{/* Hero Section */}

<section className="bg-white py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

{/* Left Content */}

<div>

<h2 className="text-4xl md:text-5xl font-bold text-gray-800">

Dr. M.V. Sharma Clinic

</h2>

<p className="mt-4 text-lg text-gray-600">

Personalized healthcare and expert consultation for you and your family.

</p>

<p className="mt-2 text-gray-500">

Book your appointment online and avoid long waiting times.

</p>

<button
onClick={()=>navigate("/signup")}
className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow"
>
Request Appointment
</button>

</div>


{/* Right Graphic */}

<div className="flex justify-center">

<img
src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
alt="stethoscope"
className="rounded-xl shadow-lg"
/>

</div>

</div>

<div className="section-wave relative bottom-14">
        <svg viewBox="0 0 500 100" preserveAspectRatio="none">
          <path 
            d="M0,60 C150,120 350,0 500,60 L500,100 L0,100 Z"
            fill="#dbeafe"
          />
        </svg>
      </div>

</section>



{/* About Doctor Section */}

<section className="bg-white py-16 my-[-5rem]">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center ">

<img
src="/"
className="rounded-xl shadow"
/>

<div>

<h3 className="text-3xl font-bold text-gray-800 mb-4">
About Dr. M.V. Sharma
</h3>

<p className="text-gray-600 mb-4">

Dr. M.V. Sharma is an experienced physician dedicated to providing
high‑quality healthcare and compassionate treatment for patients.

</p>

<p className="text-gray-600">

With years of experience in clinical practice, the clinic focuses on
accurate diagnosis, effective treatment, and personalized care.

</p>

</div>

</div>

</section>


{/* Clinic Features */}

<section className="py-16 my-15">

<div className="max-w-6xl mx-auto px-6 text-center">

<h3 className="text-3xl font-bold text-gray-800">
Clinic Services
</h3>

<div className="grid md:grid-cols-3 gap-8 mt-10">

<div className="bg-white p-6 rounded-xl shadow">

<h4 className="font-semibold text-lg text-blue-600">
General Consultation
</h4>

<p className="text-gray-600 mt-2">
Comprehensive health checkups and consultation.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow">

<h4 className="font-semibold text-lg text-blue-600">
Diagnosis & Treatment
</h4>

<p className="text-gray-600 mt-2">
Accurate diagnosis with effective treatment plans.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow">

<h4 className="font-semibold text-lg text-blue-600">
Easy Appointment
</h4>

<p className="text-gray-600 mt-2">
Book appointments quickly through the online system.
</p>

</div>

</div>

</div>

</section>


{/* Footer */}

<footer className="bg-gray-900 text-white py-6 text-center">

<p>
© 2026 Dr. M.V. Sharma Clinic
</p>

</footer>

</div>

)

}

export default LandingPage