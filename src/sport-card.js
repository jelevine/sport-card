import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class SportCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
      .card {
  display: flex;
  justify-content: space-evenly;
}
.card-container {
  background-color: #041E42;
  width: 20%;
  height: 50%;
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

img {
  width: 300px;
  max-width: 80%;
  border-radius: 10px;
}

.card-content {
  text-align: center;
  color: white;
  display: block;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.card-content h2 {
  padding-top: 20px;
}

.buttons {
    text-align: center;
}

.buttons button{
  margin-bottom: 20px;
  text-decoration: none;
  background-color: #ffff;
  color: #041E42;
  padding: 8px 12px;
  border-radius: 5px;
}

.card-content button{
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  background-color: #ffff;
  color: #041E42;
  padding: 8px 12px;
  border-radius: 5px;
}

.card-content button:active,
.card-content button:focus,
.card-content button:hover{
  background-color: #041E42;
  color: white;   
}

.card-content button a{
  text-decoration: none;
}


@media (max-width: 800px) and (min-width: 500px){
  .card-content button{
    display: none;
  }
}

@media (max-width: 500px){
  .card{
    max-width: 300px;
  }
  .card-content button{
    display: none;
  }
}

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class = buttons>
  <button class = 'details' id = "nob">Clone</button>
  <button class = 'details' id = 'delete'>Delete last</button>
  <button class = 'details' id = 'background'>Change Background</button>
  <button class = 'details' id = 'writing'>Change title</button>
</div>
<div class = "card">
  <div class = "card-container">
    <div class = "card-content">
      <h2>Penn State Blue and White Game</h2>
      <img align = "center" src = "https://dgiqkglfef83i.cloudfront.net/images/2023/4/15/Blue-White.png" alt = "B+W Game Image">
      <p>With all hype on the upcoming football season, the Blue and White game gives the fans something to look forward to watching in the spring!</p>
      <a class = 'details'>
      <button id = 'details' >Details</button>
      </a>
    </div>
  </div>
</div>
    `;
  }
}

customElements.define('sport-card', SportCard);