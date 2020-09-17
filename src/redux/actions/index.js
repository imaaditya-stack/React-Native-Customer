import {
  REGISTER_USER,
  ADD_PHONE_NUMBER,
  ADD_BIRTH_DATE,
  ADD_ANNIVERSARY_DATE,
  ADD_HOBBIES,
  ADD_PROFESSION,
} from './types';

export const registerUser = (name, email, password) => ({
  type: REGISTER_USER,
  name,
  email,
  password,
});

export const addPhoneNumber = (phoneNumber) => ({
  type: ADD_PHONE_NUMBER,
  phoneNumber,
});

export const addBirthDate = (birthDate) => ({
  type: ADD_BIRTH_DATE,
  birthDate,
});

export const addAnniversayDate = (anniversaryDate) => ({
  type: ADD_ANNIVERSARY_DATE,
  anniversaryDate,
});

export const addHobbies = (hobbies) => ({
  type: ADD_HOBBIES,
  hobbies,
});

export const addProfession = (profession) => ({
  type: ADD_PROFESSION,
  profession,
});
