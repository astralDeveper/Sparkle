import {BASE_URL} from '../mocks/authentication';

export const USER = {
  REGISTER: `${BASE_URL}signup`,
  PROFILE_DETAILS: `${BASE_URL}get-user-details`,
  GET_DIAMONDS: `${BASE_URL}diamondPlan/`,
  TOP_DIAMONDS: `${BASE_URL}diamondPlan/isTopToggle`,
  GET_ALL_GIFTS: `${BASE_URL}gift/all`,
  GET_INTEREST: `${BASE_URL}findIntrest/get-suggestions`,
  UPDATE_PROFILE: `${BASE_URL}update-profile`,
  ADD_STORY: `${BASE_URL}addstories/add-story`,
  SETTING: `${BASE_URL}setting/`,
  BANK_DET: `${BASE_URL}redeem/redeem`,
  CHAT_ROME: `${BASE_URL}createRoom`,
  CHAT_LIST: `${BASE_URL}chatList`,
  GET_ALL_USER: `${BASE_URL}allchatList`,
  UPDATE_ID: `${BASE_URL}update-profile`,
  SEND_SIG: `${BASE_URL}generateAgoraToken`,
  VIP_PLANS: `${BASE_URL}vipPlan/getplans`,
  GET_USER_REDEEM: `${BASE_URL}user`,
  ADD_FRIENDS: `${BASE_URL}friends/send-request`,
};
