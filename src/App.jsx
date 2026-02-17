import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import StatusPanel from "./components/StatusPanel";

function App() {
  // 🔹 State (Single Source of Truth)
  const [user, setUser] = useState({
    name: "Yaswanth",
    role: "Frontend Developer",
    status: "Active"
  });

  // 🔹 State Update Function
  const toggleStatus = () => {
    setUser((prevUser) => ({
      ...prevUser,
      status: prevUser.status === "Active" ? "Offline" : "Active"
    }));
  };

  return (
    <div className="container">
      <h1>Profile Dashboard</h1>

      {/* Unidirectional Data Flow */}
      <ProfileCard name={user.name} role={user.role} />
      <StatusPanel status={user.status} onToggle={toggleStatus} />
    </div>
  );
}

export default App;
