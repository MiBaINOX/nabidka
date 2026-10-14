
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    var galleryItems = document.querySelectorAll('.gallery-item');
    var modal = document.getElementById('lightboxModal');
    var modalImg = document.getElementById('lightboxImg');
    var modalClose = document.getElementById('lightboxClose');

    if (modal && modalImg) {
        galleryItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var img = item.querySelector('img');
                if (img) {
                    modalImg.src = img.src;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('formName').value;
            var phone = document.getElementById('formPhone').value;
            var email = document.getElementById('formEmail').value;
            var message = document.getElementById('formMessage').value;
            var targetMail = contactForm.getAttribute('data-email') || '';

            var subject = encodeURIComponent('Poptávka z nového webu: ' + name);
            var body = encodeURIComponent('Jméno a příjmení: ' + name + '\nTelefon: ' + phone + '\nE-mail: ' + email + '\n\nZpráva:\n' + message);
            
            window.location.href = 'mailto:' + targetMail + '?subject=' + subject + '&body=' + body;
        });
    }
});