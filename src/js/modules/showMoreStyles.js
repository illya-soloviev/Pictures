import {getResource} from "./services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger),
          cardsWrapper = document.querySelector(wrapper);

    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(() => {
                const error = document.createElement('div');
                error.style.cssText = `
                    text-align: center;
                    font-size: 2rem;
                    padding-bottom: 1.5rem;
                `;
                error.textContent = 'Что-то пошло не так. Пожалуйста, повторите позднее.';
                cardsWrapper.appendChild(error);
            })
        
        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            cardsWrapper.appendChild(card);
        });
    }
};

export default showMoreStyles;