import './styles/style.scss';
import { mouseover, mouseout } from './scripts/hover';
import { createLevels, setLevel, setLevelStates, endLevel } from './scripts/levelControls';
import { checkSelector } from './scripts/checkSelector';
import input from './scripts/input';

import { levels } from './scripts/levels';
import {
  levelsWrapper,
  editorMarkupWrapper,
  shelf,
  submitBtn,
  helpBtn,
  resetProgressBtn
} from './scripts/elements';

levelsWrapper.addEventListener('click', (e) => {
  const target = e.target.closest('span');
  if (!target) return;

  const level = target.textContent - 1;
  localStorage.setItem('curLevel', level);
  setLevel();
});

submitBtn.addEventListener('click', () => {
  checkSelector(input.value);
});

input.on('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    checkSelector(input.value);
  }
});

helpBtn.addEventListener('click', () => {
  const levelIdx = +localStorage.getItem('curLevel');
  const level = levels[levelIdx];

  setTimeout(() => {
    input.print(level.selector, () => endLevel(true));
  }, 300);
});

resetProgressBtn.addEventListener('click', () => {
  localStorage.setItem('progress', '{}');
  localStorage.setItem('curLevel', 0);
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
