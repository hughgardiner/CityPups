import { observable, action } from 'mobx';

export default class Store {
  @observable questions = {
    SIZE: {
      TINY_DOG: false,
      SMALL_DOG: false,
      MEDIUM_DOG: false,
      LARGE_DOG: false
    },
    HOUSING: {
      SMALL: false,
      LARGE: false,
      HOME: false      
    },
    SPACE: {
      NONE: false,
      DOG_PARK: false,
      SMALL_YARD: false,
      BIG_YARD: false
    },
    ROOMMATES: {
      NONE: false,
      OTHER_DOGS: false,
      CATS: false,
      OTHER_PETS: false
    }
  }

  @action toggleAnswer(questionKey, buttonKey, multiSelect = false) {
    this.questions[questionKey][buttonKey] = !this.questions[questionKey][buttonKey];
    if (!multiSelect && this.questions[questionKey][buttonKey] === true) {
      this.resetStore(this.questions[questionKey], buttonKey);
    }
  }

  resetStore(store, buttonKey) {
    for (var key in store) {
      if (key != buttonKey) {
        store[key] = false;
      }
    }
  }
}

