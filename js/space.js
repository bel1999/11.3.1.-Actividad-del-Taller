const buscar = document.getElementById('btnBuscar');

buscar.addEventListener('click', () => {
    const data = document.getElementById('inputBuscar').value
    contenedor.innerHTML = "";

    fetch(`https://images-api.nasa.gov/search?q=${data}`)
        .then(response => response.json())
        .then(data => {
            let contenedor = document.getElementById('contenedor');
            console.log(data);
            data.collection.items.forEach(element => {
                let div = document.createElement("div");
                div.innerHTML = `
                <div class="list-group-item w-50 p-3 mx-auto text-center">
                    <img class="img-fluid" src="${element.links[0].href}">
                    <h3 class="pt-3">${element.data[0].title}</h3>
                    <p>${element.data[0].description}</p>
                    <small class="text-muted">${element.data[0].date_created}</small>
                </div>`;
                contenedor.appendChild(div);
            });
        })
})

