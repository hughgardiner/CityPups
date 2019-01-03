export function toggleAnswer(store, questionKey, buttonKey) {
  store[questionKey][buttonKey] = !store[questionKey][buttonKey];
}