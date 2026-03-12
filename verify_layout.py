from playwright.sync_api import sync_playwright

def verify_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # Desktop
        page_desktop = browser.new_page(viewport={"width": 1280, "height": 800})
        page_desktop.goto("http://localhost:4322/about")
        page_desktop.wait_for_load_state("networkidle")
        page_desktop.screenshot(path="about-desktop.png", full_page=True)

        # Mobile
        page_mobile = browser.new_page(viewport={"width": 375, "height": 667})
        page_mobile.goto("http://localhost:4322/about")
        page_mobile.wait_for_load_state("networkidle")
        page_mobile.screenshot(path="about-mobile.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_layout()