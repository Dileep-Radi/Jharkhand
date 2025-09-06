(function(){
      const form = document.getElementById('contact-form');
      const status = document.getElementById('status');
      const send = document.getElementById('send');
      const clear = document.getElementById('clear');

      clear.addEventListener('click', ()=>{
        form.reset(); status.textContent = '';
      });

      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        status.textContent = '';
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        if(!name || !email || !message){
          status.textContent = 'Please fill the required fields.'; return;
        }
        send.setAttribute('aria-busy','true'); send.disabled = true; status.textContent = 'Sending...';
        setTimeout(()=>{
          send.removeAttribute('aria-busy'); send.disabled = false;
          status.textContent = 'Thanks — your message has been received.';
          form.reset();
        }, 900);
      });
    })();