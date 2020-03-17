document.addEventListener('DOMContentLoaded'), function() {

    // delete anime
    const list = document.querySelector('#anime-list ul');

    list.addEventListener('click', function(e) {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    })

    // add anime
    const addForm = document.forms['add-anime'];

    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        console.log(value);

        // create elements
        const li = document.createElement('li');
        const animeName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add content
        deleteBtn.textContent = 'delete';
        animeName.textContent = value;

        // add classes
        animeName.classList.add('name');
        deleteBtn.classList.add('delete');

        // append to document
        li.appendChild(animeName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })

    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e) {
        if (hideBox.checked) {
            list.style.display = "none";
        } else {
            list.style.display = "initial"; // or block
        }
    })

    // search anime
    const searchBar = document.forms['search-anime'].querySelector('input');
    searchBar.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const animes = list.getElementsByTagName('li');
        Array.from(animes).forEach(function(anime){
            const title = anime.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                anime.style.display = 'block';
            } else {
                anime.style.display = 'none';
            }
        })
    })

    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', function(e) {
        if (e.target.tagName == "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target)
        }
    })
}

