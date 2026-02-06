import json
from playwright.sync_api import sync_playwright, expect

def verify_add_project_ux():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()

        # Inject cookie
        user_cookie = {
            "role": "admin",
            "username": "admin",
            "email": "admin@example.com"
        }

        context.add_cookies([
            {
                "name": "user",
                "value": json.dumps(user_cookie),
                "domain": "localhost",
                "path": "/"
            }
        ])

        page = context.new_page()

        # Navigate to Add Project page
        page.goto("http://localhost:3000/admin/addproject", wait_until="domcontentloaded")

        # Force hide the loader
        page.add_style_tag(content=".loader-wrap { display: none !important; }")

        # Wait for the page to load
        expect(page.get_by_role("heading", name="Add Project Details Here")).to_be_visible()

        # Check for the file upload dropzone text
        expect(page.get_by_text("Drag & drop files here, or use the button").first).to_be_visible()

        # Take screenshot
        page.screenshot(path="verification/add_project_ux_v2.png")

        browser.close()

if __name__ == "__main__":
    verify_add_project_ux()
