import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  useEffect(() => {
    document.title = "Dr. M.V. Sharma Clinic";
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <header className="bg-[#DBEAFE] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Dr. M.V. Sharma Clinic
          </h1>

          <div className="space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-white px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-5 "
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}

      <section className="bg-white py-20 relative transform-3d ">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Dr. M.V. Sharma Clinic
            </h2>

            <p className="mt-4 text-lg text-gray-600 z-10">
              Personalized healthcare and expert consultation for you and your
              family.
            </p>

            <p className="mt-2 text-gray-500">
              Book your appointment online and avoid long waiting times.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="relative overflow-hidden mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow group border border-transparent hover:border-red-500 transition-all duration-500"
            >
              <span className="relative z-20 group-hover:text-red-500 transition-colors duration-300">
                Request Appointment
              </span>

              <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full z-10"></span>
            </button>
          </div>

          {/* Right Graphic */}

          <div className="flex justify-center  relative gap-1 scale-150 right-[10rem] z-0">
            <img src="/stethoscope.png" alt="stethoscope" className="" />
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
          <img src="/about.jpg" className="rounded-xl shadow" />

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              About Dr. M.V. Sharma
            </h3>

            <p className="text-gray-600 mb-4">
              Dr. M.V. Sharma is an experienced physician dedicated to providing
              high‑quality healthcare and compassionate treatment for patients.
            </p>

            <p className="text-gray-600">
              With years of experience in clinical practice, the clinic focuses
              on accurate diagnosis, effective treatment, and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Features */}

      <section className="py-16 my-15">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Clinic Services</h3>

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

      {/* Footer */}

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Clinic Info */}

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Dr. M.V. Sharma Clinic
            </h3>

            <p className="text-gray-400">
              Providing trusted healthcare consultation and personalized
              treatment for patients.
            </p>
          </div>

          {/* Contact Details */}

          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>

            <p className="text-gray-400">📞 Phone: 7707821270</p>

            <p className="text-gray-400">📧 Email: mauryasahil013@gmail.com</p>
          </div>

          {/* Address */}

          <div>
            <h3 className="text-xl font-semibold mb-3">Clinic Address</h3>

            <p className="text-gray-400">Dr. M.V. Sharma Clinic</p>

            <p className="text-gray-400">GNE College Road</p>

            <p className="text-gray-400">Ludhiana, Punjab</p>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © 2026 Dr. M.V. Sharma Clinic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
