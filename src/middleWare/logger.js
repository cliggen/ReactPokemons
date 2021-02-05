const logger = (store) => next => action => {
  const { type, ...params } = action;
  // eslint-disable-next-line no-console
  console.log('[Middleware] Dispatching: ', type);
  // eslint-disable-next-line no-console
  console.log('[Middleware] Params: ', params);
  // eslint-disable-next-line no-console
  console.log('[Middleware] State after dispatching: ', store.getState());
  const result = next(action);
  return result;
};

export default logger;
