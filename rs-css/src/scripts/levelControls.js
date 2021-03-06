import { levels } from './levels';
import { levelsWrapper, editorMarkupWrapper, shelf, title, game, helpBtn } from './elements';
import { getMarkup } from './markup';
import input from './input';

function createLevels() {
  const fragment = document.createDocumentFragment();

  levels.forEach((level, idx) => {
    const elem = document.createElement('span');
    elem.classList.add('level');
    elem.dataset.idx = idx + 1;
    elem.innerHTML = `
	 <svg><use xlink:href="#check-icon" href="#check-icon"></use></svg>
    <span class="level__number">${idx + 1}</span> ${level.syntax}`;

    fragment.appendChild(elem);
  });

  levelsWrapper.appendChild(fragment);
}

function setLevel() {
  input.lockInput(false);
  game.classList.remove('win');
  editorMarkupWrapper.style.pointerEvents = 'all';

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

  game.onanimationend = () => {
    game.classList.remove('start');
    game.onanimationend = null;
  };
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

function endLevel() {
  game.classList.add('finish');

  function animationend() {
    game.classList.remove('finish');

    const curLevel = +localStorage.getItem('curLevel');
    const progress = JSON.parse(localStorage.getItem('progress') || '{}');

    if (progress[curLevel] !== 'completed') {
      progress[curLevel] = helpBtn.classList.contains('active') ? 'hinted' : 'completed';
      helpBtn.classList.remove('active');
      localStorage.setItem('progress', JSON.stringify(progress));
    }

    setLevelStates();

    if (curLevel === levels.length - 1) {
      input.lockInput(true);
      editorMarkupWrapper.style.pointerEvents = 'none';
      game.classList.add('win');
    } else {
      localStorage.setItem('curLevel', curLevel + 1);
      setLevel();
    }

    game.removeEventListener('animationend', animationend);
  }

  game.addEventListener('animationend', animationend);
}

export { createLevels, setLevel, setLevelStates, endLevel };
