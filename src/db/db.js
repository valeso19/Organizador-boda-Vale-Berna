import Dexie from 'dexie';

const db = new Dexie('BernaValeWeddingDB');
db.version(1).stores({
  sections: 'id, name',
  items: 'id, sectionId, name, cost, deposit, payments, completed, dueDate, notes, attachments, category',
  guests: 'id, name, confirmed, amountAssigned, amountPaid, payments, table, relation, notes',
  tasks: 'id, title, completed, priority, dueDate, assigned'
});

export default db;