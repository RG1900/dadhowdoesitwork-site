(function(){
var q=document.getElementById('q'),list=document.getElementById('list');if(!q||!list)return;
var cards=list.querySelectorAll('.card'),chips=document.querySelectorAll('.chip'),count=document.getElementById('count'),topic='';
var HE=document.documentElement.lang==='he';
function names(){var m={};chips.forEach(function(c){m[c.getAttribute('data-topic')]=c.textContent});return m}var N=names();
function apply(){var v=q.value.toLowerCase().trim(),n=0;
 cards.forEach(function(c){var ok=(!topic||c.getAttribute('data-topic')===topic)&&(!v||c.textContent.toLowerCase().indexOf(v)>-1);c.style.display=ok?'':'none';if(ok)n++});
 chips.forEach(function(c){if(c.getAttribute('data-topic')===topic)c.setAttribute('aria-current','true');else c.removeAttribute('aria-current')});
 if(count)count.textContent=HE?((n===1?'מוצג פרק אחד':'מוצגים '+n+' פרקים')+(topic?' בנושא '+N[topic]:'')+(v?' שמתאימים לחיפוש "'+q.value.trim()+'"':'')):('Showing '+n+' episode'+(n===1?'':'s')+(topic?' in '+N[topic]:'')+(v?' matching "'+q.value.trim()+'"':''));}
function setTopic(t,push){topic=N.hasOwnProperty(t)?t:'';apply();if(push){var u=topic?'?topic='+topic:location.pathname;history.replaceState(null,'',u)}}
chips.forEach(function(c){c.addEventListener('click',function(ev){if(ev.metaKey||ev.ctrlKey||ev.shiftKey)return;ev.preventDefault();setTopic(c.getAttribute('data-topic'),true)})});
q.addEventListener('input',apply);
var m=/[?&]topic=([a-z-]+)/.exec(location.search);setTopic(m?m[1]:'',false);
})();
