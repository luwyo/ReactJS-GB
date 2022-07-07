import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (roomId, message) => {
  return {
    type: SEND_MESSAGE,
    payload: { roomId, message },
    meta: { delay: 10 },
  };
};

export const deleteMessage = (roomId, messageId) => {
  return { type: DELETE_MESSAGE, payload: { roomId, messageId } };
};

// @TODO сделать удаление сообщений
// @TODO сделать редактирование сообщений
