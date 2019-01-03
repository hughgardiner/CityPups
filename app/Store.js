import { observable } from 'mobx';
import { SIZE, TINY_DOG, SMALL_DOG, MEDIUM_DOG, LARGE_DOG } from './constants/dogSizes';
import { HOUSING, SMALL, LARGE, HOME } from './constants/housing';
import { SPACE, NONE, DOG_PARK, SMALL_YARD, BIG_YARD } from './constants/space';

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
    }
  }
}

