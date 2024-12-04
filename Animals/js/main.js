import { html, css, LitElement } from "lit";

class main extends LitElement {
  static styles = css`
    main {
      position: relative;
      width: 100%;
      height: 100vh;
      margin-top: -200px;
    }

    #slider {
      width: 100%;
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      position: relative;
    }

    canvas {
      width: 150%;
      height: 150%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    img {
      width: 100%;
      max-width: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }

    .slider-inner {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1060px;
      height: 100%;
      margin: 0 auto;
      z-index: 5;
    }

    #slider-content {
      padding: 0 10px;
      h2 {
        font-family: "acta-display", serif;
        font-weight: 400;
        font-size: 30px;
        letter-spacing: -1px;
        color: white;
        line-height: 30px;
        margin: 20px 0 60px;

        @media screen and (min-width: 800px) {
          font-size: 110px;
          line-height: 100px;
        }
      }

      span {
        display: none;
      }

      .meta {
        display: inline-block;
        font-family: "Arial", sans-serif;
        font-size: 11px;
        letter-spacing: 5px;
        color: #88888a;
        text-transform: uppercase;
        position: relative;

        @media screen and (min-width: 800px) {
          font-size: 20px;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 5px;
          right: -55px;
          width: 45px;
          height: 2px;
          background-color: #393d40;
        }
      }

      #slide-status {
        margin-top: 10px;
        font-family: "acta-display", serif;
        font-weight: 400;
        font-size: 18px;
        color: white;

        @media screen and (min-width: 800px) {
          font-size: 34px;
        }
      }
    }

    #pagination {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      z-index: 6;
    }

    #pagination button {
      display: block;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      width: 16px;
      height: 16px;
      background-color: #ffffff;
      border-radius: 100%;
      padding: 0;
      margin: 30px 0;
      cursor: pointer;
      position: relative;
      opacity: 0.2;
      transition: opacity 0.2s ease-in-out;
      outline: none;
    }

    #pagination button:hover {
      opacity: 0.5;
    }

    #pagination button.active {
      opacity: 1;
    }
  `;

  static properties = {
    data : {type: Array}
  }
  
  constructor() {
    super();
    this.data = [];
    this.currentSlide = 0; // Índice inicial del slider
  }

  // Método para actualizar el slide
  changeSlide(index) {
    this.currentSlide = index;
    this.requestUpdate(); // Solicita una actualización del componente
  }

  render() {
    const currentData = this.data[this.currentSlide];
    return html`
      <main>
        <div id="slider">
          <div class="slider-inner">
            <div id="slider-content">
              <div class="meta">Species</div>
              <h2 id="slide-title">${currentData.title}</h2>
              <div class="meta" style="margin-top: 200px">Status</div>
              <div id="slide-status" >${currentData.status}</div>
            </div>
          </div>

          <img src="${currentData.image}" />

          <div id="pagination">
            <button
              class="${this.currentSlide === 0 ? 'active' : ''}"
              @click="${() => this.changeSlide(0)}"
              data-slide="0"
            ></button>
            <button
              class="${this.currentSlide === 1 ? 'active' : ''}"
              @click="${() => this.changeSlide(1)}"
              data-slide="1"
            ></button>
            <button
              class="${this.currentSlide === 2 ? 'active' : ''}"
              @click="${() => this.changeSlide(2)}"
              data-slide="2"
            ></button>
            <button
              class="${this.currentSlide === 3 ? 'active' : ''}"
              @click="${() => this.changeSlide(3)}"
              data-slide="3"
            ></button>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define("contenedor-principal", main);

