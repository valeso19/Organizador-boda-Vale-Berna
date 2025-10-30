import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import db from '../db/db';
import { calculateTotals } from '../utils/calculations';

const Dashboard = ({ onSectionSelect }) => {
  const [sections, setSections] = useState([]);
  const [guests, setGuests] = useState([]);
  const [totals, setTotals] = useState({ estimated: 0, paid: 0, due: 0, progress: 0 });

  useEffect(() => {
    const loadData = async () => {
      const secs = await db.sections.toArray();
      const gsts = await db.guests.toArray();
      setSections(secs);
      setGuests(gsts);
      setTotals(calculateTotals(secs, gsts));
    };
    loadData();
  }, []);

  const progressData = {
    labels: ['Completado', 'Pendiente'],
    datasets: [{ data: [totals.progress, 100 - totals.progress], backgroundColor: ['#A3B18A', '#A9D6E5'] }]
  };

  return (
    <div className="dashboard">
      <h1>Berna & Vale – Nuestra Boda</h1>
      <Doughnut data={progressData} />
      <div className="kpis">
        <p>Total Estimado: ${totals.estimated}</p>
        <p>Total Pagado: ${totals.paid}</p>
        <p>Total Pendiente: ${totals.due}</p>
      </div>
      <div className="progress-bar" style={{ width: `${totals.progress}%` }}></div>
      <div className="section-buttons">
        {sections.map(s => <button key={s.id} onClick={() => onSectionSelect(s.id)}>{s.name}</button>)}
      </div>
    </div>
  );
};

export default Dashboard;