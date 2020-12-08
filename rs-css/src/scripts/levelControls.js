import { levels } from './levels';
import { levelsWrapper, editorMarkupWrapper, shelf, title, game } from './elements';
import { getMarkup } from './markup';
import input from './input';

function createLevels() {
  const fragment = document.createDocumentFragment();

  levels.forEach((level, idx) => {
    const elem = document.createElement('span');
    elem.innerHTML = `<svg>
  <use xlink:href="#check-icon" href="#check-icon"></use>
  </svg>${idx + 1}`;

    fragment.appendChild(elem);
  });

  levelsWrapper.appendChild(fragment);
}

function setLevel() {
  input.lockInput(false);
  game.classList.remove('win');

  const levelIdx = localStorage.getItem('curLevel') || 0;
  const level = levels[levelIdx];

  const lastLevel = levelsWrapper.querySelector('.current');
  if (lastLevel) {
    lastLevel.classList.remove('current');
  }

  levelsWrapper.children[levelIdx].classList.add('current');

  title.textContent = level.title;
  shelf.innerHTML = level.markup;
  shelf.querySelectorAll(level.selector).forEach((elem) => {
    if (elem.tagName === 'DIV' && elem.children.length === 0) {
      return;
    }
    elem.classList.add('active');
  });

  editorMarkupWrapper.innerHTML = getMarkup(level.markup);
  game.classList.add('start');
  game.onanimationend = () => game.classList.remove('start');
}

function setLevelStates() {
  const progress = JSON.parse(localStorage.getItem('progress') || '{}');
  levelsWrapper
    .querySelectorAll('.hinted, .completed')
    .forEach((elem) => elem.classList.remove('hinted', 'completed'));

  Object.keys(progress).forEach((levelIdx) => {
    levelsWrapper.children[levelIdx].classList.add(progress[levelIdx]);
  });
}

function endLevel(withHint) {
  game.classList.add('finish');

  function animationend() {
    game.classList.remove('finish');

    const curLevel = +localStorage.getItem('curLevel');
    const progress = JSON.parse(localStorage.getItem('progress') || '{}');

    if (progress[curLevel] !== 'completed') {
      progress[curLevel] = withHint ? 'hinted' : 'completed';
      localStorage.setItem('progress', JSON.stringify(progress));
    }
    setLevelStates();

    if (curLevel === levels.length - 1) {
      input.lockInput(true);
      game.classList.add('win');
    } else {
      localStorage.setItem('curLevel', curLevel + 1);
      setLevel();
    }
  }

  game.onanimationend = animationend;
}

export { createLevels, setLevel, setLevelStates, endLevel };
