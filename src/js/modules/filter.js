const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.classList.remove('animated', 'fadeIn');
            item.style.display = 'none';
        });

        no.classList.remove('animated', 'fadeIn');
        no.style.display = 'none';

        if (markType.length >= 1) {
            markType.forEach(item => {
                item.classList.add('animated', 'fadeIn');
                item.style.display = 'block';
            });
        } else {
            no.classList.add('animated', 'fadeIn');
            no.style.display = 'block';
        }
    }

    const bindFilter = (selector) => {
        let trigger = menu.querySelector(selector),
            elements = wrapper.querySelectorAll(selector);

        trigger.addEventListener('click', () => {
            typeFilter(elements);
        });
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(item => {
                item.classList.remove('active');
            });

            target.classList.add('active');
        }
    });

    bindFilter('.all');
    bindFilter('.lovers');
    bindFilter('.chef');
    bindFilter('.girl');
    bindFilter('.guy');
    bindFilter('.grandmother');
    bindFilter('.granddad');
};

export default filter;