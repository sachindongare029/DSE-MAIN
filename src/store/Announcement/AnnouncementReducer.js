import * as types from "./AnnouncementTypes";

const INITIAL_STATE = [];

export default function Announcement(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_ANNOUNCEMENT:
      return action.payload;
    case types.GET_ANNOUNCEMENT:
      return action.payload;
    default:
      return state;
  }
}
