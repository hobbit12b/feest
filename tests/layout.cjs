const {chromium}=require('playwright');
const {pathToFileURL}=require('url');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(require('path').resolve('index.html')).href);
 await page.evaluate(()=>{localStorage.clear();location.reload()});await page.waitForTimeout(300);
 const count=await page.locator('.balloon').count();if(count!==21)throw Error('Expected 21 balloons, got '+count);
 await page.screenshot({path:'tests/feest.png'});
 for(let i=0;i<count;i++){
  await page.locator(`[data-index="${i}"]`).click();
  await page.waitForTimeout(380);
  if(!await page.locator('#activity').isVisible())throw Error('Missing activity '+i);
  const overflow=await page.locator('#activity').evaluate(el=>el.scrollWidth>el.clientWidth);
  if(overflow)throw Error('Horizontal overflow '+i);
  if(i===0)await page.screenshot({path:'tests/opdracht.png'});
  if(i===2){await page.getByRole('button',{name:'Open de dansvloer'}).click();await page.getByRole('button',{name:'♫ Start feestmuziek'}).click();await page.getByRole('button',{name:'+ 5 minuten'}).click();if(!(await page.locator('#timer').textContent()).startsWith('15:'))throw Error('Timer');await page.getByRole('button',{name:'Terug naar de opdracht',exact:true}).click()}
  if(i===20&&!(await page.locator('#actions a').getAttribute('href')).includes('BD9BCBBVeEw'))throw Error('Color dance link');
  await page.locator('#done').click();
 }
 if(!await page.locator('#finish').isVisible())throw Error('No finale');
 await page.reload();if(await page.locator('.balloon.used').count()!==21)throw Error('Persistence');
 await page.locator('#overviewButton').click();await page.locator('[data-review="5"]').click();await page.locator('#back').click();
 await page.locator('#overviewButton').click();await page.locator('#reset').click();await page.locator('#confirmReset').click();
 if(await page.locator('.balloon.used').count())throw Error('Reset');
 await page.setViewportSize({width:1920,height:1080});await page.screenshot({path:'tests/feest-groot.png'});
 await page.setViewportSize({width:1024,height:768});await page.screenshot({path:'tests/feest-bord.png'});
 if(errors.length)throw Error(errors.join('; '));
 console.log('PASS: 21 balloons, every activity, video links, disco, persistence, review, reset.');
 await browser.close();
})();
