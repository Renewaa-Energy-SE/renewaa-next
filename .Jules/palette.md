## 2024-05-24 - Async Loading States
**Learning:** Users lack feedback during async form submissions when using standard HTML forms + fetch. Adding a visual loading state prevents double-submissions and anxiety.
**Action:** Always wrap `fetch` calls in a `try/finally` block that manages an `isSubmitting` state, and reflect this in the UI via disabled buttons and spinners.
