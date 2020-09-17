import {
  REGISTER_USER,
  ADD_PHONE_NUMBER,
  ADD_BIRTH_DATE,
  ADD_ANNIVERSARY_DATE,
  ADD_HOBBIES,
  ADD_PROFESSION,
} from '../actions/types';

const INITIAL_STATE = {};

export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        email: action.email,
        name: action.name,
        password: action.password,
      };
    }
    case ADD_PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    }
    case ADD_BIRTH_DATE: {
      return {
        ...state,
        birthDate: action.birthDate,
      };
    }
    case ADD_ANNIVERSARY_DATE: {
      return {
        ...state,
        anniversaryDate: action.anniversaryDate,
      };
    }
    case ADD_HOBBIES: {
      return {
        ...state,
        hobbies: action.hobbies,
      };
    }
    case ADD_PROFESSION: {
      return {
        ...state,
        profession: action.profession,
      };
    }
    default:
      return state;
  }
};
