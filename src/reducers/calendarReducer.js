import moment from 'moment'
import { types } from '../types/types';

const initialState = {
  events: [
    {
      title: "Curso de react",
      start: moment().toDate(), // new date
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafa",
      user: {
        _id: "123",
        name: "Marcela",
      },
    },
  ],

  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.eventSetActive:
      return{
        ...state,
        activeEvent: action.payload
      }

    default:
      return state;
  }
};
