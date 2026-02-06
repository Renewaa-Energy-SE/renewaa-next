from playwright.sync_api import sync_playwright, expect
import json
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    # Use a slightly larger viewport to ensure layout is correct
    context = browser.new_context(viewport={"width": 1280, "height": 720})

    # Set the cookie for authentication
    context.add_cookies([{
        "name": "user",
        "value": json.dumps({"role": "admin"}),
        "domain": "localhost",
        "path": "/"
    }])

    page = context.new_page()
    try:
        page.goto("http://localhost:3000/admin/addproject", wait_until="networkidle")
    except Exception as e:
        print(f"Navigation failed: {e}")
        # Try waiting less strictly if networkidle fails (e.g. persistent connections)
        page.goto("http://localhost:3000/admin/addproject", wait_until="domcontentloaded")

    # Explicitly wait for the dropzone to prevent race conditions
    try:
        page.locator("div[role='button'][aria-label='Upload file area']").first.wait_for(timeout=10000)
    except Exception:
        print("Timeout waiting for dropzone. Taking debug screenshot.")
        page.screenshot(path="verification/debug_timeout.png")
        raise

    # Main Image dropzone (first one)
    main_image_dropzone = page.locator("div[role='button'][aria-label='Upload file area']").nth(0)
    expect(main_image_dropzone).to_be_visible()
    # Check text content for single file mode
    expect(main_image_dropzone).to_contain_text("Drag & drop a file here")
    expect(main_image_dropzone).to_contain_text("Supports single file")

    # Images dropzone (second one)
    images_dropzone = page.locator("div[role='button'][aria-label='Upload file area']").nth(1)
    expect(images_dropzone).to_be_visible()
    # Check text content for multiple files mode
    expect(images_dropzone).to_contain_text("Drag & drop files here")
    expect(images_dropzone).to_contain_text("Supports multiple files")

    # Take screenshot of the whole page
    page.screenshot(path="verification/addproject_fileupload.png", full_page=True)

    browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
