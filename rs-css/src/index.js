import './styles/style.scss';
import { mouseover, mouseout } from './scripts/hover';
import { createLevels, setLevel, setLevelStates } from './scripts/levelControls';
import { checkSelector } from './scripts/checkSelector';
import input from './scripts/input';

import { levels } from './scripts/levels';
import {
  levelsWrapper,
  editorMarkupWrapper,
  shelf,
  submitBtn,
  helpBtn,
  resetProgressBtn,
  main,
  nav,
  navIcon,
  overlay
} from './scripts/elements';

function toggleNav(add) {
  if (add !== undefined) {
    navIcon.classList.toggle('active', add);
  } else {
    navIcon.classList.toggle('active');
  }
  main.scrollTop = 0;
  nav.classList.toggle('active', navIcon.classList.contains('active'));
  document.body.classList.toggle('lock', navIcon.classList.contains('active'));
}

levelsWrapper.addEventListener('click', (e) => {
  const target = e.target.closest('.level');
  if (!target) return;

  const level = target.dataset.idx - 1;
  localStorage.setItem('curLevel', level);
  setLevel();
  toggleNav(false);
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

  input.print(level.selector, () => helpBtn.classList.add('active'));
});

resetProgressBtn.addEventListener('click', () => {
  localStorage.setItem('progress', '{}');
  localStorage.setItem('curLevel', 0);
  setLevelStates();
  setLevel();
  toggleNav(false);
});

editorMarkupWrapper.addEventListener('mouseover', (e) => mouseover(e.target, e.currentTarget));
editorMarkupWrapper.addEventListener('mouseout', mouseout);

shelf.addEventListener('mouseover', (e) => mouseover(e.target, e.currentTarget));
shelf.addEventListener('mouseout', mouseout);

navIcon.addEventListener('click', () => toggleNav());
overlay.addEventListener('click', () => toggleNav(false));

createLevels();
setLevel();
setLevelStates();
