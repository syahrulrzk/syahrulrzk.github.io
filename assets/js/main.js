// AOS Init
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
// Teks yang akan ditampilkan dengan efek typing berjalan
var text = "With over 4 years of experience in the IT industry, I have focused on designing, managing and optimizing network infrastructure for various projects and companies.";

// Selector elemen paragraf
var paragraph = document.getElementById("typing-text");

// Inisialisasi indeks teks dan timer
var index = 0;
var typingSpeed = 40; // Kecepatan typing (ms)

// Fungsi untuk menampilkan teks secara berurutan
function type() {
if (index < text.length) {
  paragraph.innerHTML += text.charAt(index);
  index++;
  setTimeout(type, typingSpeed);
}
}

// Panggil fungsi typing 
type();


// === disable clik kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// === disable clik kanan pada image profile
document.addEventListener('DOMContentLoaded', (event) => {
    const img = document.querySelector('.navbar-brand img');
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

// === SLIDER ENGINE (reusable)
function initSlider(trackId, dotsId) {
    var track = document.getElementById(trackId);
    if (!track) return;

    var slides = track.querySelectorAll('.work-slide');
    if (slides.length === 0) return;

    // Find buttons from the section container
    var section = track.closest('section');
    var navBottom = section ? section.querySelector('.slider-nav-bottom') : null;
    var prevBtn = navBottom ? navBottom.querySelector('.slider-btn-prev') : null;
    var nextBtn = navBottom ? navBottom.querySelector('.slider-btn-next') : null;
    var dotsContainer = document.getElementById(dotsId);

    var currentIndex = 0;
    var totalSlides = slides.length;
    var slidesPerView = getSlidesPerView();
    var maxIndex = Math.max(0, totalSlides - slidesPerView);

    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        var dotsCount = Math.max(1, maxIndex + 1);
        for (var i = 0; i < dotsCount; i++) {
            var dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', function () {
                var idx = parseInt(this.getAttribute('data-index'));
                goToSlide(idx);
            });
            dotsContainer.appendChild(dot);
        }
    }

    function getSlidesPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 991) return 2;
        return 3;
    }

    function updateSlideWidth() {
        slidesPerView = getSlidesPerView();
        maxIndex = Math.max(0, totalSlides - slidesPerView);
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        updateDots();
    }

    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        currentIndex = index;
        var scrollTo = 0;
        for (var i = 0; i < currentIndex; i++) {
            scrollTo += slides[i].offsetWidth + (parseInt(window.getComputedStyle(track).gap) || 24);
        }
        track.scrollTo({ left: scrollTo, behavior: 'smooth' });
        updateDots();
    }

    function updateDots() {
        if (!dotsContainer) return;
        var dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach(function (d, i) {
            if (i === currentIndex) d.classList.add('active');
            else d.classList.remove('active');
        });
    }

    // Button listeners
    if (prevBtn) prevBtn.addEventListener('click', function () { goToSlide(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goToSlide(currentIndex + 1); });

    // Track scroll sync dots
    track.addEventListener('scroll', function () {
        var gap = parseInt(window.getComputedStyle(track).gap) || 24;
        var scrollPos = track.scrollLeft;
        var newIndex = 0;
        var accumulated = 0;
        for (var i = 0; i < slides.length; i++) {
            if (scrollPos >= accumulated - 10) newIndex = i;
            accumulated += slides[i].offsetWidth + gap;
        }
        if (newIndex > maxIndex) newIndex = maxIndex;
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots();
        }
    });

    // Recalculate on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            updateSlideWidth();
            goToSlide(currentIndex);
        }, 200);
    });

    // Init
    createDots();
    updateSlideWidth();
}

// Init both sliders on load
document.addEventListener('DOMContentLoaded', function () {
    initSlider('workSlider', 'sliderDots');
});

//read More... or read less

var readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var parent = button.parentNode;
            var responsibilities = parent.querySelector('.read-more-text');

            if (responsibilities.style.display === 'none' || responsibilities.style.display === '') {
                responsibilities.style.display = 'block';
                button.innerText = 'Read Less...';
            } else {
                responsibilities.style.display = 'none';
                button.innerText = 'Read More...';
            }
        });
    });



// === SCROLLSPY ACTIVE STATE ===
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section[id]');
    var allLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .nav-sub-link');
    var navParents = document.querySelectorAll('.nav-parent');

    function clearActive() {
        allLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        navParents.forEach(function (p) {
            p.classList.remove('active');
        });
    }

    function updateActiveNav() {
        var scrollPos = window.scrollY + 200;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                clearActive();

                // Find matching link
                var matchingLink = document.querySelector('.nav-link[href="#' + id + '"], .nav-sub-link[href="#' + id + '"]');
                if (matchingLink) {
                    matchingLink.classList.add('active');

                    // If it's a sub-link, also activate parent and expand sub-menu
                    var parentCollapse = matchingLink.closest('.collapse');
                    if (parentCollapse && parentCollapse.id !== 'navbarNav') {
                        var parentToggle = parentCollapse.previousElementSibling;
                        if (parentToggle && parentToggle.classList.contains('nav-parent')) {
                            parentToggle.classList.add('active');
                        }
                        // Auto-expand sub-menu collapse on mobile
                        if (!parentCollapse.classList.contains('show')) {
                            parentCollapse.classList.add('show');
                            parentToggle.setAttribute('aria-expanded', 'true');
                        }
                    }
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var form = this;

        if (form.checkValidity()) {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var msg = document.getElementById('message').value;

            var formattedMsg = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${msg}`;

            var token = '6581933502:AAE6y-rPZE2ZO_mQPh2aUSh5JBE5BYiajF0';
            var grup = '-4078684754';

            $.ajax({
                url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${encodeURIComponent(formattedMsg)}&parse_mode=html`,
                method: 'POST',
                success: function () {
                    var successMessage = document.getElementById('successMessage');
                    successMessage.style.display = 'block';
                    successMessage.classList.add('alert-success');

                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('subject').value = '';
                    document.getElementById('message').value = '';

                    setTimeout(function () {
                        successMessage.classList.remove('alert-success');
                        successMessage.style.animation = 'fadeOut 0.5s ease-in-out';
                        setTimeout(function () {
                            successMessage.style.display = 'none';
                        }, 500);
                    }, 3000);
                }
            });
        }
    });
});
