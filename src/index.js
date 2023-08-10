import './style.css';

function App() {
  const element = document.createElement('div');
    const app = ` <h1>Hello Vanilla JS!</h1>
      <div>
        Example of state management in Vanilla JS
      </div>
      <br />
      <button id="increase">Increase</button>
      <button id="decrease">decrease</button>
    `;
  element.innerHTML = app;
  return element;
}

document.body.appendChild(App());