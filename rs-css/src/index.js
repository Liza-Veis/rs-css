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
const hint = document.querySelector('.hint');

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

// highlight

function getNesting(elem, wrapper) {
  const parent = elem.parentElement;
  const childrens = [...parent.children];
  let arr = [];

  if (parent !== wrapper) {
    arr = arr.concat(getNesting(parent, wrapper));
  }

  arr.push(childrens.indexOf(elem));
  return arr;
}

function toggleHint(show, elem) {
  if (!show) {
    hint.classList.remove('active');
    return;
  }

  let targetElem = elem;

  if (targetElem.children[0]) {
    if (targetElem.children[0].tagName === 'DIV' && targetElem.children[0].children.length === 0) {
      targetElem = targetElem.children[0];
    }
  }

  hint.classList.add('active');

  const box = targetElem.getBoundingClientRect();
  let top;
  if (targetElem.tagName === 'PLATE') {
    top = box.bottom - parseFloat(window.getComputedStyle(elem, ':before').height);
  } else {
    top = box.top;
  }

  hint.style.top = top + window.pageYOffset - hint.offsetHeight + 'px';
  hint.style.left = box.right + window.pageXOffset + 10 + 'px';

  const clonedElem = elem.cloneNode();
  clonedElem.classList.remove('active', 'hovered');

  hint.textContent = clonedElem.outerHTML.replace(' class=""', '');
}

function mouseover(elem, wrapper) {
  if (elem === wrapper) return;
  let targetElem = elem;

  if (elem.tagName === 'DIV' && elem.children.length === 0 && elem.textContent === '') {
    targetElem = targetElem.parentElement;
  }

  targetElem.classList.add('hovered');

  const nesting = getNesting(targetElem, wrapper);
  const oppositeWrapper = wrapper === shelf ? editorMarkupWrapper : shelf;
  const oppositeElem = nesting.reduce((parent, pos) => parent.children[pos], oppositeWrapper);

  let shelfElem = wrapper === shelf ? targetElem : oppositeElem;

  oppositeElem.classList.add('hovered');

  toggleHint(true, shelfElem);
}

function mouseout() {
  document.querySelectorAll('.hovered').forEach((elem) => elem.classList.remove('hovered'));
  toggleHint(false);
}

editorMarkupWrapper.addEventListener('mouseover', (e) => mouseover(e.target, e.currentTarget));
editorMarkupWrapper.addEventListener('mouseout', mouseout);

shelf.addEventListener('mouseover', (e) => mouseover(e.target, e.currentTarget));
shelf.addEventListener('mouseout', mouseout);

setLevel();
