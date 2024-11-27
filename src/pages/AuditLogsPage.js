import React, { useState, useEffect } from "react";
import axios from "axios";

const AuditLogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API data
    const mockLogs = [
      { id: 1, timestamp: Date.now(), event_type: "Login", user_id: 101 },
      {
        id: 2,
        timestamp: Date.now() - 100000,
        event_type: "Role Assigned",
        user_id: 102,
      },
      {
        id: 3,
        timestamp: Date.now() - 200000,
        event_type: "Permission Updated",
        user_id: null,
      },
    ];
    setTimeout(() => {
      setLogs(mockLogs);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="page">
      <header className="page-header">
        <h1>Audit Logs</h1>
        <p>
          View all system activities, including user logins, role assignments,
          and other critical changes made in the system.
        </p>
      </header>
      <div className="audit-log-content">
        {loading ? (
          <p>Loading logs...</p>
        ) : logs.length === 0 ? (
          <p className="no-logs">No logs available at the moment.</p>
        ) : (
          <table className="audit-log-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Event</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{new Date(log.timestamp).toLocaleString()}</td>
                  <td>{log.event_type}</td>
                  <td>{log.user_id ? `User ID: ${log.user_id}` : "System"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AuditLogsPage;
