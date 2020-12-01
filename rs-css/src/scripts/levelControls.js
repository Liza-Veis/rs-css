import { levels } from './levels';
import { levelsWrapper, editorMarkupWrapper, shelf, title, game } from './elements';
import { lockInput } from './input';

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
  lockInput(false);

  const levelIdx = localStorage.getItem('curLevel') || 0;
  const level = levels[levelIdx];

  const lastLevel = levelsWrapper.querySelector('.current');
  if (lastLevel) {
    lastLevel.classList.remove('current');
  }

  levelsWrapper.children[levelIdx].classList.add('current');

  title.textContent = level.title;
  shelf.innerHTML = level.markup;
  shelf.querySelectorAll(level.selector).forEach((elem) => elem.classList.add('active'));

  const tags = level.markup
    .replace(/[\t\n]/g, '')
    .split('<')
    .slice(1)
    .map((elem) => elem.trim());

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

  tags.forEach((elem) => {
    const tag = `&lt;${elem.replace('>', '&gt;')}`;

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
      lockInput(true);
      game.classList.add('win');
    } else {
      localStorage.setItem('curLevel', curLevel + 1);
      setLevel();
    }
  }

  game.onanimationend = animationend;
}

export { createLevels, setLevel, setLevelStates, endLevel };
