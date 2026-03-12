import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.erikakuhnsauerzweig.de/', { waitUntil: 'domcontentloaded' });

  const styles = await page.evaluate(() => {
    const computedStyles = window.getComputedStyle(document.body);
    return {
      fontFamily: computedStyles.fontFamily,
      backgroundColor: computedStyles.backgroundColor,
      color: computedStyles.color,
    };
  });
  console.log("Body Styles:", styles);

  const headingStyles = await page.evaluate(() => {
    const h1 = document.querySelector('h1') || document.querySelector('h2') || document.querySelector('h3');
    if (h1) {
      const computed = window.getComputedStyle(h1);
      return {
        fontFamily: computed.fontFamily,
        color: computed.color
      };
    }
    return null;
  });
  console.log("Heading Styles:", headingStyles);

  const linkStyles = await page.evaluate(() => {
    const a = document.querySelector('a');
    if (a) {
      const computed = window.getComputedStyle(a);
      return {
        fontFamily: computed.fontFamily,
        color: computed.color
      };
    }
    return null;
  });
  console.log("Link Styles:", linkStyles);

  await page.screenshot({ path: 'target_screenshot.png' });
  await browser.close();
})();
