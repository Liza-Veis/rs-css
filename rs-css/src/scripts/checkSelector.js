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
    elemsToCheck = [...shelf.querySelectorAll(selector.replace(/\s/g, ' '))].filter((elem) => {
      return !(elem.tagName === 'DIV' && elem.children.length === 0);
    });
  } catch {
    editor.classList.add('wrong');
    return;
  }

  const result = elems.every((elem, idx) => elemsToCheck[idx] === elem);

  if (result) {
    endLevel(false);
  } else if (elemsToCheck.length > 0) {
    elemsToCheck.forEach((elem) => elem.classList.add('wrong'));
    shelf.onanimationend = () => {
      elemsToCheck.forEach((elem) => elem.classList.remove('wrong'));
      shelf.onanimationend = null;
    };
  } else {
    editor.classList.add('wrong');
    editor.onanimationend = () => {
      editor.classList.remove('wrong');
      editor.onanimationend = null;
    };
  }
}

export { checkSelector };
