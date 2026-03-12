import PatientSidebar from "./components/PatientSidebar";

function PatientLayout({ children }) {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <PatientSidebar />

      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}

export default PatientLayout;
