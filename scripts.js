document.documentElement.classList.add('js')


// Troque pelo seu número, com código do país e DDD, só dígitos. Exemplo: 5581999999999
var WHATSAPP = "5581999641256";
var msg = encodeURIComponent("Vim pelo seu link do instagram");
var url = "https://wa.me/" + WHATSAPP + "?text=" + msg;
["wa1","wa2"].forEach(function(id){var a=document.getElementById(id);a.href=url;a.target="_blank";a.rel="noopener";});
(function(){
 document.querySelectorAll('[data-words]').forEach(function(el){
  var words=el.textContent.trim().split(/\s+/);el.textContent='';
  words.forEach(function(w,i){var s=document.createElement('span');s.className='w';s.style.setProperty('--i',i);s.textContent=w;el.appendChild(s);el.appendChild(document.createTextNode(' '));});
 });
 document.querySelectorAll('.facts,.vals,.gal').forEach(function(g){
  Array.prototype.forEach.call(g.children,function(c,i){c.classList.add('rv');c.style.setProperty('--d',g.classList.contains('gal')?i%3:i);});
 });
 var items=document.querySelectorAll('[data-words],.rv');
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.2,rootMargin:'0px 0px -8% 0px'});
  items.forEach(function(e){io.observe(e);});
 } else { items.forEach(function(e){e.classList.add('in');}); }
 var bar=document.getElementById('prog');
 function up(){var h=document.documentElement.scrollHeight-window.innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,window.scrollY/h):0)+')';}
 window.addEventListener('scroll',up,{passive:true});up();
})();
(function(){var lb=document.getElementById('lb');if(!lb||!lb.showModal)return;var li=lb.querySelector('img');
 document.querySelectorAll('.gal button').forEach(function(b){b.addEventListener('click',function(){var im=b.querySelector('img');li.src=im.src;li.alt=im.alt;lb.showModal();});});
 lb.addEventListener('click',function(){lb.close();});
})();
(function(){
 document.querySelectorAll('.gal').forEach(function(g){
  var w=document.createElement('div');w.className='gwrap';g.parentNode.insertBefore(w,g);w.appendChild(g);
  g.tabIndex=0;g.setAttribute('role','region');g.setAttribute('aria-label','Fotos de alunos, arraste para ver mais');
  function mk(c,t,l){var b=document.createElement('button');b.type='button';b.className='gbtn '+c;b.textContent=t;b.setAttribute('aria-label',l);w.appendChild(b);return b;}
  var pv=mk('gprev','\u2039','Fotos anteriores'),nx=mk('gnext','\u203A','Pr\u00f3ximas fotos');
  function step(){return g.querySelector('li').getBoundingClientRect().width+14;}
  function upd(){pv.disabled=g.scrollLeft<4;nx.disabled=g.scrollLeft+g.clientWidth>=g.scrollWidth-4;}
  pv.addEventListener('click',function(){g.scrollBy({left:-step(),behavior:'smooth'});});
  nx.addEventListener('click',function(){g.scrollBy({left:step(),behavior:'smooth'});});
  g.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
  var down=false,sx=0,sl=0,moved=false;
  g.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||e.button!==0)return;down=true;moved=false;sx=e.clientX;sl=g.scrollLeft;});
  window.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-sx;if(Math.abs(dx)>5){moved=true;g.classList.add('dragging');}if(moved)g.scrollLeft=sl-dx;});
  window.addEventListener('pointerup',function(){if(!down)return;down=false;g.classList.remove('dragging');});
  g.addEventListener('click',function(e){if(moved){e.stopPropagation();e.preventDefault();moved=false;}},true);
 });
})();
