import React, { useState, useEffect } from 'react';
import db from '../db/db';
import { calculateItemDue } from '../utils/calculations';

const SectionView = ({ sectionId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const its = await db.items.where('sectionId').equals(sectionId).toArray();
      setItems(its);
    };
    loadItems();
  }, [sectionId]);

  const toggleCompleted = async (id) => {
    await db.items.update(id, { completed: true });
    setItems(prev => prev.map(i => i.id === id ? { ...i, completed: true } : i));
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="item">
          <span>{item.name} - Saldo: ${calculateItemDue(item)}</span>
          <button onClick={() => toggleCompleted(item.id)}>Marcar Completado</button>
        </div>
      ))}
    </div>
  );
};

export default SectionView;