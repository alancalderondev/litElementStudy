import { html, css, LitElement } from 'lit';

class cabecera extends LitElement {
  static styles = css`
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 115px;
        z-index: 10;
        background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/menutexture.png);
        background-position: center top;
        background-size: auto 200px;
        background-repeat: repeat-x;
        position: relative;
        transition: background-color 0.3s ease;
    }

    .principal {
        max-width: 1060px;
        margin: 0 auto;
        display: flex;
        height: 70px;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    nav {
        display: flex;
    }

    nav a {
        font-family: 'Arial', serif;
        font-size: 12px;
        color: #8c8c8e;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-decoration: none;
        margin: 0 18px;
        transition: color 0.3s ease, transform 0.3s ease;
    }

    nav a.active, nav a:hover {
        color: white;
        transform: scale(1.1);
    }
  `;

  constructor() {
    super();
    this.data = [];
  }

  render() {
    return html`
      <header>
        <div class="principal">
          <nav>
            <a href="#">SPECIES</a>
            <a href="#">ABOUT US</a>
            <a href="#">OUR WORK</a>
            <a href="#">GET INVOLVED</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('cabecera-principal', cabecera);
