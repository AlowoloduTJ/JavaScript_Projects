Portfolio Website
A simple personal portfolio website built with HTML and CSS. Features a fixed navigation bar, background video, image and video sections, contact form placeholder, and responsive layout.

Files Included
index.html — main webpage markup.

stylesheet/portfolio.css — all styles (external CSS; no inline styles).

images/ — folder for images referenced in the page (e.g., GitHub.png, cbt_pic2.png, left/right images).

images/video/Prayer.mp4 — background video referenced by the page.

images/prayer.mp4 — inline video in the About section.

any other assets you add (replace with your own media files).

Overview
Fixed top navigation with links to Home, About, GitHub, and Contact sections.

Full‑width background video on the Home section that autoplays muted and loops.

About section with a paired image/video and descriptive text.

GitHub section with link and logo image.

Contact section with a simple HTML form (placeholder action — replace with your form handling endpoint).

Footer with copyright and company link.

Responsive layout and simple hover/animation effects implemented in stylesheet/portfolio.css.

Local Setup
Place the project folder on your web server or open index.html directly in a browser for local testing.

Ensure folder structure is preserved:

index.html

stylesheet/portfolio.css

images/

video/Prayer.mp4

prayer.mp4

GitHub.png

cbt_pic2.png

other images referenced in index.html

Open index.html in a modern browser (Chrome, Firefox, Edge, Safari). The background video will autoplay muted and loop per browser autoplay policies.

Deployment Notes
Host on any static web host (GitHub Pages, Netlify, Vercel, traditional web host). For GitHub Pages:

Create a new repository and push the project files (keep the stylesheet and images folders).

In repository Settings → Pages, choose the main branch and root folder, then save.

Visit the published URL provided by GitHub Pages.

For production use, replace placeholder media and update external links (GitHub profile, ATJ CONCEPTS link, form action).

Customization Checklist
Replace page title and headings with your name and details.

Replace videos and images in images/ and images/video/ with your originals; preserve file names in the HTML or update the src attributes.

Update the contact form action to use a backend endpoint or a service such as Formspree, Netlify Forms, or your own API.

Edit stylesheet/portfolio.css to change colors, fonts, paddings, or breakpoints.

Ensure accessibility: add meaningful alt text, labels for form fields, and test keyboard navigation.

License and Credits
This project is provided as-is for personal or educational use. Attribution to the original author (Taiwo Alowolodu) appears in the footer of the page. Adjust or remove as needed when you adapt the template.