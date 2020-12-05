import { editor, shelf } from './elements';
import { endLevel } from './levelControls';

function checkSelector(selector) {
  if (selector === '.active') {
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
    endLevel(false);
  } else {
    editor.classList.add('wrong');
  }
}

editor.addEventListener('animationend', () => editor.classList.remove('wrong'));

export { checkSelector };
