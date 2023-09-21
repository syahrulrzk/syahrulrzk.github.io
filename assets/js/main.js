AOS.init();
// You can also pass an optional settings object
// below listed default settings
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
var text = "With over 2 years of experience in the IT industry, I have focused on designing, managing and optimizing network infrastructure for various projects and companies.";

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
