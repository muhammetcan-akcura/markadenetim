// MarkaDenetim — screenshot aracı (yalnızca geliştirme için)
//
// Kullanım:
//   node scripts/screenshot.mjs                      -> tüm sayfa, 390/768/1440
//   node scripts/screenshot.mjs "#hero" hero         -> tek bölüm
//   URL=http://localhost:8000 node scripts/screenshot.mjs
//
// Çıktı: screenshots/<ad>-<genişlik>.png

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const URL = process.env.URL || 'http://localhost:3000';
const selector = process.argv[2] || null;
const name = process.argv[3] || (selector ? 'bolum' : 'sayfa');

const viewports = [
    { w: 390, h: 844 },   // mobil
    { w: 768, h: 1024 },  // tablet
    { w: 1440, h: 900 },  // masaüstü
];

await mkdir('screenshots', { recursive: true });

const browser = await chromium.launch();

for (const { w, h } of viewports) {
    const context = await browser.newContext({
        viewport: { width: w, height: h },
        deviceScaleFactor: 1,
        locale: 'tr-TR',
    });
    const page = await context.newPage();
    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    // Scroll ile tetiklenen reveal animasyonlarının tamamlanması için sayfayı baştan sona gez.
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += Math.floor(h * 0.6)) {
        await page.evaluate((top) => window.scrollTo(0, top), y);
        await page.waitForTimeout(250);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1200);

    const file = `screenshots/${name}-${w}.png`;
    if (selector) {
        const el = page.locator(selector).first();
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(900);
        await el.screenshot({ path: file });
    } else {
        await page.screenshot({ path: file, fullPage: true });
    }
    console.log('kaydedildi:', file);
    await context.close();
}

await browser.close();