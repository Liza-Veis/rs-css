const levelsWrapper = document.querySelector('.levels__wrapper');
const editorMarkupWrapper = document.querySelector('.editor__markup');
const shelf = document.querySelector('.shelf');

const main = document.querySelector('.content');
const editor = document.querySelector('.editor');
const game = document.querySelector('.game');
const inputElem = document.querySelector('.editor__input');
const title = document.querySelector('.task');
const hint = document.querySelector('.hint');

const submitBtn = document.querySelector('.editor__btn');
const helpBtn = document.querySelector('.help');
const resetProgressBtn = document.querySelector('.levels__btn');

const nav = document.querySelector('.levels');
const navIcon = document.querySelector('.levels-icon');
const overlay = document.querySelector('.overlay');

export {
  levelsWrapper,
  editorMarkupWrapper,
  shelf,
  main,
  editor,
  game,
  inputElem,
  title,
  hint,
  submitBtn,
  helpBtn,
  resetProgressBtn,
  nav,
  navIcon,
  overlay
};
