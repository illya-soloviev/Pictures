import {postData} from './services/requests';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]'),
          textareas = document.querySelectorAll('textarea'),
          selects = document.querySelectorAll('select');

    const message = {
        loading: 'Пожалуйста, подождите. Идёт загрузка...',
        success: 'Спасибо! Мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const clearForms = () => {
        inputs.forEach(item => {
            item.value = '';
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });

        textareas.forEach(item => {
            item.value = '';
        });

        selects.forEach(item => {
            item.value = '';
        });
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            
            item.files[0].name.length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            const statusImage = document.createElement('img');
            statusImage.setAttribute('src', message.spinner);
            statusMessage.appendChild(statusImage);

            const textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

            if (item.getAttribute('data-form') === 'calc') {
                const resultBlock = document.querySelector(state.selector);

                if (/\d/.test(state.result)) {
                    formData.append('sum', state.result);
                    resultBlock.textContent = state.success;
                } else {
                    resultBlock.textContent = state.failure;
                }
            }

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImage.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImage.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearForms();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
};

export default forms;