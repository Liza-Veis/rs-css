const editorMarkupWrapper = document.querySelector('.editor__markup');
const shelf = document.querySelector('.shelf');
const hint = document.querySelector('.hint');

function getNesting(elem, wrapper) {
  const parent = elem.parentElement;
  const children = [...parent.children].filter((child) => child.tagName !== 'SPAN');

  let arr = [];
  if (parent !== wrapper) {
    arr = arr.concat(getNesting(parent, wrapper));
  }

  arr.push(children.indexOf(elem));
  return arr;
}

function toggleHint(show, elem) {
  if (!show) {
    hint.classList.remove('active');
    return;
  }

  hint.classList.add('active');

  let targetElem = elem;
  if (targetElem.children[0]) {
    if (targetElem.children[0].tagName === 'DIV' && targetElem.children[0].children.length === 0) {
      targetElem = targetElem.children[0];
    }
  }

  const box = targetElem.getBoundingClientRect();
  const marginLeft = 10;

  let top;
  if (targetElem.tagName === 'PLATE') {
    top = box.bottom - parseFloat(window.getComputedStyle(elem, ':before').height);
  } else {
    top = box.top;
  }

  hint.style.top = top + window.pageYOffset - hint.offsetHeight + 'px';
  hint.style.left = box.right + window.pageXOffset + marginLeft + 'px';

  const clonedElem = elem.cloneNode();
  clonedElem.classList.remove('active', 'hovered');
  hint.textContent = clonedElem.outerHTML.replace(' class=""', '');
}

function mouseover(elem, wrapper) {
  let targetElem = elem;
  if (elem.tagName === 'DIV' && elem.children.length === 0 && elem.textContent === '') {
    targetElem = elem.parentElement;
  }
  if (elem.tagName === 'SPAN') {
    mouseover(targetElem.parentElement, wrapper);
    return;
  }
  if (targetElem === wrapper) return;

  targetElem.classList.add('hovered');

  const nesting = getNesting(targetElem, wrapper);
  const oppositeWrapper = wrapper === shelf ? editorMarkupWrapper : shelf;
  const oppositeElem = nesting.reduce((parent, pos) => {
    const children = [...parent.children].filter((child) => child.tagName !== 'SPAN');
    return children[pos];
  }, oppositeWrapper);

  let shelfElem = wrapper === shelf ? targetElem : oppositeElem;

  oppositeElem.classList.add('hovered');

  toggleHint(true, shelfElem);
}

function mouseout() {
  document.querySelectorAll('.hovered').forEach((elem) => elem.classList.remove('hovered'));
  toggleHint(false);
}

export { mouseover, mouseout };
