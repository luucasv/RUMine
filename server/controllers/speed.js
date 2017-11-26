import Speed from "../models/speed";

export const saveSpeed = async (speed) => {
  let new_speed = new Speed({
    speed: speed,
    time: new Date()
  });

  let res = await new_speed.save().then(() => {
    return { success: true };
  }).catch((err) => {
    return { success: false, msg: err };
  });

  return res;
}

