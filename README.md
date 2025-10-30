# Berna & Vale - Organizador de Boda (React/Vite)

## Cómo ejecutar
1. `npm install`
2. `npm run dev`
3. Abre en navegador.

## Seed Data
Importa desde `/src/utils/seedData.json`:
```json
{
  "sections": [{"id": "1", "name": "Vestimenta"}],
  "items": [{"id": "1", "sectionId": "1", "name": "Vestido", "cost": 10000, "deposit": 2000, "payments": [{"amount": 3000}], "completed": false}],
  "guests": [{"id": "1", "name": "Juan", "confirmed": true, "amountAssigned": 5000, "amountPaid": 3000}],
  "tasks": [{"id": "1", "title": "Comprar anillos", "completed": false}]
}