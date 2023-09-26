import { html } from 'lit';
import '../src/sport-card.js';

export default {
  title: 'SportCard',
  component: 'sport-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <sport-card
      style="--sport-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </sport-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
