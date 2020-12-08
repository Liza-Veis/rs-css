import { submitBtn, helpBtn, inputElem } from './elements';

class Input {
  constructor(elem, placeholder = '') {
    this.input = elem;
    this.placeholder = placeholder;

    this.input.addEventListener('keypress', this.keypress.bind(this));
    this.input.addEventListener('blur', this.blur.bind(this));
    this.input.addEventListener('focus', this.focus.bind(this));
    this.input.addEventListener('keyup', this.keyup.bind(this));
  }

  on(e, callback) {
    this.input.addEventListener(e, callback);
  }

  get value() {
    return this.input.textContent;
  }

  set value(value) {
    this.input.textContent = value;
  }

  lockInput(lock) {
    this.value = '';
    this.blur();

    if (lock) {
      submitBtn.disabled = true;
      helpBtn.disabled = true;
      this.input.contentEditable = false;
    } else {
      submitBtn.disabled = false;
      helpBtn.disabled = false;
      this.input.contentEditable = true;
    }
  }

  print(str, callback) {
    this.lockInput(true);
    this.value = '';
    this.input.classList.remove('empty');

    const printChar = () => {
      if (this.value === str) {
        callback();
        return;
      }

      this.value += str[this.value.length];
      this.highlight();
      setTimeout(printChar, 150);
    };

    printChar();
  }

  blur() {
    if (this.value === '') {
      this.value = this.placeholder;
      this.input.classList.add('empty');
    }
  }

  focus() {
    if (this.input.classList.contains('empty')) {
      this.value = '';
      this.input.classList.remove('empty');
    }
  }

  keyup(e) {
    if (e.key === 'Backspace' && this.value.length === 0) {
      e.preventDefault();
      this.input.innerHTML = '';
    }
  }

  highlight() {
    function getFirstSecondLevel(str, char1, char2, className) {
      let arr = str.split('');
      let output = '';

      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === char1 || arr[i] === char2) {
          let endIdx = arr.indexOf(' ', i + 1);

          const spanIdx = arr.join('').indexOf('<span', i + 1);
          const spanCloseIdx = arr.join('').indexOf('</span>', i + 1);
          const bracketOpenIdx = arr.lastIndexOf('[', i);
          const bracketCloseIdx = arr.indexOf(']', bracketOpenIdx);
          const colonIdx = arr.lastIndexOf(':', i);
          const lastSpaceIdx = arr.lastIndexOf(' ', i);

          if (bracketOpenIdx !== -1 && bracketCloseIdx === -1) {
            output += arr[i];
          } else if (bracketOpenIdx !== -1 && bracketCloseIdx > i) {
            output += arr[i];
          } else if (arr[i] !== ':' && colonIdx !== -1 && colonIdx > lastSpaceIdx) {
            output += arr[i];
          } else {
            if (spanIdx !== -1 && spanIdx < endIdx) {
              endIdx = spanIdx - 1;
            } else if (endIdx === -1) {
              endIdx = arr.length;
            }

            let strToInsert = arr.slice(i, endIdx + 1).join('');

            if (spanIdx === -1 && spanCloseIdx !== -1) {
              endIdx = spanCloseIdx + 7;
            } else if (spanIdx !== -1 && spanCloseIdx < spanIdx) {
              endIdx = spanCloseIdx + 7;
            }

            if (spanCloseIdx !== -1 && spanCloseIdx < endIdx) {
              output += '</span>';
              endIdx = spanCloseIdx + 6;
            }

            output += `<span class="${className}">${strToInsert}</span>`;
            i = endIdx;
          }
        } else {
          output += arr[i];
        }
      }
      return output;
    }

    function getThirdLevel(str, char1, char2) {
      let arr = str.split('');
      let output = '';
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === char1) {
          let endIdx = arr.indexOf(char2, i + 1);
          if (endIdx === -1) {
            endIdx = arr.length;
          }

          output += `<span class="third-level">${arr.slice(i, endIdx + 1).join('')}</span>`;
          i = endIdx;
        } else {
          output += arr[i];
        }
      }

      return output;
    }

    function getFourthLevel(str, ...args) {
      let arr = str.split('');
      let output = '';

      for (let i = 0; i < arr.length; i += 1) {
        let bracketOpenIdx = arr.lastIndexOf('[', i);
        let bracketCloseIdx = arr.indexOf(']', bracketOpenIdx);
        if (bracketOpenIdx !== -1 && bracketCloseIdx === -1) {
          output += arr[i];
        } else if (bracketOpenIdx !== -1 && bracketCloseIdx > i) {
          output += arr[i];
        } else if (!args.includes(arr[i])) {
          output += arr[i];
        } else {
          output += `<span class="fourth-level">${arr[i]}</span>`;
        }
      }

      return output;
    }

    let value = this.value;
    try {
      value = getFourthLevel(value, '~', '^', '$', '+', '|', '=', '<', '>', "'", '"', ',');
      value = getThirdLevel(value, '[', ']');
      value = getFirstSecondLevel(value, '.', '#', 'first-level');
      value = getFirstSecondLevel(value, ':', '@', 'second-level');
    } catch {
      return;
    }

    this.input.innerHTML = value;
  }

  keypress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      return;
    }

    this.focus();

    const selection = window.getSelection();
    const anchorOffset = selection.anchorOffset + 1;
    const anchorNode = selection.anchorNode;

    const getCursorPosition = () => {
      let position = 0;
      for (let i = 0; i < this.input.childNodes.length; i += 1) {
        let childNode = this.input.childNodes[i];
        if (childNode.nodeType === 1) {
          childNode = childNode.childNodes[0];
        }

        if (childNode === anchorNode) {
          position += anchorOffset;
          break;
        }
        position += childNode.textContent.length;
      }
      return position;
    };

    function setCursorPosition(elem, position) {
      const range = document.createRange();
      let curPosition = 0;

      function setRange(node) {
        for (let i = 0; i < node.childNodes.length; i += 1) {
          let child = node.childNodes[i];
          if (child.textContent.length + curPosition >= position) {
            if (child.childNodes.length > 0) {
              setRange(child);
              return;
            }
            range.setStart(child, position - curPosition);
            return;
          }
          curPosition += child.textContent.length;
        }
      }

      setRange(elem);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    this.input.onkeyup = () => {
      try {
        const cursorPosition = getCursorPosition();
        this.highlight();
        setCursorPosition(this.input, cursorPosition);
      } catch {
        this.input.onkeyup = null;
      }

      this.input.onkeyup = null;
    };
  }
}

export default new Input(inputElem, 'Type in a CSS selector');
