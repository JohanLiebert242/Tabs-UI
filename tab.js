const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const contents = $$('.tab-content');
const line = $('.tab-line');

const tabActive = $('.tab-item.active');

tabs.forEach((tab, index) => {
    tab.onclick = function()  {
        content = contents[index];
        $('.tab-item.active').classList.remove('active');
        $('.tab-content.active').classList.remove('active');
        this.classList.add('active');   
        content.classList.add('active');     

        line.style.width = this.offsetWidth + 'px';
        line.style.left = this.offsetLeft + 'px';
    }
})

