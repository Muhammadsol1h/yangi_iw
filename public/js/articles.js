const tabs = document.querySelectorAll('#tab_btn')
const all_content = document.querySelectorAll('#content')
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('btnactive') });
        tab.classList.add('btnactive');
        all_content.forEach(content => { content.classList.remove('hidden') })
        all_content[index].classList.add('activeblock')
    })
})