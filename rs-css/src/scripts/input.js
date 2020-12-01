import { input, submitBtn, helpBtn } from './elements';

function lockInput(lock) {
  input.value = '';
  if (lock) {
    submitBtn.disabled = true;
    helpBtn.disabled = true;
    input.readOnly = true;
  } else {
    submitBtn.disabled = false;
    helpBtn.disabled = false;
    input.readOnly = false;
  }
}

export { lockInput };
