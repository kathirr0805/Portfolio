let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

function showAlert1() {
    alert("Please wait, the submit button will be ready soon.");
}
function showAlert2() {
    alert("Hire me Please");
}
function showAlert3() {
    alert("Contact me in Whatsapp");
}
function showAlert4() {
    alert("Will be updated soon");
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var data = new FormData(event.target);

    fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Your Message sent successfully.I will catch up you soon...');
        } else {
            alert('Error occured.Please try again');
        }
    });

    document.getElementById('contact-form').reset();
});

document.getElementById('resumebtn').addEventListener('click', function() {
    var downloadLink = document.createElement('a');
    downloadLink.href = './documents/resume.pdf';
    downloadLink.download = 'resume.pdf';
    downloadLink.click();
  });

