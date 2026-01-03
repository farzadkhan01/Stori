class homePage {
    constructor() {
        this.init();
    }

    /**
     * @Functionality This fuction adds the show classes to the toggle Button also display the navbar (Pages reference).
     * @author Farzad Khan
     */
    #toggleFunctionality() {
        const toggleBtn = document.getElementById('toggle');
        const menuContainer = document.querySelector('.toggle-pages');
        const bars = document.querySelectorAll('.bar');

        if (toggleBtn && menuContainer) {
            toggleBtn.addEventListener('click', function () {

                // show class to the bars make an transition
                bars.forEach(bar => bar.classList.toggle('show'));

                // display menu
                menuContainer.classList.toggle('show');
            });

        } else {
            console
                .error("Missing elements: Check if 'toggle' ID and 'toggle-pages' class exist. ");
        }
    }

    /**
   * @Functionality Dropdown --> it displays categories of services.
   * @author Farzad Khan
   */
    #dropdown() {
        const dropdownContent = document.querySelector('.nav-service-categories');
        const service = document.querySelector('#serviceDropdown');

        service.addEventListener('mouseenter', () => {
            // nav-show class displays the dropdown content
            return dropdownContent.classList.add('nav-show');
        });

        dropdownContent.addEventListener('mouseleave', function () {
            // nav-show class displays the dropdown content
            return dropdownContent.classList.remove('nav-show');
        });

    }

    #observerCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }

    #pageLateView() {
        const options = {
            rootMargin: '0px 0px -5% 0px'
        };
        // class names 
        const observer = new IntersectionObserver(this.#observerCallback, options);

        const translate = document.querySelectorAll('.translate');
        translate.forEach((entry => observer.observe(entry)));
    }

    init() {
        this.#toggleFunctionality();
        this.#dropdown();
        this.#pageLateView();
    }
}

const home = new homePage();