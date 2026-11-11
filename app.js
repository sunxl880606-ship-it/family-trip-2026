const paths={users:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8',coffee:'M18 8h1a4 4 0 0 1 0 8h-1M3 8h15v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8ZM6 1v3M10 1v3M14 1v3',home:'m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Zm6 11v-8h6v8',leaf:'M20 3C9 1 2 8 4 15c2 7 14 8 17-1 1-4 0-8-1-11ZM3 22 16 9',clock:'M12 8v5l3 2M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0',car:'M5 17v3M19 17v3M5 9l2-6h10l2 6M3 9h18v8H3V9ZM7 13h1M16 13h1',download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',save:'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2ZM7 3v6h10V3M7 21v-8h10v8',bag:'M6 7h12l2 15H4L6 7ZM9 8V5a3 3 0 0 1 6 0v3',check:'m5 12 4 4L19 6',sun:'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12 2v2M12 20v2M2 12h2M20 12h2M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',info:'M12 11v6M12 7h.01M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0'};
function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.leaf}"/></svg>`;}
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);});
const mapLink=(name)=>`https://uri.amap.com/search?keyword=${encodeURIComponent(name)}&city=${encodeURIComponent('桂林')}`;
const dayData=[
 {date:'11.14',weekday:'周六',label:'出发 · 民宿休整',title:'深圳→民宿，抵达休整',desc:'长途坐车后先休息，把下午留给庭院与湖边。',badge:'08:00 深圳出发',drive:'深圳→和舍湖畔度假民宿',walk:'庭院玩耍 · 湖边散步可选',stay:'和舍湖畔度假民宿 · 第1晚',tip:'早高峰易拥堵，出发前查看实时路况；若堵车抵达晚于16:00，可取消湖边散步，直接休整用餐。',items:[
 ['08:00','深圳出发','车上备好零食、水、垃圾袋、薄外套、儿童玩具。'],
 ['途中','2次服务区休整，午间简餐','每次20—30分钟，下车活动；中午在高速服务区简餐。','rest'],
 ['15:00—15:30','抵达民宿，办理入住','安放行李，慢慢进入假期节奏。','', '和舍湖畔度假民宿'],
 ['15:30—17:00','午休休整，自由玩耍','庭院、湖边自由玩耍，消解长途坐车疲惫。','rest'],
 ['17:00—17:40','民宿周边湖边散步','捡秋叶，和孩子轻松走一走。'],
 ['17:40','晚餐：快活林土灶台(芦笛店)','招牌烤鹅，院内草坪适合孩子，停车方便。','rest', '快活林土灶台(芦笛店)'],
 ['19:40','返回民宿，早点休息','储备次日体力。','', '和舍湖畔度假民宿']
 ]},
 {date:'11.15',weekday:'周日',label:'海洋乡 · 银杏往返',title:'海洋乡银杏一日往返',desc:'错峰出行，大桐木湾与小桐木湾慢慢逛，下午回民宿。',badge:'08:00 错峰出发',drive:'民宿⇄海洋乡 · 计划单程约70分钟',walk:'古树、老屋与田野 · 边走边拍',stay:'和舍湖畔度假民宿 · 第2晚',tip:'08:00准时出发，避开旅行团车流；仅带随身小包。14:00启程回民宿，傍晚自由活动，早休息。',items:[
 ['07:30—08:00','民宿早餐，轻装准备','备好外套、落叶收纳袋、饮用水、零食；仅带随身小包。'],
 ['08:00','准时自驾出发','避开旅行团车流，前往大桐木湾。'],
 ['09:10','抵达大桐木湾银杏摄影区','打卡千年白果王古树、老民居、古井；树下捡银杏落叶，村落秋景拍照，小朋友玩叶子。','', '灵川县海洋乡大桐木湾'],
 ['10:40—11:30','小桐木湾，田园慢拍','驱车几分钟前往；人少，田野+古银杏，田园氛围，适合人像拍摄。','', '灵川县海洋乡小桐木湾'],
 ['11:40—13:00','午餐：灵川县海洋农家馆','海洋乡街上；推荐白果老鸭汤、煎血肠、农家时蔬，停车方便。','rest', '灵川县海洋农家馆'],
 ['13:00—14:00','用餐与短暂休整','车上可小憩。','rest'],
 ['14:00','启程返回民宿','慢慢开，结束今天的银杏村落之旅。'],
 ['15:10','回到民宿，午休放空','午休、庭院喝茶、湖边散步；傍晚自由活动，早休息。','rest', '和舍湖畔度假民宿']
 ]},
 {date:'11.16',weekday:'周一',label:'遇龙河 · 旧县骑行',title:'遇龙河田园慢游，旧县村骑行',desc:'睡饱吃好再出门，山水与稻田之间，边骑边停。',badge:'09:30 悠闲出发',drive:'民宿⇄旧县村 · 计划去程约90分钟',walk:'绿道随性骑行 · 无需骑完全程',stay:'和舍湖畔度假民宿 · 第3晚',tip:'下午随性骑行山水稻田；体力不足就在河边树荫休息。傍晚返回和舍民宿。',items:[
 ['08:30—09:30','民宿慢悠悠吃早餐','不赶早，吃好再出发。'],
 ['09:30','自驾出发前往旧县村','行李留在民宿，轻装游玩。','', '阳朔旧县村'],
 ['11:00','抵达旧县，准备骑行','停车、租电动车，调试头盔。','', '阳朔旧县村'],
 ['11:15','遇龙河绿道骑行','途经富里桥、夏棠、沿途稻田，边走边停拍照，无需骑完全程。','', '阳朔遇龙河绿道'],
 ['12:30—13:30','午餐：稻子熟了·稻田文化主题餐厅','稻田观景，竹筒鸡、竹筒饭，停车方便。','rest', '稻子熟了·稻田文化主题餐厅'],
 ['下午','随性骑行山水稻田','体力不足就在河边树荫休息，不必把路线骑完。'],
 ['傍晚','返回和舍民宿','回到熟悉的住处，轻松收尾。','', '和舍湖畔度假民宿']
 ]},
 {date:'11.17',weekday:'周二',label:'轻松闲逛 · 午后返深',title:'轻松闲逛，自驾返程深圳',desc:'早餐后就近走走，吃完观景午餐，再从容回家。',badge:'12:30 启程返深',drive:'午餐后回深圳 · 途中预留2—3次休整',walk:'就近河边散步 · 简单买些特产',stay:'早餐后行李装车 · 当天回深圳',tip:'12:30准时启程自驾回深圳；中途预留2—3次服务区休整，留意晚高峰路况。抵达时间以实时导航为准。',items:[
 ['08:30—09:30','民宿早餐，全部行李装车','检查随身物品，做好返程准备。'],
 ['09:30—10:30','就近河边散步闲逛','简单选购本地小特产。'],
 ['10:40','出发前往午餐点','留出停车与就餐时间。'],
 ['11:30—12:20','午餐：栖悦水岸空中观景餐厅','露台山水观景，停车方便。','rest', '栖悦水岸空中观景餐厅'],
 ['12:30','准时启程，自驾回深圳','中途预留2—3次服务区休整，留意晚高峰路况。'],
 ['返程途中','服务区下车休整','按实际路况和家人体力安排停靠，抵达时间以实时导航为准。','rest']
 ]}
];
const rainyItems=[
 ['07:30—08:30','民宿早餐，再看一次天气','这是原行程之外的可选备选：雨雾明显时，缩短或取消海洋乡户外活动。'],
 ['上午','留在民宿，轻松亲子时光','画画、玩玩具、整理照片；雨停后再决定是否到庭院短走。'],
 ['中午','民宿附近午餐','按当天营业情况选择，少折腾停车与等位。','rest'],
 ['13:00—15:00','午休，给全家留足休息','全程仍住和舍湖畔度假民宿。','rest'],
 ['下午至傍晚','随天气自由活动','雨停、路面好走时再去湖边散步；否则在民宿喝茶放空，早点休息。']
];
const budgetDefs=[['hotel','住宿', '和舍湖畔 · 三间房 × 三晚（估算）',3450],['meals','四天餐饮','七人餐饮合计',2100],['fuel','车辆燃油','满载MPV · 按实际车型调整',1150],['tolls','高速通行','往返及当地出游',600],['parking','停车与村落费用','以现场公示为准',350],['other','水、零食与杂项','未含购物和额外项目',350]];
const packingGroups=[['出行证件','users',['身份证、儿童有效证件','驾驶证、行驶证','住宿订单与停车位置','常用联系方式已保存']],['老人和孩子','heart',['日常用药及备用量','适配的儿童座椅/增高垫','防滑鞋、薄外套与雨衣','儿童玩具、备用衣物与湿巾']],['车上与行李','car',['轮胎、车况、燃油检查','充电线、充电宝、手机支架','水、点心、垃圾袋','落叶收纳袋，行李固定好']],['临行再确认','leaf',['11月12—13日看叶色实拍','查看雨雾天气及道路通知','确认和舍房间、早餐与停车','两位司机轮换和停靠计划']]];
const storageKey='november-family-trip-v1';
let state={day:0,rain:false,budget:Object.fromEntries(budgetDefs.map(b=>[b[0],b[3]])),packed:{},large:false};
let storageOK=true;
try{const saved=JSON.parse(localStorage.getItem(storageKey)||'null');if(saved&&typeof saved==='object'){state.day=Number.isInteger(saved.day)&&saved.day>=0&&saved.day<4?saved.day:0;state.rain=saved.rain===true;state.large=saved.large===true;if(saved.budget&&typeof saved.budget==='object')for(const [key,, ,value] of budgetDefs){const v=saved.budget[key];state.budget[key]=typeof v==='number'&&Number.isFinite(v)&&v>=0&&v<=1000000?v:value;}if(saved.packed&&typeof saved.packed==='object')for(let i=0;i<16;i++)state.packed[i]=saved.packed[i]===true;}}catch{storageOK=false;}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(state));}catch{if(storageOK){toast('当前浏览器无法保存，修改仅在本次打开时有效。');storageOK=false;}}}
let toastTimer;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3500);}
function renderDays(){document.querySelector('.day-tabs').innerHTML=dayData.map((d,i)=>`<button class="day-tab" id="day-tab-${i}" role="tab" aria-selected="${state.day===i}" aria-controls="day-panel" tabindex="${state.day===i?0:-1}" data-day="${i}"><span class="day-index">DAY 0${i+1}</span><strong>${d.date}<small>${d.weekday}</small></strong><span>${d.label}</span></button>`).join('');document.querySelectorAll('.day-tab').forEach(button=>{button.addEventListener('click',()=>selectDay(Number(button.dataset.day)));button.addEventListener('keydown',event=>{let next=state.day;if(event.key==='ArrowRight')next=(state.day+1)%4;else if(event.key==='ArrowLeft')next=(state.day+3)%4;else if(event.key==='Home')next=0;else if(event.key==='End')next=3;else return;event.preventDefault();selectDay(next);document.getElementById(`day-tab-${next}`).focus();});});}
function selectDay(day){state.day=day;persist();renderDays();renderPanel();}
function renderPanel(){const d=dayData[state.day];const rainy=state.day===1&&state.rain;const list=rainy?rainyItems:d.items;const panel=document.querySelector('#day-panel');panel.setAttribute('aria-labelledby',`day-tab-${state.day}`);panel.innerHTML=`<div class="day-heading"><div><h3>${rainy?'雨雾备选：留在民宿慢下来。':d.title}</h3><p>${rainy?'可选替代安排，按当天天气决定是否出游。':d.desc}</p></div><span class="day-badge">${rainy?'雨雾替代方案':d.badge}</span></div><div class="day-meta"><span>${icon('car')}${rainy?'和舍湖畔度假民宿 · 附近活动':d.drive}</span><span>${icon('leaf')}${rainy?'雨停短走 · 随时缩短':d.walk}</span><span>${icon('home')}${d.stay}</span></div>${state.day===1?`<label class="weather-toggle"><input type="checkbox" id="rain-toggle" ${state.rain?'checked':''}><div><strong>启用雨雾 / 晕车备选</strong><p>手动切换，非实时天气判断；雨雾明显时以民宿休闲为主。</p></div>${icon('sun')}</label>`:''}<div class="timeline">${list.map(([time,title,description,kind,place])=>`<div class="timeline-item ${kind==='rest'?'rest':''}"><div class="timeline-time">${time}</div><div class="timeline-main"><h4>${title}</h4><p>${description}</p>${place?`<a class="map-link" href="${mapLink(place)}" target="_blank" rel="noopener noreferrer">地图搜索：${place} ↗</a>`:''}</div></div>`).join('')}</div><div class="day-tip">${icon('info')}<span>${d.tip}</span></div>`;document.querySelector('#rain-toggle')?.addEventListener('change',event=>{state.rain=event.target.checked;persist();renderPanel();document.querySelector('#rain-toggle').focus();});}
function renderBudget(){document.querySelector('.budget-fields').innerHTML=budgetDefs.map(([key,label,hint])=>`<div class="budget-field"><label for="budget-${key}">${label}</label><small>${hint}</small><div class="money-input"><span aria-hidden="true">¥</span><input id="budget-${key}" type="number" min="0" max="1000000" step="1" inputmode="numeric" value="${state.budget[key]}" data-budget="${key}" aria-label="${label}预算，人民币元"></div></div>`).join('');document.querySelectorAll('[data-budget]').forEach(input=>{input.addEventListener('input',()=>{const number=Number(input.value);state.budget[input.dataset.budget]=Math.min(1000000,Math.max(0,Number.isFinite(number)?number:0));updateBudget();persist();});input.addEventListener('blur',()=>{input.value=state.budget[input.dataset.budget];});});updateBudget();}
function updateBudget(){const total=Object.values(state.budget).reduce((a,b)=>a+b,0);document.querySelector('#budget-total').textContent='¥'+total.toLocaleString('zh-CN');document.querySelector('#budget-person').textContent='约 ¥'+Math.round(total/7).toLocaleString('zh-CN')+' / 人';}
document.querySelector('#reset-budget').addEventListener('click',()=>{state.budget=Object.fromEntries(budgetDefs.map(b=>[b[0],b[3]]));persist();renderBudget();toast('已恢复参考预算。');});
function renderPacking(){let itemId=0;document.querySelector('.packing-grid').innerHTML=packingGroups.map(([title,image,items])=>`<div class="packing-group"><div class="packing-group-title">${icon(image)}${title}</div>${items.map(item=>{const id=itemId++;return `<label class="packing-item"><input type="checkbox" data-pack="${id}" ${state.packed[id]?'checked':''}><span>${item}</span></label>`;}).join('')}</div>`).join('');document.querySelectorAll('[data-pack]').forEach(input=>input.addEventListener('change',()=>{state.packed[input.dataset.pack]=input.checked;persist();updatePacking();}));updatePacking();}
function updatePacking(){const count=Array.from({length:16},(_,i)=>state.packed[i]===true).filter(Boolean).length;document.querySelector('#packing-count').textContent=`${count} / 16`;document.querySelector('#packing-bar').value=count;}
function renderType(){document.body.classList.toggle('large-type',state.large);const b=document.querySelector('#large-type');b.setAttribute('aria-pressed',String(state.large));b.textContent=state.large?'标准':'大字';b.title=state.large?'恢复标准字号':'切换大字模式';}
document.querySelector('#large-type').addEventListener('click',()=>{state.large=!state.large;persist();renderType();});
document.querySelector('#share').addEventListener('click',async()=>{const url=new URL(location.href);url.hash='';try{await navigator.clipboard.writeText(url.href);toast('链接已复制，可以粘贴到家庭群。');}catch{try{if(navigator.share){await navigator.share({title:'11月家庭自驾旅行规划器',text:'桂林4天3晚亲子自驾 · 11月14—17日 · 全程和舍湖畔',url:url.href});}else toast('请复制浏览器地址栏链接，发送到家庭群。');}catch(error){if(error?.name!=='AbortError')toast('请复制浏览器地址栏链接，发送到家庭群。');}}});
document.querySelector('#export-plan').addEventListener('click',()=>{let text='桂林4天3晚亲子自驾行程\n\n出行时间：2026年11月14—17日\n出发地：深圳｜交通：自驾\n住宿：全程和舍湖畔度假民宿\n风格：慢节奏，亲子休闲，不赶场\n\n';for(const [index,d] of dayData.entries()){text+='D'+(index+1)+'｜'+d.date+' '+d.weekday+' '+d.title+'\n'+d.drive+'\n住宿：'+d.stay+'\n';for(const [time,title,desc] of d.items)text+=time+' '+title+'\n'+desc+'\n';text+='备注：'+d.tip+'\n\n';}text+='11月15日雨雾可选备选（按当天情况选用）\n';for(const [time,title,desc] of rainyItems)text+=time+' '+title+'\n'+desc+'\n';text+='\n当前七人预算（仅本机修改，估算）\n';for(const [key,label] of budgetDefs)text+=label+'：¥'+state.budget[key]+'\n';text+='总计：¥'+Object.values(state.budget).reduce((a,b)=>a+b,0)+'，另留¥1000机动。\n\n出发前确认叶色实拍、天气、停车路线与民宿入住安排。行程时间按所给计划展示，实际以当天路况与导航为准。\n';const blob=new Blob(['\uFEFF',text],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='桂林4天3晚亲子自驾行程-2026.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('已生成四天完整文字行程。');});
const navLinks=[...document.querySelectorAll('.header nav a')];
const sections=navLinks.map(a=>document.querySelector(a.hash));
const observer=new IntersectionObserver(()=>{const current=sections.filter(el=>el.getBoundingClientRect().top<180).at(-1)||sections[0];for(const a of navLinks){a.classList.toggle('active',a.hash==='#'+current.id);if(a.hash==='#'+current.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}},{rootMargin:'-100px 0px -60% 0px',threshold:0});sections.forEach(section=>observer.observe(section));
renderDays();renderPanel();renderBudget();renderPacking();renderType();
if(!storageOK)toast('浏览器存储不可用：本次修改不会在下次打开时保留。');
