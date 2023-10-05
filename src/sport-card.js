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
  transition: background-color 0.3s;
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

#cDescription{
  color: white;
  align-content: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
}

#toggleDescription{
  display: flex;
  background-color: white;
  color: black;
  width: 40%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  background-color: #ffff;
  color: #041E42;
  padding: 8px 12px;
  border-radius: 5px;
}

.card-content #toggleDescription:active,
.card-content #toggleDescription:focus,
.card-content #toggleDescription:hover{
  background-color: #041E42;
  color: white;   
  transition: background-color 0.3s;
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
 
  firstUpdate(){
   const cloneButton = this.shadowRoot.querySelector("#clone");
   const deleteButton = this.shadowRoot.querySelector('#delete');
   const backgroundButton = this.shadowRoot.querySelector('#background');
   const writingButton = this.shadowRoot.querySelector('#writing');
   
   cloneButton.addEventListener('mousemove', (e) => {
    cloneButton.style.backgroundColor = "#041E42";
    cloneButton.style.color = 'white';
   });
   cloneButton.addEventListener('focus', (e) => {
    cloneButton.style.backgroundColor = "#041E42";
    cloneButton.style.color = 'white';
   });
   cloneButton.addEventListener('mouseout', (e) => {
    cloneButton.style.backgroundColor = '';
    cloneButton.style.color = "";
    })
   deleteButton.addEventListener('mousemove', (e) => {
    deleteButton.style.backgroundColor = "#041E42";
    deleteButton.style.color = 'white';
   });
   deleteButton.addEventListener('focus', (e) => {
    deleteButton.style.backgroundColor = "#041E42";
    deleteButton.style.color = 'white';
   });
  deleteButton.addEventListener('mouseout', (e) => {
    deleteButton.style.backgroundColor = '';
    deleteButton.style.color = "";
   });
   backgroundButton.addEventListener('mousemove', (e) => {
    backgroundButton.style.backgroundColor = "#041E42";
    backgroundButton.style.color = 'white';
   });
   backgroundButton.addEventListener('focus', (e) => {
    backgroundButton.style.backgroundColor = "#041E42";
    backgroundButton.style.color = 'white';
   });
  backgroundButton.addEventListener('mouseout', (e) => {
    backgroundButton.style.backgroundColor = '';
    backgroundButton.style.color = "";
   });
   writingButton.addEventListener('mousemove', (e) => {
    writingButton.style.backgroundColor = "#041E42";
    writingButton.style.color = 'white';
   });
   writingButton.addEventListener('focus', (e) => {
    writingButton.style.backgroundColor = "#041E42";
    writingButton.style.color = 'white';
   });
  writingButton.addEventListener('mouseout', (e) => {
    writingButton.style.backgroundColor = '';
    writingButton.style.color = "";
   });
  }

  cloneCard(e){
    console.warn(e);
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);

    clone.addEventListener('mouseover', () => {
      const color = Math.floor(Math.random() * 16777215).toString(16);
      clone.style.backgroundColor = '#' + color;
    })

    clone.addEventListener('mouseout', () => {
        clone.style.backgroundColor = '#041E42'
    })
    

    this.shadowRoot.querySelector('.card').appendChild(clone);

  }

  getColor(e) {
      console.warn(e);
      const container = this.shadowRoot.querySelector('.card-container');
      const color = Math.floor(Math.random() * 16777215).toString(16);
      container.style.backgroundColor = '#' + color;
    }

  deleteButton(e){
    const cards = this.shadowRoot.querySelector('.card');
    const cardCount = cards.children.length;
    if (cardCount > 1){
      cards.removeChild(cards.lastChild);
    }
  }

  titleButton(e){
    console.warn(e);
    const title = this.shadowRoot.querySelector('#title');
    if (title.innerText == 'something else'){
      title.innerText = 'Penn State Blue and White Game';
    }
    else{
      title.innerHTML = 'something else';
    }
  }

  cardHover(e){
    this.hovered = !this.hovered;
    const container = this.shadowRoot.querySelector('.card-container');
    if (this.hovered){
      const color = Math.floor(Math.random() * 16777215).toString(16);
      container.style.backgroundColor = '#' + color;
    }
    else{
      container.style.backgroundColor = '#041E42'
    }
  }

  render() {
    return html`
  <div class = buttons>
    <button class = 'details' id = "clone" @click = "${this.cloneCard}">Clone</button>
    <button class = 'details' id = 'delete' @click = "${this.deleteButton}">Delete last</button>
    <button class = 'details' id = 'background' @click = "${this.getColor}">Change Background</button>
    <button class = 'details' id = 'writing' @click = "${this.titleButton}">Change title</button>
  </div>
  <div class = "card">
    <div class = "card-container"
      @mouseover="${this.cardHover}"
      @mouseout="${this.cardHover}">
      <div class = "card-content">
        <h2 id = 'title'>Penn State Blue and White Game</h2>
        <img align = "center" src = "https://dgiqkglfef83i.cloudfront.net/images/2023/4/15/Blue-White.png" alt = "B+W Game Image">
        <details>
          <summary id = "toggleDescription">Description</summary>
          <p id = 'cDescription'>With all hype on the upcoming football season, the Blue and White game gives the fans something to look forward to watching in the spring!</p>
        </details>
      </div>
    </div>
  </div>


    `;
  }
}

customElements.define('sport-card', SportCard);