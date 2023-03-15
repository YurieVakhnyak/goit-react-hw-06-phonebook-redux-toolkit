export const serializeMiddleware = store => next => action => {
  const result = next(action);
  const state = store.getState();

  // Serialize any non-primitive values in the state
  const serializedState = JSON.stringify(state, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      return value;
    }
    return typeof value;
  });

  // Update the storage with the serialized state
  localStorage.setItem('state', serializedState);

  return result;
};
