import uniq from 'lodash/uniq'

export function persons(state = [], action) {
  switch (action.type) {
    case "PERSONS":
      return action.payload;
    default:
      return state;
  }
}

export function tablePerson(state = [], action) {
  switch (action.type) {
    case "ADD_PERSONS":
      return uniq([...state, action.payload]);
    case "DELETE_PERSONS":
      return state?.filter((person) => person.id !== action.payload)
    default:
      return state;
  }
}
