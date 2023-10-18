import BaseService from '../../BaseService';

import { User } from './models/User';
import { UserRegistration } from './models/UserRegistration';

import { serializePath } from '../../http/QuerySerializer';

export class UserService extends BaseService {
  /**
   * @summary Get User By Email
   * @description Get a user by email.

This endpoint will return a 404 if the user does not exist. Otherwise, it will return a 200.

   * @param email The user's email address
   * @returns {Promise<User>} - The promise with the result
   */
  async getUserByEmail(email: string): Promise<User> {
    if (email === undefined) {
      throw new Error('The following parameter is required: email, cannot be empty or blank');
    }
    const validatedEmail = BaseService.patternMatching(email, '.+\\@.+\\..+', 'email');
    let urlEndpoint = '/user/{email}';
    urlEndpoint = urlEndpoint.replace(
      '{email}',
      encodeURIComponent(serializePath('simple', false, validatedEmail, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as User;
    return responseModel;
  }

  /**
   * @summary Register User
   * @description Register a new user.

This endpoint will return a 400 if the user already exists. Otherwise, it will return a 201.

   * @returns {Promise<User>} - The promise with the result
   */
  async registerUser(input: UserRegistration): Promise<User> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/user';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as User;
    return responseModel;
  }
}
