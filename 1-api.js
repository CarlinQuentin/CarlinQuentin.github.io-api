const id = 'ea79473a';
const baseURL = "https://api.edamam.com/search";
const key = "278321f728ad8f2e05f03309078026ad";
let url;

const section = document.querySelector('section');
const searchTerm = document.querySelector('.search');
const nav = document.querySelector('nav');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');



// nav.style.display = 'none';
// let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);



function fetchResults(e){
    e.preventDefault()
    url = `${baseURL}?q=${searchTerm.value}&app_id=${id}&app_key=${key}&to=8`
    console.log(url)


    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json){
    displayResults(json);
    });
}

function displayResults(json) {
    let recipe = json.hits;
    while (section.firstChild){
        section.removeChild(section.firstChild)
    }

    if (recipe.length === 0) {
        console.log('No Results')
        alert ("No Results");
    } else {
        for (let i = 0; i < recipe.length; i++){

            let article = document.createElement('article');
            let heading = document.createElement('h4');
            let link = document.createElement('a')
            let img = document.createElement('img')

            let current = recipe[i];
            console.log("Current:", current);
            
            link.href = current.recipe.url;
            link.textContent = current.recipe.label;
            
            let currentRecipe = current.recipe;
            
            

            
            
            if(currentRecipe.image.length > 0){
                img.src = currentRecipe.image;
                
                img.alt = currentRecipe.label;
            }
            heading.appendChild(link);
            article.appendChild(heading);
            section.appendChild(article);
            article.appendChild(img);
    }
}
};



    






