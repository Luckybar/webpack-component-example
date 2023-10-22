import Button from './components/Button/Button';
import ButtonB from './components/ButtonB/Button';

const myButton = Button('Click Me!');
const myButtonB = ButtonB('Click Me2!');

document.body.appendChild(myButton);
document.body.appendChild(myButtonB);