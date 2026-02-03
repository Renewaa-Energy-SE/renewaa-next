from playwright.sync_api import sync_playwright, expect

def verify_a11y():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page (assuming app runs on localhost:3000)
        print("Navigating to home page...")
        # Since I'm not sure if /home routes correctly without data, I'll try /home first.
        # If the server redirects / to /home, that's fine too.
        page.goto("http://localhost:3000/home", timeout=60000)

        # Force hide the loader as per palette.md instructions
        print("Hiding loader...")
        # Wait a tick for DOM to be ready
        page.wait_for_load_state("domcontentloaded")

        try:
            # We try to hide it if it exists
            page.evaluate("document.querySelector('.loader-wrap') && (document.querySelector('.loader-wrap').style.display = 'none')")
        except Exception as e:
            print(f"Loader not found or error hiding: {e}")

        # Locate the links by their new accessible labels
        print("Checking for accessible links...")
        vision_link = page.get_by_label("Read more about our vision")
        mission_link = page.get_by_label("Read more about our mission")

        # Assertions
        # We scroll them into view to ensure screenshot captures them
        vision_link.scroll_into_view_if_needed()
        expect(vision_link).to_be_visible()
        expect(mission_link).to_be_visible()

        print("Success: Accessible links found!")

        # Take a screenshot
        screenshot_path = "verification/a11y_verification.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_a11y()
