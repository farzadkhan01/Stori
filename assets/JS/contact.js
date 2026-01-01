document.addEventListener('DOMContentLoaded', function () {

    (function () {
        emailjs.init('5Bqw6ZacFJblsq61U');
    })();

    const button = document.getElementById('button');
    const form = document.getElementById('form_submission');
    const successMessage = document.querySelector('.success_message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        button.innerText = 'Sending...';

        const serviceID = 'service_rpqnd0u';
        const templateID = 'template_tfvbemh';

        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                console.log(this);
                button.innerText = 'Send Message';
                // Show success message
                successMessage.classList.add('show');
                // Reset the form fields
                this.reset();
            },
            (error) => {
                button.innerText = 'Send Message';
                alert("Oops! Something went wrong: " + JSON.stringify(error));
            },
        );

    });
});