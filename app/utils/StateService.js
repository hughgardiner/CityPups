export function answerSelected(state, key, answerText) {
  if (state[key].constructor == Array) {
    state[key].push(answerText);
  }
  else {
    state[key] = answerText;
  }
}

export function answerUnselected(stateValue, key, answerText) {
  if (stateValue[key].constructor == Array) {
    var index = stateValue[key].indexOf(answerText);
    if (index > -1) {
      stateValue[key].splice(index, 1);
    }
  }
  else {
    stateValue[key] = '';
  }
}