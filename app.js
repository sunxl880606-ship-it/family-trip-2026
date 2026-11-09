const paths={users:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8',coffee:'M18 8h1a4 4 0 0 1 0 8h-1M3 8h15v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8ZM6 1v3M10 1v3M14 1v3',home:'m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Zm6 11v-8h6v8',leaf:'M20 3C9 1 2 8 4 15c2 7 14 8 17-1 1-4 0-8-1-11ZM3 22 16 9',clock:'M12 8v5l3 2M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0',car:'M5 17v3M19 17v3M5 9l2-6h10l2 6M3 9h18v8H3V9ZM7 13h1M16 13h1',download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',save:'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2ZM7 3v6h10V3M7 21v-8h10v8',bag:'M6 7h12l2 15H4L6 7ZM9 8V5a3 3 0 0 1 6 0v3',check:'m5 12 4 4L19 6',sun:'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12 2v2M12 20v2M2 12h2M20 12h2M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',info:'M12 11v6M12 7h.01M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0'};
function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.leaf}"/></svg>`;}
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);});
const mapLink=(name)=>`https://uri.amap.com/search?keyword=${encodeURIComponent(name)}&city=${encodeURIComponent('桂林')}`;
const dayData=[
 {date:'11.14',weekday:'周六',label:'出发 · 抵达古村',title:'从深圳出发，住进秋天里。',desc:'今天把长途坐舒服，抵达后先休息。',badge:'长途交通日',drive:'约620—680公里 · 含休息9.5—11小时',walk:'散步可选20—30分钟',stay:'海洋乡 · 第1晚',tip:'如果17:00后才抵达，直接入住吃饭。大桐木湾留到明天，最后一段乡道尽量在天亮时通过。',items:[
 ['05:45—06:30','早餐、装车，准备出发','随身放好外套、水、点心和孩子换洗衣物。检查儿童约束装置，行李固定好。'],
 ['06:30','深圳出发','按当天导航选择高速和出口。主要方向：广佛外围—怀集—贺州/钟山—桂林方向—海洋乡。'],
 ['08:00左右','第一次服务区休息','停20分钟：上厕所、活动腿脚。后续停靠时间随实际驾驶进度调整。','rest'],
 ['10:00左右','第二次休息，轮换司机','再停20分钟。尽量两名成年人轮换驾驶，每约1.5—2小时停一次。','rest'],
 ['11:45—12:45','午餐与休息','选择卫生方便的服务区，不急着吃完上车。老人和孩子充分活动一下。','rest'],
 ['14:15左右','最后一段前再歇一歇','停20分钟。联系住宿方，再确认MPV停车入口，按主路进村。','rest'],
 ['16:00—17:30','抵达海洋乡，办理入住','目标16:30左右抵达。早到且精神好，可以就近散步；较晚抵达就直接休息。','', '灵川县海洋乡'],
 ['18:00—20:30','吃一顿清淡晚饭，早点睡','住宿附近用餐。清炖鸡鸭、蒸蛋、豆腐和蔬菜；孩子的汤不加白果。早点休息，为明天留精力。']
 ]},
 {date:'11.15',weekday:'周日',label:'银杏 · 古村慢游',title:'在银杏树下，慢慢待一天。',desc:'上午小平乐片区选一处，午睡后再看大桐木湾。',badge:'银杏主游日',drive:'当地往返 · 山路单程预留45—75分钟',walk:'分段步行 · 合计约1.5—2公里',stay:'海洋乡 · 第2晚',tip:'11月中旬不保证满黄。出发前看各村当日实拍；每走20—30分钟坐下休息，古树、古井与老屋选喜欢的看就好。',items:[
 ['07:00—07:45','早餐，把水和点心带上','出门前上厕所。停车后先找好休息处和厕所位置。'],
 ['08:00—09:00','去画眉弄，看沿途山村','单程预留45—75分钟，周末会车或排队时可能更久。孩子晕车、起雾或下雨时启用附近村落方案。','', '灵川县海洋乡画眉弄'],
 ['09:00—10:45','古银杏、老屋，全家合一张影','只逛一个村。给孩子一个任务：找三种落叶，画一片银杏叶。老人累了，由一名成人陪着坐下。','', '灵川县海洋乡画眉弄'],
 ['11:00—12:00','农家午餐','提前订好桌和菜，米饭、蒸蛋、豆腐、炖鸡鸭、青菜。白果不作为孩子的尝鲜食物。','rest'],
 ['12:00—13:15','慢慢开回住宿','原路或按当地确认的主路返回，不为多看一个村临时钻进小路。'],
 ['13:30—15:15','回房间午休','孩子和老人都躺一会儿。下午还有轻松的古村散步。','rest'],
 ['15:30—17:00','大桐木湾，看古树和传统民居','选一段好走的小路往返约500—1000米。不必绕完村子，台阶多的地方就缩短。','', '灵川县海洋乡大桐木湾'],
 ['17:30以后','晚饭、整理照片，早些休息','可以把落叶画做成小书签，分享今天最好看的一张全家照。']
 ]},
 {date:'11.16',weekday:'周一',label:'古镇 · 山水小住',title:'逛一段老街，住到山水旁。',desc:'上午大圩吃午饭，下午去阳朔休息看峰林。',badge:'轻松转场日',drive:'海洋乡→大圩约1小时；大圩→阳朔预留2小时',walk:'古镇45—60分钟 · 河岸600—1000米',stay:'阳朔高田方向 · 第3晚',tip:'古镇石板路雨后滑，桥边台阶可直接略过。阳朔河岸散步由酒店推荐当天方便停车、平缓可达的入口。',items:[
 ['07:30—08:30','早餐、收拾行李、退房','带齐证件和随身物品，车上水和零食补好。'],
 ['08:30—09:30','前往大圩古镇','先留约一小时。遵守当天导航和现场交通指引，停好车再进入老街。','', '桂林灵川县大圩古镇'],
 ['09:30—11:00','走一段青石老街，坐下看江景','实际步行约45—60分钟，中间找地方休息。不追求走到老街尽头，老人累了随时折返。','', '桂林灵川县大圩古镇'],
 ['11:00—12:00','古镇午餐','小吃少量尝尝，正餐按时吃。七人先点五六道菜，按食量再加。','rest'],
 ['12:00—14:00','前往阳朔高田方向','预留两小时，由导航比较主路与高速。不额外绕行兴坪，保留下午午休。','', '阳朔县高田镇'],
 ['14:00—15:30','入住，休息一下','第三晚选择停车方便、附近能吃饭、可以早退房的住宿。','rest'],
 ['15:30—16:30','附近看峰林，或河岸短走','酒店周边轻松散步。天气好且入口方便，再去遇龙河沿岸看山和竹筏，往返600—1000米。','', '阳朔县高田镇凤楼村'],
 ['17:30—19:30','晚饭、车辆补能，准备回家','把大件行李提前装好，确认早退房与早餐打包。看一次返程导航，早点睡。']
 ]},
 {date:'11.17',weekday:'周二',label:'早出发 · 回深圳',title:'带着秋天的照片，从容回家。',desc:'今天只返程，按18:00前到家倒推安排。',badge:'06:30 出发',drive:'约530—580公里 · 含休息9—10.5小时',walk:'服务区活动腿脚',stay:'深圳 · 回到家',tip:'18:00前到家是规划目标，不是路况保证。前一晚若预计明显拥堵，提前至06:00出发；必要休息不减少。',items:[
 ['05:45—06:30','起床、早餐、退房','前一晚沟通好早退房；早餐可打包。检查房间、证件、充电器与孩子的小物件。'],
 ['06:30','出发回深圳','出发前查看实时路线，给进入深圳后的缓行留出时间。'],
 ['08:00左右','第一次服务区休息','停20分钟，上厕所、活动腿脚、喝水。','rest'],
 ['10:00左右','第二次休息，轮换司机','再停20分钟。按实际行车节奏安排，不必强行卡固定服务区。','rest'],
 ['11:30—12:20','午餐与休息','至少留50分钟，让老人孩子舒展一下。','rest'],
 ['14:00左右','再歇一会儿，进入最后一程','停20分钟。遇堵车保持后续休息，抵达时间按实时导航调整。','rest'],
 ['15:30—17:00','正常路况下，目标抵达深圳家中','以实际家庭地址为终点，不把“进入深圳市界”当作到家。'],
 ['17:00—18:00','返程机动余量','这段时间留给入城缓行等情况。到家后好好吃饭、休息。']
 ]}
];
const rainyItems=[
 ['07:30—08:30','早餐，再看一次天气','明显下雨、起雾或孩子晕车时，全天留在海洋乡附近，不前往小平乐山路。'],
 ['09:00—10:30','小桐木湾短走，看古树与村落','选附近好走的一段路，最多走20—30分钟就休息。持续降雨时进一步缩短户外时间。','', '灵川县海洋乡小桐木湾'],
 ['11:00—12:00','回住宿或附近农家午餐','饭菜提前联系，少折腾停车和等位。','rest'],
 ['13:00—15:00','回房午休、做落叶画','孩子和老人安心休息。也可以整理照片、画银杏书签。','rest'],
 ['15:30—16:30','雨停后再去大桐木湾','只在路面好走时短逛。前一天已逛充分可换大塘边；附近村落最多选两个。雨未停就在住宿休息。','', '灵川县海洋乡大桐木湾'],
 ['17:30以后','晚饭，早点休息','今天减少山路和户外步行，把体力留给明天。']
];
const budgetDefs=[['hotel','住宿', '三间房 × 三晚',3450],['meals','四天餐饮','七人餐饮合计',2100],['fuel','车辆燃油','满载MPV · 按实际车型调整',1150],['tolls','高速通行','往返及当地转场',600],['parking','停车与村落费用','以现场公示为准',350],['other','水、零食与杂项','未含购物和额外项目',350]];
const packingGroups=[['出行证件','users',['身份证、儿童有效证件','驾驶证、行驶证','住宿订单与停车位置','常用联系方式已保存']],['老人和孩子','heart',['日常用药及备用量','适配的儿童座椅/增高垫','防滑鞋、外套与雨衣','备用衣裤、袜子与湿巾']],['车上与行李','car',['轮胎、车况、燃油检查','充电线、充电宝、手机支架','水、点心、垃圾袋','软包优先，行李固定好']],['临行再确认','leaf',['11月12—13日看叶色实拍','查看雨雾天气及道路通知','确认房间、早餐与早退房','两位司机轮换和停靠计划']]];
const storageKey='november-family-trip-v1';
let state={day:0,rain:false,budget:Object.fromEntries(budgetDefs.map(b=>[b[0],b[3]])),packed:{},large:false};
let storageOK=true;
try{const saved=JSON.parse(localStorage.getItem(storageKey)||'null');if(saved&&typeof saved==='object'){state.day=Number.isInteger(saved.day)&&saved.day>=0&&saved.day<4?saved.day:0;state.rain=saved.rain===true;state.large=saved.large===true;if(saved.budget&&typeof saved.budget==='object')for(const [key,, ,value] of budgetDefs){const v=saved.budget[key];state.budget[key]=typeof v==='number'&&Number.isFinite(v)&&v>=0&&v<=1000000?v:value;}if(saved.packed&&typeof saved.packed==='object')for(let i=0;i<16;i++)state.packed[i]=saved.packed[i]===true;}}catch{storageOK=false;}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(state));}catch{if(storageOK){toast('当前浏览器无法保存，修改仅在本次打开时有效。');storageOK=false;}}}
let toastTimer;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3500);}
function renderDays(){document.querySelector('.day-tabs').innerHTML=dayData.map((d,i)=>`<button class="day-tab" id="day-tab-${i}" role="tab" aria-selected="${state.day===i}" aria-controls="day-panel" tabindex="${state.day===i?0:-1}" data-day="${i}"><span class="day-index">DAY 0${i+1}</span><strong>${d.date}<small>${d.weekday}</small></strong><span>${d.label}</span></button>`).join('');document.querySelectorAll('.day-tab').forEach(button=>{button.addEventListener('click',()=>selectDay(Number(button.dataset.day)));button.addEventListener('keydown',event=>{let next=state.day;if(event.key==='ArrowRight')next=(state.day+1)%4;else if(event.key==='ArrowLeft')next=(state.day+3)%4;else if(event.key==='Home')next=0;else if(event.key==='End')next=3;else return;event.preventDefault();selectDay(next);document.getElementById(`day-tab-${next}`).focus();});});}
function selectDay(day){state.day=day;persist();renderDays();renderPanel();}
function renderPanel(){const d=dayData[state.day];const rainy=state.day===1&&state.rain;const list=rainy?rainyItems:d.items;const panel=document.querySelector('#day-panel');panel.setAttribute('aria-labelledby',`day-tab-${state.day}`);panel.innerHTML=`<div class="day-heading"><div><h3>${rainy?'雨天也能轻松，留在附近慢游。':d.title}</h3><p>${rainy?'小桐木湾 / 大桐木湾，午休照常保留。':d.desc}</p></div><span class="day-badge">${rainy?'雨雾替代方案':d.badge}</span></div><div class="day-meta"><span>${icon('car')}${rainy?'海洋乡附近短途转场':d.drive}</span><span>${icon('leaf')}${rainy?'雨停短走 · 随时缩短':d.walk}</span><span>${icon('home')}${d.stay}</span></div>${state.day===1?`<label class="weather-toggle"><input type="checkbox" id="rain-toggle" ${state.rain?'checked':''}><div><strong>启用雨雾 / 晕车备选</strong><p>手动切换，非实时天气判断；当天不上小平乐山路。</p></div>${icon('sun')}</label>`:''}<div class="timeline">${list.map(([time,title,description,kind,place])=>`<div class="timeline-item ${kind==='rest'?'rest':''}"><div class="timeline-time">${time}</div><div class="timeline-main"><h4>${title}</h4><p>${description}</p>${place?`<a class="map-link" href="${mapLink(place)}" target="_blank" rel="noopener noreferrer">地图搜索：${place} ↗</a>`:''}</div></div>`).join('')}</div><div class="day-tip">${icon('info')}<span>${d.tip}</span></div>`;document.querySelector('#rain-toggle')?.addEventListener('change',event=>{state.rain=event.target.checked;persist();renderPanel();document.querySelector('#rain-toggle').focus();});}
function renderBudget(){document.querySelector('.budget-fields').innerHTML=budgetDefs.map(([key,label,hint])=>`<div class="budget-field"><label for="budget-${key}">${label}</label><small>${hint}</small><div class="money-input"><span aria-hidden="true">¥</span><input id="budget-${key}" type="number" min="0" max="1000000" step="1" inputmode="numeric" value="${state.budget[key]}" data-budget="${key}" aria-label="${label}预算，人民币元"></div></div>`).join('');document.querySelectorAll('[data-budget]').forEach(input=>{input.addEventListener('input',()=>{const number=Number(input.value);state.budget[input.dataset.budget]=Math.min(1000000,Math.max(0,Number.isFinite(number)?number:0));updateBudget();persist();});input.addEventListener('blur',()=>{input.value=state.budget[input.dataset.budget];});});updateBudget();}
function updateBudget(){const total=Object.values(state.budget).reduce((a,b)=>a+b,0);document.querySelector('#budget-total').textContent='¥'+total.toLocaleString('zh-CN');document.querySelector('#budget-person').textContent='约 ¥'+Math.round(total/7).toLocaleString('zh-CN')+' / 人';}
document.querySelector('#reset-budget').addEventListener('click',()=>{state.budget=Object.fromEntries(budgetDefs.map(b=>[b[0],b[3]]));persist();renderBudget();toast('已恢复参考预算。');});
function renderPacking(){let itemId=0;document.querySelector('.packing-grid').innerHTML=packingGroups.map(([title,image,items])=>`<div class="packing-group"><div class="packing-group-title">${icon(image)}${title}</div>${items.map(item=>{const id=itemId++;return `<label class="packing-item"><input type="checkbox" data-pack="${id}" ${state.packed[id]?'checked':''}><span>${item}</span></label>`;}).join('')}</div>`).join('');document.querySelectorAll('[data-pack]').forEach(input=>input.addEventListener('change',()=>{state.packed[input.dataset.pack]=input.checked;persist();updatePacking();}));updatePacking();}
function updatePacking(){const count=Array.from({length:16},(_,i)=>state.packed[i]===true).filter(Boolean).length;document.querySelector('#packing-count').textContent=`${count} / 16`;document.querySelector('#packing-bar').value=count;}
function renderType(){document.body.classList.toggle('large-type',state.large);const b=document.querySelector('#large-type');b.setAttribute('aria-pressed',String(state.large));b.textContent=state.large?'标准':'大字';b.title=state.large?'恢复标准字号':'切换大字模式';}
document.querySelector('#large-type').addEventListener('click',()=>{state.large=!state.large;persist();renderType();});
document.querySelector('#share').addEventListener('click',async()=>{const url=new URL(location.href);url.hash='';try{await navigator.clipboard.writeText(url.href);toast('链接已复制，可以粘贴到家庭群。');}catch{try{if(navigator.share){await navigator.share({title:'11月家庭自驾旅行规划器',text:'一家七口的桂林秋日慢旅行 · 2026年11月14—17日',url:url.href});}else toast('请复制浏览器地址栏链接，发送到家庭群。');}catch(error){if(error?.name!=='AbortError')toast('请复制浏览器地址栏链接，发送到家庭群。');}}});
document.querySelector('#export-plan').addEventListener('click',()=>{let text='11月家庭自驾旅行规划器\n2026年11月14—17日 · 深圳→海洋乡→大圩→阳朔→深圳\n5大2小 · 68岁长辈与5岁半、8岁孩子 · 七座MPV\n\n';for(const d of dayData){text+=`${d.date} ${d.weekday}｜${d.title}\n${d.drive}\n住宿：${d.stay}\n`;for(const [time,title,desc] of d.items)text+=`${time} ${title}\n${desc}\n`;text+=`提醒：${d.tip}\n\n`;}text+='11月15日雨雾备选（单独列出，按当天情况选用）\n';for(const [time,title,desc] of rainyItems)text+=`${time} ${title}\n${desc}\n`;text+='\n当前七人预算（仅本机修改）\n';for(const [key,label] of budgetDefs)text+=`${label}：¥${state.budget[key]}\n`;text+=`总计：¥${Object.values(state.budget).reduce((a,b)=>a+b,0)}，另留¥1000机动。\n\n出发前48小时确认叶色实拍、天气、停车路线和房间。所有车程与预算为估算，房间尚未预订。白果煮熟也不能完全消除毒素，孩子点不含白果的汤。\n`;const blob=new Blob(['\uFEFF',text],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='11月家庭自驾旅行计划-2026.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('已生成四天完整文字行程。');});
const navLinks=[...document.querySelectorAll('.header nav a')];
const sections=navLinks.map(a=>document.querySelector(a.hash));
const observer=new IntersectionObserver(()=>{const current=sections.filter(el=>el.getBoundingClientRect().top<180).at(-1)||sections[0];for(const a of navLinks){a.classList.toggle('active',a.hash==='#'+current.id);if(a.hash==='#'+current.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}},{rootMargin:'-100px 0px -60% 0px',threshold:0});sections.forEach(section=>observer.observe(section));
renderDays();renderPanel();renderBudget();renderPacking();renderType();
if(!storageOK)toast('浏览器存储不可用：本次修改不会在下次打开时保留。');
