var D={
salon:{brand:"Beauty Studio",h:"Красота без спешки и очередей",l:"Стрижки, окрашивание и уход. Выберите мастера и удобное время онлайн.",
 s:[["Женская стрижка","Консультация и укладка в подарок",8000,60],["Окрашивание в один тон","Профессиональные красители",18000,150],["Сложное окрашивание","Airtouch, балаяж, блонд",35000,240],["Укладка","На праздник или на каждый день",6000,45],["Уход для волос","Восстановление и блеск",12000,60],["Маникюр с покрытием","Гель-лак, аккуратная форма",9000,90]],
 m:[["Алия","Стилист-колорист"],["Мадина","Топ-стилист"],["Диана","Мастер маникюра"]],
 r:[["После окрашивания волосы живые, а не как мочалка. Записалась снова.","Асель"],["Всё чисто, вовремя, без навязывания услуг.","Камила"],["Запись заняла минуту, пришла к назначенному времени.","Жанар"]]},
barber:{brand:"Barber Club",h:"Стрижка, которая держит форму",l:"Классические и современные мужские стрижки, оформление бороды, королевское бритьё.",
 s:[["Мужская стрижка","Машинка, ножницы, укладка",6000,45],["Стрижка и борода","Полный образ за один визит",9500,70],["Оформление бороды","Контур и уход маслом",4000,30],["Королевское бритьё","Горячее полотенце, опасная бритва",7000,45],["Детская стрижка","До 12 лет",4500,30],["Камуфляж седины","Естественный тон",5000,30]],
 m:[["Ренат","Старший барбер"],["Тимур","Барбер"],["Данияр","Барбер-стилист"]],
 r:[["Хожу уже полгода, стрижка держится дольше месяца.","Ерлан"],["Тихо, чисто, мастер слушает, что хочешь.","Арман"],["Записался с телефона за минуту. Удобно.","Никита"]]},
nails:{brand:"Nail Atelier",h:"Ногти, на которые хочется смотреть",l:"Маникюр, педикюр и дизайн. Стерильные инструменты и покрытие, которое носится три недели.",
 s:[["Маникюр классический","Обработка и уход",5000,60],["Маникюр с гель-лаком","Покрытие и укрепление",8500,90],["Наращивание","Любая форма и длина",14000,150],["Педикюр","Аппаратный, с покрытием",11000,100],["Дизайн (за ноготь)","Стемпинг, фольга, рисунок",500,10],["Снятие и уход","Бережное снятие материала",3000,30]],
 m:[["Алина","Мастер ногтевого сервиса"],["Сабина","Топ-мастер"],["Карина","Мастер педикюра"]],
 r:[["Покрытие продержалось три недели без сколов.","Динара"],["Инструменты вскрывают при мне, это успокаивает.","Айгерим"],["Дизайн сделали точь-в-точь как на фото.","Лейла"]]},
lashes:{brand:"Lash & Brow Lab",h:"Взгляд, который не нуждается в туши",l:"Наращивание и ламинирование ресниц, оформление бровей. Подбираем эффект под форму глаз.",
 s:[["Классическое наращивание","Естественный эффект",9000,120],["2D объём","Выразительный взгляд",11000,150],["Лами­нирование ресниц","Подкручивание и питание",7000,60],["Ламинирование бровей","Форма и окрашивание",6500,60],["Коррекция бровей","Пинцет и воск",3000,30],["Снятие ресниц","Бережно и без боли",2000,30]],
 m:[["Эльза","Лэшмейкер"],["Томирис","Бровист"],["Амина","Лэшмейкер, топ"]],
 r:[["Ресницы лежат ровно и не мешают спать.","Мадина"],["Мастер честно сказала, что мне подойдёт, а что нет.","Салтанат"],["Приду через две недели на коррекцию.","Рада"]]}
};
var N="salon",P={s:0,m:"",d:0,t:""},K="beauty_demo_bookings",$=function(i){return document.getElementById(i)};
var NAMES={salon:"Салон красоты",barber:"Барбершоп",nails:"Студия ногтей",lashes:"Студия ресниц"};
function load(){try{return JSON.parse(localStorage.getItem(K))||[]}catch(e){return[]}}
function save(a){try{localStorage.setItem(K,JSON.stringify(a))}catch(e){}}
function days(){var o=[],n=new Date();for(var i=0;i<7;i++){var d=new Date(n);d.setDate(n.getDate()+i);o.push(d)}return o}
function ds(d){return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
function lbl(d,i){return (i==0?"Сегодня":i==1?"Завтра":d.toLocaleDateString("ru-RU",{weekday:"short"}))+", "+d.getDate()+" "+d.toLocaleDateString("ru-RU",{month:"short"}).replace(".","")}
function busy(dt,t){var h=0,s=N+dt+t;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;
 var fake=h%5==0,mine=load().some(function(b){return b.n==N&&b.d==dt&&b.t==t&&(!P.m||!b.m||b.m==P.m)});return fake||mine}
function slots(){var r=[];for(var h=10;h<=20;h++)r.push(h+":00");return r}
function setN(k){N=k;P={s:0,m:"",d:0,t:""};
 var r=document.documentElement;r.setAttribute("data-n",k);var c=D[k];
 $("brand").textContent=c.brand;document.title=c.brand+" · онлайн-запись";
 $("h1").textContent=c.h;$("lead").textContent=c.l;
 $("sw").innerHTML=Object.keys(D).map(function(x){return '<button aria-pressed="'+(x==k)+'" data-k="'+x+'">'+NAMES[x]+'</button>'}).join("");
 $("sv").innerHTML=c.s.map(function(s,i){return '<div class="sv"><h3>'+s[0]+'</h3><p>'+s[1]+'</p><div class="r"><div><span class="pr">'+s[2].toLocaleString("ru-RU")+' ₸</span><br><span class="du">'+s[3]+' мин</span></div><button data-s="'+i+'">Выбрать</button></div></div>'}).join("");
 $("ms").innerHTML=c.m.map(function(m){return '<div class="m"><div class="av">'+m[0][0]+'</div><b>'+m[0]+'</b><br><small>'+m[1]+'</small></div>'}).join("");
 $("rv").innerHTML=c.r.map(function(x){return '<blockquote>«'+x[0]+'»<cite>'+x[1]+'</cite></blockquote>'}).join("");
 $("fs").innerHTML=c.s.map(function(s,i){return '<option value="'+i+'">'+s[0]+' — '+s[2].toLocaleString("ru-RU")+' ₸</option>'}).join("");
 $("fm").innerHTML='<option value="">Любой мастер</option>'+c.m.map(function(m){return '<option>'+m[0]+'</option>'}).join("");
 $("ok").style.display="none";drawBook();adm()}
function drawBook(){var ds0=days();
 $("fd").innerHTML=ds0.map(function(d,i){return '<button class="chip" aria-pressed="'+(P.d==i)+'" data-d="'+i+'">'+lbl(d,i)+'</button>'}).join("");
 var dt=ds(ds0[P.d]),first="";
 $("ft").innerHTML=slots().map(function(t){var b=busy(dt,t);if(!b&&!first)first=t;return '<button class="chip" '+(b?"disabled ":"")+'aria-pressed="'+(P.t==t)+'" data-t="'+t+'">'+t+'</button>'}).join("");
 $("bs").textContent=" "+lbl(ds0[P.d],P.d).toLowerCase()+(first?", "+first:"");
 var s=D[N].s[P.s];
 $("sum").innerHTML='<b>'+s[0]+'</b><br>'+s[3]+' мин · '+s[2].toLocaleString("ru-RU")+' ₸<br>'+(P.m||"Любой мастер")+' · '+lbl(ds0[P.d],P.d)+(P.t?", "+P.t:", время не выбрано")}
function adm(){var a=load();$("al").innerHTML=a.length?a.map(function(b,i){return '<div class="row"><span><b>'+b.name+'</b> · '+b.ph+'<br>'+b.sv+' · '+b.m+' · '+b.dl+' '+b.t+'</span><button class="chip" data-x="'+i+'">Удалить</button></div>'}).join(""):"<p class='du'>Записей пока нет. Оформите запись выше, и она появится здесь.</p>"}
document.addEventListener("click",function(e){var t=e.target;
 if(t.dataset.k)setN(t.dataset.k);
 else if(t.dataset.s!==undefined){P.s=+t.dataset.s;$("fs").value=P.s;drawBook();$("book").scrollIntoView()}
 else if(t.dataset.d!==undefined){P.d=+t.dataset.d;P.t="";drawBook()}
 else if(t.dataset.t){P.t=t.dataset.t;drawBook()}
 else if(t.dataset.x!==undefined){var a=load();a.splice(+t.dataset.x,1);save(a);adm();drawBook()}
 else if(t.id=="adm-btn"){var o=$("adm").style.display=="block";$("adm").style.display=o?"none":"block";t.setAttribute("aria-expanded",!o);t.textContent=o?"Панель мастера":"Закрыть"}});
$("fs").onchange=function(){P.s=+this.value;drawBook()};
$("fm").onchange=function(){P.m=this.value;P.t="";drawBook()};
$("go").onclick=function(){var n=$("nm").value.trim(),p=$("ph").value.trim(),er=$("er");
 if(!P.t){er.textContent="Выберите время визита.";return}
 if(n.length<2){er.textContent="Введите имя.";return}
 if(p.replace(/\D/g,"").length<10){er.textContent="Введите телефон полностью, чтобы мы подтвердили запись.";return}
 er.textContent="";var d=days()[P.d],s=D[N].s[P.s],a=load();
 a.push({n:N,d:ds(d),dl:lbl(d,P.d),t:P.t,m:P.m||"Любой мастер",sv:s[0],name:n,ph:p});save(a);
 var ok=$("ok");ok.style.display="block";ok.textContent="Готово, "+n+"! Ждём вас: "+lbl(d,P.d).toLowerCase()+" в "+P.t+". Услуга: "+s[0]+".";
 P.t="";drawBook();adm()};
setN("salon");
