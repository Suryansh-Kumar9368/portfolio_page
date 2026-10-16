
const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

document.getElementById("year").textContent = new Date().getFullYear();

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");
    themeBtn.textContent = isLight ? "☾" : "☀";
    themeBtn.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    formStatus.textContent = "Opening your email application...";
    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
});
