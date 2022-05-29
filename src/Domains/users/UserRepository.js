/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
class UserRepository {
  async addUser(registerUser) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyAvailableUsername(username) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = UserRepository;
