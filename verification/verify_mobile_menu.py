from playwright.sync_api import sync_playwright, expect

def verify_mobile_menu():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport to ensure the toggle button is visible
        context = browser.new_context(viewport={"width": 375, "height": 667})
        page = context.new_page()

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000/home")

            # Force hide loader as per memory instructions
            print("Hiding loader...")
            page.evaluate("document.querySelector('.loader-wrap').style.display = 'none'")

            # Wait for the toggle button
            print("Waiting for toggle button...")
            toggle_button = page.locator(".mobile-nav-toggler").first
            expect(toggle_button).to_be_visible()

            # Verify initial state
            print("Verifying initial attributes...")
            expanded = toggle_button.get_attribute("aria-expanded")
            controls = toggle_button.get_attribute("aria-controls")

            print(f"Initial aria-expanded: {expanded}")
            print(f"Initial aria-controls: {controls}")

            if expanded != "false":
                print("FAILURE: Initial aria-expanded should be 'false'")
            if controls != "mobile-menu":
                print("FAILURE: aria-controls should be 'mobile-menu'")

            # Verify mobile menu ID
            print("Verifying mobile menu ID...")
            menu_container = page.locator("#mobile-menu")
            # It might be hidden, but it should exist
            expect(menu_container).to_be_attached()

            role = menu_container.get_attribute("role")
            modal = menu_container.get_attribute("aria-modal")
            print(f"Menu role: {role}")
            print(f"Menu aria-modal: {modal}")

            if role != "dialog":
                print("FAILURE: role should be 'dialog'")
            if modal != "true":
                print("FAILURE: aria-modal should be 'true'")

            # Click to open
            print("Clicking toggle button...")
            toggle_button.click()

            # Wait for menu to be visible (class change)
            print("Waiting for menu to open...")
            expect(menu_container).to_have_class("mobile-menu-visible")

            # Verify updated state
            print("Verifying updated attributes...")
            expanded_after = toggle_button.get_attribute("aria-expanded")
            print(f"Post-click aria-expanded: {expanded_after}")

            if expanded_after != "true":
                print("FAILURE: Post-click aria-expanded should be 'true'")

            # Take screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification/mobile_menu_open.png")
            print("Screenshot saved to verification/mobile_menu_open.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_mobile_menu()
