import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { User } from './models/User';
import { RegisterUserRequest } from './models/RegisterUserRequest';

import { serializePath } from '../../http/QuerySerializer';

const hook: CustomHook = new CustomHook();

export class UserService extends BaseService {

  /**
   * @summary Get User By Email
   * @description Get a user by email.

This endpoint will return a 404 if the user does not exist. Otherwise, it will return a 200.

   * @param email The user's email address
   * @returns {Promise<User>} - The promise with the result
   */
  async getUserByEmail(email: string): Promise<User> {
    if( email === undefined ){
      throw new Error('The following parameter is required: email, cannot be empty or blank')
    }
const validatedEmail = BaseService.patternMatching(email, '.+\\@.+\\..+', 'email');
    const headers: { [key: string]: string } = {};
    let urlEndpoint = '/user/{email}';
    urlEndpoint = urlEndpoint.replace('{email}', serializePath('simple', false,  validatedEmail, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const request:Request = { method: 'GET', url: finalUrl, headers };
    await hook.beforeRequest(request);
    const response:any = await this.httpClient.get(
      request.url,
      {},
      {
      ...this.getAuthorizationHeader(),
      ...request.headers,
    }, true);
    await hook.afterResponse({ method: 'GET', url: request.url, headers: request.headers }, { data: response.data, headers: response.headers, status: response.status });
    const responseModel = response.data as User;
    return responseModel;
  }









  /**
   * @summary Register User
   * @description Register a new user.

This endpoint will return a 400 if the user already exists. Otherwise, it will return a 201.

   * @returns {Promise<User>} - The promise with the result
   */
  async registerUser(input: RegisterUserRequest): Promise<User> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/user';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const request:Request = { method: 'POST', url: finalUrl, input, headers };
    await hook.beforeRequest(request);
    const response:any = await this.httpClient.post(
      request.url,
      request.input,
      {
      ...this.getAuthorizationHeader(),
      ...request.headers,
    }, true);
    await hook.afterResponse({ method: 'POST', url: request.url, input: request.input, headers: request.headers }, { data: response.data, headers: response.headers, status: response.status });
    const responseModel = response.data as User;
    return responseModel;
  }








}