/* eslint-disable */
/* eslint linebreak-style: ["error", "windows"] */

const ClientError = require('../ClientError');

describe('ClientError', () => {
  it('Should throw error when directly use it', () => {
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});
