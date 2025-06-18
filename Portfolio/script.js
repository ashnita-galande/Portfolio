let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
};


menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', () => {
    alert("This would open the certificate link.");
  });
});




 emailjs.init("WmlaklLjEgCyc5n9q"); // ✅ Your PUBLIC KEY

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    full_name: form.full_name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  emailjs.send("service_rxe6hla", "template_jz5m2vj", data)
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("Failed to send message.");
      console.error("EmailJS Error:", error);
    });
});

 window.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".bar div").forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0"; // reset
        setTimeout(() => bar.style.width = width, 100); // animate in
      });
    });
