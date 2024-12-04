import { html, css, LitElement } from 'lit';

class Productos extends LitElement {
    static styles = css`
        p{
            color: black; /* Color del texto negro */
            font-weight: bold; /* estilo de fuente en negritas */
        }
        a{
            text-decoration:none;    
        }
        .error {
            color: red;
            font-size: 15px;
            
        }
        .productCard {
            text-align: center; /*texto centrado*/
            border: 1px solid #000000; /*Borde negro de 1pixel*/
            max-width: 300px; /*Tamaño max del contenedor 150pixels*/
            list-style-type: none; /*Eliminamos los puntos de la lista (* item)*/
        }
        ul{
            display: flex;/* Hacemos que la lista sea horizontal */
            gap: 20px;
        }
        img{
            max-width: 200px;
            max-height: 200px;
        }
    `;

    static properties = {
        /*
            Definimos el tipo de dato (En nuestro caso recibimos un Array) 
            de lo que recibimos por parámetro en nuestra TAG
        */
        data: { type: Array }
    };

    // Inicializamos nuestros atributos
    constructor() {
        super();
        this.data = []; // Aseguramos que data esté inicializado como un arreglo
    }
    //SI QUEREMOS RENDERIZAR UTILIZANDO UN ARREGLO SIMPLE
    /*render() {
        // Verificamos que nuestro arreglo no esté vacío
        if (this.data.length > 0) {
            // Aquí procesamos lo que es el Data recorriéndolo con un Map y asignándolo a un <li>
            return html`
                <ul>
                    <!-- Recorremos nuestro arreglo con el .map -->
                    ${this.data.map(producto => html`
                        <li class="productCard">
                            <a href="#"><!--Agregamos un <a> para hacer que se pueda hacer click en los elementos-->
                                <p>${producto}</p>
                            <a>
                        </li>
                    `)}
                </ul>
            `;
        } else {
            return html`<p class="error">No hay productos en existencia</p>`;
        }
    }*/

    //PARA CUANDO RECIBAMOS UN ARREGLO DE OBJETOS
    /*render() {
        // Verificamos que nuestro arreglo no esté vacío
        if (this.data.length > 0) {
            // Aquí procesamos lo que es el Data recorriéndolo con un Map y asignándolo a un <li>
            return html`
                <ul>
                    <!-- Recorremos nuestro arreglo con el .map -->
                    ${this.data.map(producto => html`
                        <li class="productCard">
                            <a href="#"><!--Agregamos un <a> para hacer que se pueda hacer click en los elementos-->
                                <p>${producto.name}</p>
                                <img src="${producto.src}" alt="${producto.name}">
                            <a>
                        </li>
                    `)}
                </ul>
            `;
        } else {
            return html`<p class="error">No hay productos en existencia</p>`;
        }
    }*/


    //PARA EL MANEJO DE LA API
    render() {
        // Verificamos que nuestro arreglo no esté vacío
        if (this.data.length > 0) {
            // Aquí procesamos lo que es el Data recorriéndolo con un Map y asignándolo a un <li>
            return html`
                <ul>
                    <!-- Recorremos nuestro arreglo con el .map -->
                    ${this.data.map(producto => html`
                        <li class="productCard">
                            <a href="#"><!--Agregamos un <a> para hacer que se pueda hacer click en los elementos-->
                                <p>${producto.title}</p>
                                <img src="${producto.image}" alt="${producto.title}">
                            <a>
                        </li>
                    `)}
                </ul>
            `;
        } else {
            return html`<p class="error">No hay productos en existencia</p>`;
        }
    }
    
}

customElements.define('list-productos', Productos);