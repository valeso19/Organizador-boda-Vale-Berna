export const calculateItemDue = (item) => item.cost - item.deposit - item.payments.reduce((sum, p) => sum + p.amount, 0);
export const calculateGuestDue = (guest) => guest.amountAssigned - guest.amountPaid;
export const calculateTotals = (sections, guests) => {
  const estimated = sections.flatMap(s => s.items).reduce((sum, i) => sum + i.cost, 0);
  const paid = sections.flatMap(s => s.items).reduce((sum, i) => sum + i.deposit + i.payments.reduce((s, p) => s + p.amount, 0), 0) + guests.reduce((sum, g) => sum + g.amountPaid, 0);
  const due = estimated - paid;
  const totalItems = sections.flatMap(s => s.items).length;
  const completedItems = sections.flatMap(s => s.items).filter(i => i.completed).length;
  const progress = totalItems ? (completedItems / totalItems) * 100 : 0;
  return { estimated, paid, due, progress };
};