import TurnstileLog from "../models/turnstile_log";
import { findUserByUsername, changeBalance } from "./user";

const BREAKFAST_COST = 5.00;
const LUNCH_COST = 3.00;
const DINNER_COST = 3.00;

const BREAKFAST_START_TIME = (7, 0);
const LUNCH_START_TIME = (10, 30);
const DINNER_START_TIME = (17, 0);


export const saveLog = async (username) => {
  let user = await findUserByUsername(username);
  if (!user) {
    return { success: false, msg: 'User not found.' };
  }
  let new_log = new TurnstileLog({
    user: user._id,
    time: new Date()
  });

  let res = await new_log.save().then(() => {
    return { success: true };
  }).catch((err) => {
    return { success: false, msg: err };
  });

  return res;
}

const getCost = () => {
  let cur_date = new Date();
  let cur_time = (cur_date.getHours(), cur_date.getMinutes());
  if ( cur_time < LUNCH_START_TIME){
    return BREAKFAST_COST;
  } else if ( cur_time < DINNER_START_TIME) {
    return LUNCH_COST;
  } else {
    return DINNER_COST;
  }
}

export const processEntry = async (username) => {
  let res = changeBalance(username, getCost());
  if (!res.success) {
    return res;
  }
  res = saveLog(username);
  if (!res.success) {
    return res;
  }
  return { success: true, msg: 'Have a nice meal :)'};
}