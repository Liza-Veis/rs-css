import './styles/style.scss';
import highlight from './scripts/highlight';

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
const game = document.querySelector('.game');
const title = document.querySelector('.task');
const editorMarkupWrapper = document.querySelector('.editor__markup');
const shelf = document.querySelector('.shelf');

const editor = document.querySelector('.editor');
const btn = document.querySelector('.editor__btn');
const input = document.querySelector('.editor__input');
const helpBtn = document.querySelector('.help');

function setLevel() {
  game.classList.remove('win');
  input.value = '';
  btn.disabled = false;
  helpBtn.disabled = false;
  input.readOnly = false;

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

// check selector

function endLevel() {
  const curLevel = +localStorage.getItem('curLevel');

  if (curLevel === levels.length - 1) {
    game.classList.add('win');
    return;
  }

  localStorage.setItem('curLevel', curLevel + 1);
  setLevel();
}

function checkSelector(selector) {
  if (input.value === '.active') {
    editor.classList.add('wrong');
    return;
  }

  const elems = [...shelf.querySelectorAll('.active')];
  let elemsToCheck;
  try {
    elemsToCheck = [...shelf.querySelectorAll(selector)];
  } catch {
    editor.classList.add('wrong');
    return;
  }

  const result = elems.every((elem, idx) => elemsToCheck[idx] === elem);

  if (result) {
    endLevel();
  } else {
    editor.classList.add('wrong');
  }
}

btn.addEventListener('click', () => {
  checkSelector(input.value);
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    checkSelector(input.value);
  }
});

editor.addEventListener('animationend', () => editor.classList.remove('wrong'));

// help

helpBtn.addEventListener('click', () => {
  const level = levels[+localStorage.getItem('curLevel')];
  input.value = '';
  btn.disabled = true;
  helpBtn.disabled = true;
  input.readOnly = true;

  function print(cb) {
    if (input.value === level.selector) {
      cb();
      return;
    }

    input.value += level.selector[input.value.length];
    setTimeout(() => {
      print(endLevel);
    }, 150);
  }

  setTimeout(() => {
    print();
  }, 300);
});

// start

setLevel();
highlight();
