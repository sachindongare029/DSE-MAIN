import * as types from "./AnnouncementTypes";

export const setAnnouncement = (payload) => {
  return { type: types.SET_ANNOUNCEMENT, payload };
};

export const getAnnouncement = () => {
  return { type: types.GET_ANNOUNCEMENT };
};
