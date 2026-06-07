# 🌐 My Portfolio — Syahrul Rizki

Personal portfolio website built with HTML, CSS (Bootstrap + custom), and vanilla JavaScript. Hosted on GitHub Pages.

🔗 **Live Demo:** [https://syahrulrzk.github.io/](https://syahrulrzk.github.io/)

---

## ✨ Features

- 🧭 **Smart Sidebar Navbar** with collapsible sub-menus (About & Work groups)
- 📱 **Fully Responsive** — desktop, tablet, mobile optimized
- 🎨 **Dark Theme** with lime/yellow accent (`#e0f780`)
- ⚡ **Performance Optimized** — `defer` scripts, preconnect CDNs, lazy loading
- 🔒 **Security Headers** via meta tags (CSP, X-Frame-Options, Referrer-Policy, etc.)
- ✨ **Particles.js** background animation
- 🌀 **AOS Animate On Scroll** library
- 🎠 **Custom Slider Engine** for Work & Blog sections
- 📝 **Blog auto-fetch** from `blogs.json`
- 📬 **Contact Form** integrated with Telegram Bot API

## 🎉 Easter Eggs & Fun Stuff

- **Konami Code** — ketik `↑↑↓↓←→←→BA` di keyboard → confetti rain + body shake! 🎊
- **Cursor Trail** — gerakan mouse ninggalin jejak brand color ✨
- **Click Particle Burst** — klik di area kosong → partikel meledak ke segala arah 💥
- **Spinning Profile Photo** — arahin cursor ke foto profil di sidebar → muter looping super kenceng 🌀

## 🛠 Tech Stack

| Layer       | Tools                                           |
|-------------|-------------------------------------------------|
| Frontend    | HTML5, CSS3, Bootstrap 5, AOS, Line Awesome    |
| Animations  | Particles.js, custom CSS keyframes             |
| Scripts     | Vanilla JS, jQuery (for Telegram AJAX)         |
| Hosting     | GitHub Pages                                    |
| Fonts       | Google Fonts (Bai Jamjuree)                     |
| Forms       | Telegram Bot API                                 |

## 📁 Project Structure

```
.
├── index.html              # Main page
├── maintenance.html        # Maintenance page
├── blogs.json              # Blog posts data
├── README.md               # This file
└── assets/
    ├── css/
    │   ├── bootstrap.min.css
    │   ├── aos.css
    │   ├── line-awesome.min.css
    │   └── style.css       # Custom styles + animations
    ├── js/
    │   ├── particles.js
    │   ├── app.js          # Particles config
    │   ├── bootstrap.bundle.min.js
    │   ├── aos.js
    │   └── main.js         # All custom JS (party mode, scrollspy, sliders, etc.)
    ├── fonts/
    └── images/
        ├── project/        # Project screenshots
        ├── client/         # Client logos
        └── sidebar-img.jpg  # Sidebar background
```

## ⚡ Performance

- **GTmetrix:** Performance **100%**, LCP 448ms, TBT 4ms, CLS 0
- **Lighthouse:** Best Practices 91, SEO 96
- All scripts `defer` (non-render-blocking)
- Preconnect ke Google Fonts & CloudFlare CDN
- Image lazy loading ready

## 🚀 Local Development

```bash
# Clone repo
git clone https://github.com/syahrulrzk/syahrulrzk.github.io.git

# Open index.html in browser, or use a local server:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📬 Contact

- Twitter: [@syahrulrzk](https://twitter.com/syahrulrzk)
- Telegram: [@syahrulrzk](https://t.me/syahrulrzk)
- GitHub: [@syahrulrzk](https://github.com/syahrulrzk)

---

⭐ **Star this repo** if you like the design or the easter eggs!
