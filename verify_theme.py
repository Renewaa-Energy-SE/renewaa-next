import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        # Ensure we are checking the local build or dev server.
        # Since I just built it, I should probably start the server first, but for this test I will assume 'npm start' or similar runs it.
        # Actually, running against the production build with 'npm start' is better.
        # But for now, I will try to connect to localhost:3000 assuming the user/environment might have a dev server running or I should start one.
        # The prompt instructions say "Bash: long-running processes... run them in the background".
        # So I will start the server in a separate step, but first let's create this script.

        page.goto("http://localhost:3000/home")

        # Check initial state
        html_class_initial = page.eval_on_selector("html", "el => el.className")
        print(f"Initial class on html: {html_class_initial}")

        # Click the theme toggle
        # The toggle is in the header. I need to find a button that likely contains the sun/moon icon.
        # In ThemeSwitcher.tsx, it renders a button with aria-label="Toggle Dark Mode"
        page.click('button[aria-label="Toggle Dark Mode"]')

        time.sleep(1) # wait for effect

        html_class_after = page.eval_on_selector("html", "el => el.className")
        print(f"Class on html after click: {html_class_after}")

        # Take screenshots
        if "dark" in html_class_after:
             page.screenshot(path="dark_mode.png")
             print("captured dark_mode.png")
        else:
             page.screenshot(path="light_mode.png")
             print("captured light_mode.png")

        # Click again to revert
        page.click('button[aria-label="Toggle Dark Mode"]')
        time.sleep(1)
        html_class_final = page.eval_on_selector("html", "el => el.className")
        print(f"Class on html after second click: {html_class_final}")

        if "dark" in html_class_final:
             page.screenshot(path="dark_mode_revert.png")
        else:
             page.screenshot(path="light_mode_revert.png")
             print("captured light_mode_revert.png")

        browser.close()

if __name__ == "__main__":
    run()
