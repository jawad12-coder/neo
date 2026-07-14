import puppeteer from "puppeteer-core";
const browser=await puppeteer.launch({executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",headless:true,args:["--no-sandbox","--window-size=1440,1000"]});
const page=await browser.newPage();await page.setViewport({width:1440,height:1000,deviceScaleFactor:1});
await page.goto("http://127.0.0.1:3001",{waitUntil:"networkidle2",timeout:60000});
await new Promise(resolve=>setTimeout(resolve,1800));
console.log(await page.title());
console.log(await page.evaluate(()=>{const e=document.querySelector(".studio-photo");const h=document.querySelector(".hero");return{scrollY,hero:document.querySelector(".hero img")?.currentSrc,studio:document.querySelector(".studio-photo img")?.currentSrc,studioRect:e?.getBoundingClientRect().toJSON(),studioPos:e&&getComputedStyle(e).position,heroRect:h?.getBoundingClientRect().toJSON(),top:document.elementFromPoint(720,200)?.outerHTML?.slice(0,300)}}));
await page.screenshot({path:"tmp-site-review.png",fullPage:false});
await browser.close();
