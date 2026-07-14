document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.links').classList.toggle('open'));
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const b=form.querySelector('button');b.textContent='Thank you — we will be in touch.';b.disabled=true;}));
