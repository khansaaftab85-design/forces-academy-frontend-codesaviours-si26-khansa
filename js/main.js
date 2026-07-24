
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const phoneError = document.getElementById('phoneError');
            const subjectError = document.getElementById('subjectError');
            const messageError = document.getElementById('messageError');
            const formSuccess = document.getElementById('formSuccess');
            
            let isValid = true;

            if (name && name.value.trim() === "") {
                if (nameError) nameError.classList.remove('d-none');
                isValid = false;
            } else if (nameError) {
                nameError.classList.add('d-none');
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && (email.value.trim() === "" || !emailPattern.test(email.value.trim()))) {
                if (emailError) emailError.classList.remove('d-none');
                isValid = false;
            } else if (emailError) {
                emailError.classList.add('d-none');
            }

            if (phone && phone.value.trim() === "") {
                if (phoneError) phoneError.classList.remove('d-none');
                isValid = false;
            } else if (phoneError) {
                phoneError.classList.add('d-none');
            }

            if (subject && subject.value.trim() === "") {
                if (subjectError) subjectError.classList.remove('d-none');
                isValid = false;
            } else if (subjectError) {
                subjectError.classList.add('d-none');
            }

            if (message && message.value.trim() === "") {
                if (messageError) messageError.classList.remove('d-none');
                isValid = false;
            } else if (messageError) {
                messageError.classList.add('d-none');
            }

            if (isValid) {
                if (formSuccess) formSuccess.classList.remove('d-none');
                contactForm.reset();
            } else if (formSuccess) {
                formSuccess.classList.add('d-none');
            }
        });
    }

    const statsSection = document.getElementById("stats-section");
    const counters = document.querySelectorAll(".counter");
    let animated = false;

    if (statsSection && counters.length > 0) {
        const startCounterAnimation = () => {
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const duration = 2000;
                const startTime = performance.now();

                const updateCounter = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    counter.innerText = Math.floor(progress * target);

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };

                requestAnimationFrame(updateCounter);
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    startCounterAnimation();
                    animated = true;
                }
            });
        }, { threshold: 0.2 });

        observer.observe(statsSection);
    }
    const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});