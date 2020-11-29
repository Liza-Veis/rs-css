import './styles/style.scss';

// create levels

import { levels } from './scripts/levels';

const levelsWrapper = document.querySelector('.levels__wrapper');
const fragment = document.createDocumentFragment();

levels.forEach((level, idx) => {
  const elem = document.createElement('span');
  elem.innerHTML = `<svg>
  <use xlink:href="#check-icon" href="#check-icon"></use>
  </svg>${idx + 1}`;

  fragment.appendChild(elem);
});

levelsWrapper.appendChild(fragment);

// set level
const title = document.querySelector('.task');
const editorMarkupWrapper = document.querySelector('.editor__markup');
const shelf = document.querySelector('.shelf');

function setLevel() {
  const levelIdx = localStorage.getItem('curLevel') || 0;
  const level = levels[levelIdx];

  title.textContent = level.title;
  shelf.innerHTML = level.markup;
  shelf.querySelectorAll(level.selector).forEach((e) => e.classList.add('active'));

  const tags = level.markup
    .replace(/[\t\n]/g, '')
    .split('<')
    .slice(1)
    .map((e) => e.trim());

  let editorMarkup = '';

  for (let i = 0; i < tags.length; i += 1) {
    const tag = tags[i];
    if (tag === 'div>' && tags[i + 1] === '/div>') {
      tags.splice(i, 2);
      i -= 2;
    } else if ('/' + tag === tags[i + 1]) {
      tags.splice(i, 2, tag.replace('>', ' />'));
      i -= 1;
    }
  }

  tags.forEach((e) => {
    const tag = `&lt;${e.replace('>', '&gt;')}`;

    if (tag.endsWith('/&gt;')) {
      editorMarkup += `<div>${tag}</div>`;
    } else if (tag.startsWith('&lt;/')) {
      editorMarkup += `${tag}</div>`;
    } else {
      editorMarkup += `<div>${tag}`;
    }
  });

  editorMarkupWrapper.innerHTML = `
  &lt;div class="shelf"&gt;
  ${editorMarkup}
  &lt;/div&gt;`;
}

levelsWrapper.addEventListener('click', (e) => {
  const target = e.target.closest('span');
  if (!target) return;

  const level = +target.textContent - 1;
  localStorage.setItem('curLevel', level);
  setLevel();
});
setLevel();
