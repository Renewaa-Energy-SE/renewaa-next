## 2025-05-23 - Inconsistent Error Handling & Feedback Patterns
**Learning:** The application uses different patterns for form submission feedback. The contact form uses `react-toastify` for success/error messages, while the login form (using Formik) was silently swallowing errors and had no visual feedback mechanism. This inconsistency can lead to developer confusion and a disjointed user experience.
**Action:** When implementing new forms, standardise on a feedback mechanism. For critical auth flows, inline errors (as added to Login) are often better than toasts as they persist and are contextually placed. For transient actions like "Contact Us", toasts are acceptable but should always be accompanied by a loading state on the button.

## 2026-01-17 - Manual State Management for Native Forms
**Learning:** The contact form relies on native `fetch` within a React component, contrasting with Formik used elsewhere. This approach requires explicit manual management of loading states (`isLoading`) to provide visual feedback and prevent double-submission, which is automatically handled or more structured in libraries like Formik.
**Action:** When maintaining or creating `fetch`-based forms, always explicitly implement an `isLoading` state variable that disables the submit button and provides visual feedback (e.g., spinner) during the network request.

## 2026-10-24 - Accessibility for Icon-Driven Forms
**Learning:** The contact form used icons for visual cues instead of visible text labels, but relied solely on placeholders which are not accessible labels. This rendered the form inaccessible to screen reader users.
**Action:** When visual labels are omitted for design reasons, always explicitly provide `aria-label` attributes on input fields matching their placeholder text, and ensure decorative icons are hidden with `aria-hidden="true"`.

## 2026-10-25 - Inconsistent Accessibility Implementation
**Learning:** The ContactForm had `aria-label` on some fields but missed it on the primary 'username' and 'email' fields, likely due to oversight or different developers. Partial accessibility can be misleading.
**Action:** When auditing a component for accessibility, check ALL interactive elements, not just the complex ones.

## 2026-10-26 - Accessibility for Interactive Project Cards
**Learning:** The project cards in `Projects.tsx` used icon-only links for "View Zoom" and "View Details" actions without any accessible labels, making them invisible to screen readers.
**Action:** Always ensure icon-only interactive elements (links/buttons) have an `aria-label` describing the action (e.g., "View larger image", "View project details"), and apply `aria-hidden="true"` to the decorative icon inside.

## 2026-10-26 - Global Loader Interference with Testing
**Learning:** The global `Loader` component (in `src/components/Loader.tsx`) creates an overlay that persists for 3 seconds, which can cause Playwright visibility assertions to fail or screenshots to capture the loader instead of the UI.
**Action:** When writing integration tests or verification scripts, explicitly wait for the `.loader-wrap` element to be hidden (e.g., `page.locator(".loader-wrap").wait_for(state="hidden", timeout=10000)`) before performing assertions or taking screenshots.

## 2026-10-26 - Invalid Nesting of Interactive Elements
**Learning:** The Admin Dashboard contained `<button>` elements nested inside `<Link>` components. This causes invalid HTML and hydration errors in React/Next.js, although the build process may not fail. This pattern degrades accessibility and predictability.
**Action:** Refactor nested interactive elements by removing the inner `<button>` and applying the styling classes directly to the `<Link>` component.

## 2026-10-27 - Silent Validation Failures in Admin Forms
**Learning:** The "Add Project" admin form used Formik with Yup validation but lacked visual feedback (ErrorMessage components). This resulted in a "silent failure" state where clicking submit did nothing if fields were invalid, confusing users.
**Action:** Always pair Formik validation schemas with visible `<ErrorMessage />` components for every validated field, ensuring users receive immediate, actionable feedback on why a submission failed.

## 2026-10-27 - Accessibility in Dynamic Form Arrays
**Learning:** Dynamic form fields (like the paragraphs in "Add Project") often lack unique visual labels. Without explicit `aria-label` attributes (e.g., "Paragraph 1"), screen reader users cannot distinguish between multiple identical inputs.
**Action:** When rendering lists of inputs, always compute and assign a unique `aria-label` or `id` based on the index (e.g., `aria-label={\`Item ${index + 1}\`}`) to ensure each field is distinguishable.
