let recipes;
/**
 * Haz la llamada al API
 */
(async () => {
    const API_URL = 'https://api.sampleapis.com/recipes/recipes';
    await fetch(API_URL).then(res => res.json())
        .then(data => {
            loadRecipes('Breakfast', data);
            recipes = data;
        });
})();

// Comienzan botones varios

const btnMenu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
btnMenu.addEventListener('click', () => {
    sidebar.classList.toggle('activo');
});

const desayunosBtn = document.getElementById('desayunos');
desayunosBtn.addEventListener('click', () => {
    loadRecipes('Breakfast');
    sidebar.classList.toggle('activo');
});

const comidasBtn = document.getElementById('comidas');
comidasBtn.addEventListener('click', () => {
    loadRecipes('Main Course');
    sidebar.classList.toggle('activo');
});


const modal = document.getElementById('modalRecetas');
const span = document.querySelector('.cerrar-modal');

// Dale click a la tachita y quita el modal
span.onclick = () => modal.style.display = 'none';

// Dale click afuera y quita el modal
window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Termina botones varios

/**
 * Remueve todos los hijos de un elemento
 * 
 * @param {HTMLElement} content Contenido a remover 
 */
const removeChildFromContent = content => {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
};

/**
 * Crea un card con el titulo, duracion y la imagen de la receta
 * 
 * @param {Object} recipe receta
 * @returns Card formada con todos los componentes de la receta (div)
 */
const setCardComponents = recipe => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('div');
    title.className = 'card-title-recipe';
    title.innerHTML = recipe.title;

    const time = document.createElement('div');
    time.className = 'card-time-recipe';
    time.innerHTML = `${recipe.totalTime} minutes`;

    const imgDiv = document.createElement('div');
    imgDiv.className = 'card-img';

    const img = document.createElement('img');
    img.src = recipe.photoUrl;
    img.onerror = () => img.src = 'notFound.png';
    imgDiv.appendChild(img);

    card.appendChild(title);
    card.appendChild(time);
    card.appendChild(imgDiv);


    card.addEventListener('click', () => {
        const modalRecipe = document.getElementById('modal-recipe');
        modalRecipe.innerHTML = recipe.directions;
        modal.style.display = 'block';
    });

    return card;
}

/**
 * 
 * Establece todas las recetas en el container principal
 * 
 * @param {String} tipo Breakfast o Main Course 
 * @param {Object} data Datos del API 
 */
const loadRecipes = (tipo, data = recipes || {}) => {
    data = data.filter(c => c.course.includes(tipo) || c.title.includes(tipo) || c.tags.includes(tipo));
    const content = document.querySelector('.content');
    removeChildFromContent(content);
    data.forEach(recipe => {
        const card = setCardComponents(recipe);
        content.appendChild(card);
    })
}



