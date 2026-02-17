
function StatusPanel({ status, onToggle }) {
  return (
    <div className="card">
      <h3>Status: {status}</h3>
      <button onClick={onToggle}>Toggle Status</button>
    </div>
  );
}

export default StatusPanel;
