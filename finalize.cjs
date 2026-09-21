const fs=require('fs');
let s=fs.readFileSync('index.html','utf8');
s=s.replaceAll('n<20','n<activities.length').replaceAll('van de 20','van de 21').replaceAll('van 20','van 21').replaceAll('used.size===20','used.size===21').replaceAll('Alle 20','Alle 21').replaceAll('twintig ballonnen','eenentwintig ballonnen').replaceAll('Twintig verrassingsballonnen','Eenentwintig verrassingsballonnen');
s=s.replace("if(a[4]==='disco')choiceButton('Open de dansvloer',startDisco);",`if(a[4]==='disco'){const link=document.createElement('a');link.className='primary secondary';link.textContent='♫ Open de discomuziek';link.href='https://www.yurls.net/page/1140104#boxes-container';link.target='_blank';link.rel='noopener noreferrer';$('actions').append(link);choiceButton('Open de dansvloer',startDisco);}`);
s=s.replace("url('feestachtergrond.png')",`url('data:image/png;base64,${fs.readFileSync(process.argv[2]).toString('base64')}')`);
s=s.replace('background:var(--cream) url(', 'background-color:var(--cream);background-image:url(').replace('center/cover;display:flex',';background-position:center;background-size:cover;display:flex');
fs.writeFileSync(process.argv[3],s);
