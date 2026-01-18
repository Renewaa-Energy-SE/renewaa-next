## 2025-05-23 - Inconsistent Error Handling & Feedback Patterns
**Learning:** The application uses different patterns for form submission feedback. The contact form uses `react-toastify` for success/error messages, while the login form (using Formik) was silently swallowing errors and had no visual feedback mechanism. This inconsistency can lead to developer confusion and a disjointed user experience.
**Action:** When implementing new forms, standardise on a feedback mechanism. For critical auth flows, inline errors (as added to Login) are often better than toasts as they persist and are contextually placed. For transient actions like "Contact Us", toasts are acceptable but should always be accompanied by a loading state on the button.

## 2025-05-23 - Artificial Loading Delays
**Learning:** The global `Loader` component enforces a hardcoded 3-second delay on initial page load using `setTimeout`. This creates a perception of slowness even on fast connections and frustrates repeat users.
**Action:** In future iterations, replace the artificial timer with a real loading signal (e.g., waiting for window load event or critical data fetch). Ideally, remove the full-screen preloader entirely in favor of skeleton screens for better perceived performance.
