const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try {
  for(const reducedMotion of ['reduce','no-preference']){
   const page=await browser.newPage({reducedMotion,viewport:{width:1280,height:800}});
   await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
   const balloon=page.locator('.balloon').nth(2);
   const before=await balloon.boundingBox();
   await page.waitForTimeout(600);
   const after=await balloon.boundingBox();
   assert(after.y<before.y-10,`Balloon must rise with reducedMotion=${reducedMotion}`);
   await page.close();
  }
  console.log('PASS: balloons rise with reduced motion enabled and disabled.');
 } finally { await browser.close(); }
})();
