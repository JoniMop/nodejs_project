'use strict';


const input_filtro = document.querySelector('#txt_filtro')
let noticias = listar_noticias();



let mostrar_noticias = () => {

    let tbody = document.querySelector('#tbl_noticias tbody');
    let filtro = input_filtro.value;
    tbody.innerHTML = '';
    for (let i = 0; i < noticias.length; i++) {
        if (noticias[i]['autor'].toLowerCase().includes(filtro.toLowerCase()) ||
            noticias[i]['titulo'].toLowerCase().includes(filtro.toLowerCase()) ||
            noticias[i]['noticia'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = noticias[i]['autor'];
            fila.insertCell().innerHTML = noticias[i]['titulo'];
            fila.insertCell().innerHTML = noticias[i]['noticia'];


        };

    }

};

mostrar_noticias();
input_filtro.addEventListener('keyup', mostrar_noticias);

