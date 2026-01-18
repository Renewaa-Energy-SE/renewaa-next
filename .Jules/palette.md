## 2025-05-23 - Inconsistent Error Handling & Feedback Patterns
**Learning:** The application uses different patterns for form submission feedback. The contact form uses `react-toastify` for success/error messages, while the login form (using Formik) was silently swallowing errors and had no visual feedback mechanism. This inconsistency can lead to developer confusion and a disjointed user experience.
**Action:** When implementing new forms, standardise on a feedback mechanism. For critical auth flows, inline errors (as added to Login) are often better than toasts as they persist and are contextually placed. For transient actions like "Contact Us", toasts are acceptable but should always be accompanied by a loading state on the button.

## 2025-05-23 - Global Loader Interception
**Learning:** The global `Loader` component (`src/components/Loader.tsx`) creates a full-screen overlay that persists for 3 seconds and intercepts pointer events, blocking automated interaction tests.
**Action:** When writing Playwright verification scripts, always account for this loader by either waiting >3s or forcefully hiding the `.loader-wrap` element using `page.evaluate`.
