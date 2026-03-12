import {BrowserRouter,Routes,Route} from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PatientDashboard from "./patient/pages/PatientDashboard"
import BookAppointment from "./patient/pages/BookAppointment"
import Prescriptions from "./patient/pages/Prescriptions"
import Profile from "./patient/pages/Profile"
import Appointments from "./patient/pages/Appointments"
import DoctorAppointments from "./doctor/pages/DoctorAppointments"
import DoctorDashboard from "./doctor/pages/DoctorDashboard"
import DoctorAvailability from "./doctor/pages/DoctorAvailability"
import DoctorProfile from "./doctor/pages/DoctorProfile"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<LandingPage/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/patient/dashboard" element={<PatientDashboard/>}/>
<Route path="/patient/appointments" element={<Appointments/>}/>
<Route path="/patient/book" element={<BookAppointment/>}/>
<Route path="/patient/profile" element={<Profile/>}/>
<Route path="/patient/prescriptions" element={<Prescriptions/>}/>
<Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
<Route path="/doctor/appointments" element={<DoctorAppointments/>}/>
<Route path="/doctor/profile" element={<DoctorProfile/>}/>
<Route path="/doctor/availability" element={<DoctorAvailability/>}
/>
</Routes>

</BrowserRouter>

)

}

export default App