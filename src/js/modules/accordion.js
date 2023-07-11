const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(item => {
                if (item !== this) {
                    item.classList.remove('active-style');
                    item.nextElementSibling.classList.remove('active-content');
                    item.nextElementSibling.style.maxHeight = '0px';
                } else {
                    this.classList.toggle('active-style');
                    this.nextElementSibling.classList.toggle('active-content');
        
                    if (this.classList.contains('active-style')) {
                        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + '80px';
                    } else {
                        this.nextElementSibling.style.maxHeight = '0px';
                    }
                }
            });
        });
    });
};

export default accordion;