import QueueSize from "../models/queue_size";

export const getLatestSize = async () => {
  const [ elem ] = await QueueSize.find().sort({time: -1}).limit(1);
  let latest_size = {
    size: elem.size,
    time: elem.time
  }
  return latest_size;
}

export const saveSize = async (size) => {
  let new_size = new QueueSize({
    size: size,
    time: new Date()
  });

  let res = await new_size.save().then(() => {
    return { success: true };
  }).catch((err) => {
    return { success: false, msg: err };
  });

  return res;
}