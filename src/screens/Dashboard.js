import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.replace("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
