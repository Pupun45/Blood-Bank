import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [formEntries, setFormEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/all-requests`);
        const data = await res.json();
        setFormEntries(data);
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Failed to fetch form data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Blood Request Submissions</h2>
      {formEntries.length === 0 ? (
        <p>No form submissions found.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adhara</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Blood Group</th>
              <th>Unit</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {formEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.adhara}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.bloodGroup}</td>
                <td>{entry.unit}</td>
                <td>{entry.gender}</td>
                <td>{entry.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
