const editorMarkupWrapper = document.querySelector('.editor__markup');
const shelf = document.querySelector('.shelf');
const hint = document.querySelector('.hint');

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

export { mouseover, mouseout };
