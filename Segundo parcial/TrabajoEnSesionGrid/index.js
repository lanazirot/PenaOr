(async () => {
    const API = 'https://dog.ceo/api/breed/hound/images';
    await fetch(API)
        .then(res => res.json())
        .then(data => {
            fillData(data.message);
        })
})();

const fillData = data => {
    const container = document.getElementById('contenedor');
    
    data.length = 100;

    data.forEach(element => {
       const child = document.createElement('div');
        child.className = 'caja';
        const img = document.createElement('img');
        img.src = element;
        child.appendChild(img);
        container.appendChild(child); 
    });     
}