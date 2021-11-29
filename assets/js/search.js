// Open search on mobile
const searchForm = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('click', event => {
    if(searchInput.value == '') {
        event.preventDefault();
    }
    setTimeout(() => {
        searchForm.style.width = '210px';
        searchForm.style.backgroundColor = '#202020';
        searchInput.style.display = 'block';
        searchInput.focus();
    }, 150);

    window.addEventListener('click', event => {
        let target = event.target;

        if (!target.closest('.search')) {
            setTimeout(() => {
                searchForm.removeAttribute('style');
                searchInput.removeAttribute('style');
                searchInput.blur();
            }, 150);
        }
      });

    searchBtn.addEventListener('click', event=> {
        if(searchInput.value == '') {
            event.preventDefault();
        } else {
            event.stopPropagation();
        }
    });
});