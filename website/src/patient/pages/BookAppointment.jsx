import { useState } from "react"
import { generateSlots } from "../../utils/generateSlots"
import PatientLayout from "../PatientLayout"

function BookAppointment() {

    const now = new Date()

    const currentHours = now.getHours()
    const currentMinutes = now.getMinutes()

    const isPastSlot = (slot) => {

        if (!date) return false

        const today = new Date()
        const selected = new Date(date.split("-").reverse().join("-"))

        const isToday =
            selected.toDateString() === today.toDateString()

        if (!isToday) return false

        const [slotHour, slotMinute] = slot.split(":").map(Number)

        if (slotHour < currentHours) return true

        if (slotHour === currentHours && slotMinute <= currentMinutes) {
            return true
        }

        return false

    }

    const user = JSON.parse(localStorage.getItem("currentUser"))

    const today = new Date()

    const formatLocalDate = (date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")

        return `${year}-${month}-${day}`
    }

    const minDate = formatLocalDate(today)

    const maxDateObj = new Date()
    maxDateObj.setDate(today.getDate() + 7)

    const maxDate = formatLocalDate(maxDateObj)

    const timing =
        JSON.parse(localStorage.getItem("doctorTiming"))

    const appointments =
        JSON.parse(localStorage.getItem("appointments")) || []

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")
    const [selectedSlot, setSelectedSlot] = useState("")

    const bookAppointment = () => {

        if (!name || !age || !gender || !date || !selectedSlot) {
            alert("Please fill all fields")
            return
        }

        const newAppointment = {

            id: Date.now(),
            name,
            age,
            gender,
            email: user.email,
            date,
            time: selectedSlot,
            status: "pending"

        }

        appointments.push(newAppointment)

        localStorage.setItem("appointments", JSON.stringify(appointments))

        alert("Appointment Requested")

        setSelectedSlot("")

    }

    const formatDate = (value) => {
        const parts = value.split("-")
        return `${parts[2]}-${parts[1]}-${parts[0]}`
    }

    const availability =
        JSON.parse(localStorage.getItem("doctorAvailability"))

    const slots = availability
        ? generateSlots(
            availability.start,
            availability.end,
            availability.slotTime
        )
        : []
    const selectedDate = new Date(date)

    const dayName = selectedDate.toLocaleDateString(
        "en-US",
        { weekday: "long" }
    )

    const isOffDay =
        availability?.offDays?.includes(dayName)


    return (

        <PatientLayout>

            <h1 className="text-2xl font-bold mb-6">
                Book Appointment
            </h1>

            <div className="bg-white p-6 rounded-xl shadow max-w-3xl">

                {/* Patient Info */}

                <div className="grid grid-cols-3 gap-4 mb-4">

                    <input
                        placeholder="Patient Name"
                        className="border p-2 rounded"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        placeholder="Age"
                        type="number"
                        className="border p-2 rounded"
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <select
                        className="border p-2 rounded"
                        onChange={(e) => setGender(e.target.value)}
                    >

                        <option value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>

                    </select>

                </div>

                {/* Date */}
                <label className="block font-medium mb-2">
                    Select Appointment Date (Next 7 days)
                </label>
                <input
                    type="date"
                    min={minDate}
                    max={maxDate}
                    className="border p-2 rounded mb-4"
                    onChange={(e) => setDate(formatDate(e.target.value))}
                />

                {isOffDay && (
                    <p className="text-red-500 mb-4">
                        Doctor is not available on this day
                    </p>
                )}
                {/* Slots */}

                <h3 className="font-semibold mb-3">
                    Available Slots
                </h3>

                <div className="grid grid-cols-4 gap-3">

                    {slots.map(slot => {
                        const isBooked = appointments.some(
                            a => a.time === slot && a.date === date
                            )
                        const isPast = isPastSlot(slot)

                        return (

                            <button
                                key={slot}
                                disabled={isBooked || isOffDay || isPast}
                                onClick={() => setSelectedSlot(slot)}
                                className={`p-3 rounded-lg border

${isBooked || isOffDay || isPast
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : selectedSlot === slot
                                            ? "bg-blue-600 text-white"
                                            : "bg-blue-100 hover:bg-blue-200"}

`}
                            >
                                {slot}
                            </button>

                        )

                    })}

                </div>

                {/* Confirm Button */}

                <button
                    onClick={bookAppointment}
                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
                >

                    Confirm Appointment

                </button>

            </div>

        </PatientLayout>

    )

}

export default BookAppointment