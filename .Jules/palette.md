## 2025-05-23 - Inconsistent Error Handling & Feedback Patterns
**Learning:** The application uses different patterns for form submission feedback. The contact form uses `react-toastify` for success/error messages, while the login form (using Formik) was silently swallowing errors and had no visual feedback mechanism. This inconsistency can lead to developer confusion and a disjointed user experience.
**Action:** When implementing new forms, standardise on a feedback mechanism. For critical auth flows, inline errors (as added to Login) are often better than toasts as they persist and are contextually placed. For transient actions like "Contact Us", toasts are acceptable but should always be accompanied by a loading state on the button.

## 2026-01-17 - Manual State Management for Native Forms
**Learning:** The contact form relies on native `fetch` within a React component, contrasting with Formik used elsewhere. This approach requires explicit manual management of loading states (`isLoading`) to provide visual feedback and prevent double-submission, which is automatically handled or more structured in libraries like Formik.
**Action:** When maintaining or creating `fetch`-based forms, always explicitly implement an `isLoading` state variable that disables the submit button and provides visual feedback (e.g., spinner) during the network request.

## 2026-02-15 - Accessibility in Placeholder-Only Designs
**Learning:** The contact form relied solely on placeholders for labels, which disappears upon typing and is inaccessible to screen readers. Additionally, decorative icons were not hidden, potentially causing confusion.
**Action:** For designs lacking visible labels, always provide an `aria-label` matching the placeholder. Ensure all decorative icons (like those inside input groups or buttons) include `aria-hidden="true"`.
