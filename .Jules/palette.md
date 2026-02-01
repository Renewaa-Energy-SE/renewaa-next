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

## 2026-10-27 - Decorative Images & Force-Hiding Loaders
**Learning:** While waiting for elements is standard, global loaders with fixed timeouts (e.g., 3s) are better handled in verification scripts by explicitly force-hiding them via DOM manipulation (`display: none`) to speed up tests and reduce flake.
**Action:** Use `page.evaluate("document.querySelector('.loader-wrap').style.display = 'none'")` in Playwright scripts when dealing with purely visual blocking overlays.
**Learning:** Decorative images (lines, separators) often lack `alt` attributes entirely, which defaults to reading the filename in some screen readers.
**Action:** Explicitly set `alt=""` for decorative images to remove them from the accessibility tree.
## 2026-10-27 - Verification Script Strictness
**Learning:** When using Playwright's `get_by_label("Text")`, it can match elements with `aria-label`s that contain that text (e.g., "Paragraph 1" matched both "Paragraph 1" textarea and "Remove paragraph 1" button).
**Action:** Use `exact=True` or combine with `get_by_role()` (e.g., `page.get_by_role("textbox", name="Paragraph 1", exact=True)`) to disambiguate similar labels in verification scripts.
