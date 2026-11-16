# Regler för det här repot

1. Koden i `src/core/` ska vara ren: ingen filläsning, inga nätverksanrop och ingen `process.env`.
2. Använd aldrig typen `any`. Använd `unknown` och smalna av typen.
3. Exporterade funktioner namnges i camelCase och börjar med ett verb, till exempel `calculateTotal`.
