document.addEventListener('DOMContentLoaded', function () {
    // Modal Elements
    const modal = document.getElementById('enrollModal');
    const modalCourseName = document.getElementById('modalCourseName');
    const closeModalBtn = document.querySelector('.close-modal');
    const enrollForm = document.getElementById('enrollForm');
    const enrollButtons = document.querySelectorAll('.btn-enroll');

    // Open Modal
    enrollButtons.forEach(button => {
        button.addEventListener('click', function () {
            const courseName = this.getAttribute('data-course');
            modalCourseName.textContent = courseName;

            // Auto-select the course in the dropdown
            const courseSelect = document.getElementById('courseSelect');
            courseSelect.value = courseName;

            modal.style.display = 'flex';
        });
    });

    // Close Modal
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close Modal on Outside Click
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle Form Submission
    enrollForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const course = document.getElementById('courseSelect').value;

        // Simulate API call/processing
        console.log('Inscripción:', { name, email, phone, age, course });
        alert(`¡Gracias ${name}! Tu inscripción al curso de ${course} ha sido recibida exitosamente. Nos pondremos en contacto contigo pronto.`);

        // Reset and close
        enrollForm.reset();
        modal.style.display = 'none';
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    mobileMenuBtn.addEventListener('click', function () {
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '80px';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.backgroundColor = '#fff';
            navList.style.padding = '20px';
            navList.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navList.style.display = 'none';
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
