import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--window-size=1440,1000"]
});
const page = await browser.newPage();
const images = new Set();
page.on("response", response => {
  const url = response.url();
  if (/googleusercontent\.com|ggpht\.com/.test(url) && /\/(p|places)\//.test(url)) images.add(url);
});
await page.goto("https://www.google.com/maps?cid=10907647753832056655", { waitUntil: "networkidle2", timeout: 60000 });
await new Promise(resolve => setTimeout(resolve, 3000));
const labels = await page.$$eval("button", buttons => buttons.map(b => b.getAttribute("aria-label")).filter(Boolean));
const target = await page.$("button[aria-label*='Photo'], button[aria-label*='photo'], button[jsaction*='pane.heroHeaderImage']");
if (target) {
  await target.click();
  await new Promise(resolve => setTimeout(resolve, 5000));
}
const srcs = await page.$$eval("img", els => els.map(el => el.currentSrc || el.src).filter(Boolean));
for (const src of srcs) if (/googleusercontent\.com|ggpht\.com/.test(src)) images.add(src);
console.log(JSON.stringify({ title: await page.title(), labels, images: [...images] }, null, 2));
await browser.close();
