import './styles/style.scss';
import { mouseover, mouseout } from './scripts/highlight';
import { createLevels, setLevel, setLevelStates, endLevel } from './scripts/levelControls';
import { checkSelector } from './scripts/checkSelector';
import { lockInput } from './scripts/input';

import { levels } from './scripts/levels';
import {
  levelsWrapper,
  editorMarkupWrapper,
  shelf,
  game,
  input,
  submitBtn,
  helpBtn,
  resetProgressBtn
} from './scripts/elements';

levelsWrapper.addEventListener('click', (e) => {
  const target = e.target.closest('span');
  if (!target) return;

  const level = +target.textContent - 1;
  localStorage.setItem('curLevel', level);

  game.classList.remove('win');
  setLevel();
});

submitBtn.addEventListener('click', () => {
  checkSelector();
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    checkSelector(input.value);
  }
});

helpBtn.addEventListener('click', () => {
  const levelIdx = +localStorage.getItem('curLevel');
  const level = levels[levelIdx];

  lockInput(true);

  function print(cb) {
    if (input.value === level.selector) {
      cb();
      return;
    }

    input.value += level.selector[input.value.length];
    setTimeout(() => {
      print(() => endLevel(true));
    }, 150);
  }

  setTimeout(() => {
    print();
  }, 300);
});

resetProgressBtn.addEventListener('click', () => {
  localStorage.setItem('progress', '{}');
  localStorage.setItem('curLevel', 0);

  game.classList.remove('win');

  setLevelStates();
  setLevel();
});

editorMarkupWrapper.addEventListener('mouseover', (e) => mouseover(e.target, e.currentTarget));
editorMarkupWrapper.addEventListener('mouseout', mouseout);

shelf.addEventListener('mouseover', (e) => mouseover(e.target, e.currentTarget));
shelf.addEventListener('mouseout', mouseout);

createLevels();
setLevel();
setLevelStates();
