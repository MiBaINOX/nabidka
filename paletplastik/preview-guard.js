(function(){
  var h = window.location.hostname;
  var p = window.location.protocol;
  var allowed = ['nabidka.mibainox.cz', 'mibainox.github.io', 'localhost', '127.0.0.1'];
  var isLocal = (p === 'file:' || !h || allowed.indexOf(h) !== -1);
  if (!isLocal) {
    document.documentElement.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Neautorizovaná kopie</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#090d16;color:#f8fafc;font-family:sans-serif;text-align:center;padding:24px;box-sizing:border-box}.box{max-width:540px;background:#0f172a;border:1px solid #ef4444;border-radius:16px;padding:36px;box-shadow:0 25px 50px rgba(0,0,0,0.7)}.icon{font-size:3rem;margin-bottom:16px}h1{font-size:1.5rem;color:#ef4444;margin:0 0 12px}p{color:#94a3b8;line-height:1.6;margin:0 0 24px}a{display:inline-flex;align-items:center;padding:12px 24px;background:#0284c7;color:#fff;text-decoration:none;border-radius:8px;font-weight:600}</style></head><body><div class="box"><div class="icon">🔒</div><h1>Neautorizovaná kopie návrhu</h1><p>Tento prototyp je duševním vlastnictvím MiBa INOX (mibainox.cz). Pro autorizaci a spuštění webu na Vaší doméně kontaktujte autora.</p><a href="https://mibainox.cz" target="_blank" rel="noopener">Přejít na MiBa INOX</a></div></body>';
    return;
  }
  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
  });
  document.addEventListener('keydown', function(e){
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U' || e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
    }
    if (e.key === 'F12' || ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c'))) {
      e.preventDefault();
    }
  });
  document.addEventListener('dragstart', function(e){
    if (e.target.nodeName === 'IMG') {
      e.preventDefault();
    }
  });
  window.addEventListener('DOMContentLoaded', function(){
    var openBtn = document.getElementById('mibaInterestOpen');
    var closeBtn = document.getElementById('mibaInterestClose');
    var modal = document.getElementById('mibaInterestModal');
    var form = document.getElementById('mibaInterestForm');
    var status = document.getElementById('mibaFormStatus');
    if (!openBtn || !modal) return;
    openBtn.addEventListener('click', function(){
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
    function closeModal(){
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e){
      if (e.target === modal) closeModal();
    });
    if (form) {
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var submitBtn = form.querySelector('.miba-submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Odesílám poptávku...';
        }
        var formData = new FormData(form);
        var payload = {
          company: formData.get('company') || '',
          slug: formData.get('slug') || '',
          name: formData.get('name') || '',
          phone: formData.get('phone') || '',
          email: formData.get('email') || '',
          note: formData.get('note') || ''
        };
        fetch('http://localhost:8080/api/interest', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        }).then(function(res){
          if (res.ok) {
            showSuccess();
          } else {
            fallbackMail();
          }
        }).catch(function(){
          fallbackMail();
        });
        function showSuccess(){
          form.innerHTML = '<div style="text-align:center;padding:24px 12px;"><div style="font-size:2.5rem;margin-bottom:12px;">✅</div><h3 style="color:#38bdf8;margin:0 0 8px;">Děkujeme za Váš zájem!</h3><p style="color:#94a3b8;line-height:1.6;margin:0 0 20px;">Váš požadavek byl úspěšně zaznamenán. Do 24 hodin Vás budeme kontaktovat s harmonogramem spuštění.</p><button type="button" class="miba-submit-btn" onclick="document.getElementById(\'mibaInterestModal\').style.display=\'none\';document.body.style.overflow=\'\';">Zavřít okno</button></div>';
        }
        function fallbackMail(){
          var mailBody = 'Dobrý den,\n\nMám zájem o spuštění webu pro ' + payload.company + ' (' + payload.slug + ').\n\nKontaktní osoba: ' + payload.name + '\nTelefon: ' + payload.phone + '\nE-mail: ' + payload.email + '\nPoznámka: ' + payload.note;
          window.location.href = 'mailto:mibainox@gmail.com?subject=' + encodeURIComponent('Zájem o web: ' + payload.company) + '&body=' + encodeURIComponent(mailBody);
          showSuccess();
        }
      });
    }
  });
})();