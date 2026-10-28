(function(){
document.querySelectorAll('.ytplay').forEach(function(b){b.addEventListener('click',function(){
var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+b.getAttribute('data-yt')+'?autoplay=1&rel=0';
f.title=b.getAttribute('data-title')+' (video)';f.allow='accelerometer; autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;
f.setAttribute('referrerpolicy','strict-origin-when-cross-origin');f.className='ytframe';b.replaceWith(f);f.focus()})})})();
