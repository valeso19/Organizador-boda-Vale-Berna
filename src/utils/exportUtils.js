import { utils, writeFile } from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToJSON = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'berna-vale-backup.json';
  a.click();
  URL.revokeObjectURL(url);
};

export const exportToCSV = (data, filename) => {
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'Sheet1');
  writeFile(wb, filename);
};

export const exportToPDF = (elementId, filename) => {
  const element = document.getElementById(elementId);
  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save(filename);
  });
};

export const importFromJSON = (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      callback(data);
    } catch (err) {
      alert('Archivo inválido');
    }
  };
  reader.readAsText(file);
};