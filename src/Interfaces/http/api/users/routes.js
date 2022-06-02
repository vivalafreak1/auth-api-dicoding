/* eslint linebreak-style: ["error", "windows"] */
const routes = (handler) => ([
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
  },
]);

module.exports = routes;
