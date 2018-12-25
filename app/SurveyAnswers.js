import { observable } from 'mobx';

export default class SuveryAnswers {
  @observable answers = {
    sizeAnswers: [],
    livingAnswer: '',
    spaceAnswer: []
  }
}

