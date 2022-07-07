export const createStore = (initialState, reducer) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;

  const dispatch = (action) => {
    currentState = reducer(currentState, action);

    listeners.forEach((listener) => listener());

    return action;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  return { subscribe, dispatch, getState };
};
