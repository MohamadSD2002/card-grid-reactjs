import { createAction } from "@reduxjs/toolkit";
import request from "../../tools/request";

export const setPersons = createAction("PERSONS");
export const setTablePerson = createAction("ADD_PERSONS");
export const setDeletePerson = createAction("DELETE_PERSONS");

export function getPersons() {
  return (dispatch) =>
    request("/users").then(({ data }) => {
      data.length = 6;
      dispatch(setPersons(data));
    });
}
