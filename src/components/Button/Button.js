import styles from './Button.sass';
import pugTemplate from './Button.pug';

export default function Button(text) {
    const template = pugTemplate({ styles, text });
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = template.trim();
    return tempDiv.firstChild;
}