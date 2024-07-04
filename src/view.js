import { createRoot } from 'react-dom';

import Card from './Components/Common/Card';

window.addEventListener('DOMContentLoaded', () => {
  const aboutMeEls = document.querySelectorAll('.wp-block-create-block-about-me');
  aboutMeEls.forEach((el) => {
    const attributes = JSON.parse(el.getAttribute('data-attributes'));

    createRoot(el).render(<Card attributes={attributes} />);
  });
});