## 2024-05-22 - Replacing div interactables with buttons
**Learning:** Legacy code often uses `div`s with `onClick` for buttons. Replacing them with `<button type="button">` is usually safe if CSS uses class selectors, immediately providing keyboard accessibility and semantic meaning.
**Action:** Always check CSS selectors before tag replacement. If class-based, swap fearlessly.
