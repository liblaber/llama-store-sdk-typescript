import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { ApiToken } from './models/ApiToken';
import { CreateApiTokenRequest } from './models/CreateApiTokenRequest';



const hook: CustomHook = new CustomHook();

export class TokenService extends BaseService {


  /**
   * @summary Create Api Token
   * @description Create an API token for a user. These tokens expire after 30 minutes.

Once you have this token, you need to pass it to other endpoints in the Authorization header as a Bearer token.

   * @returns {Promise<ApiToken>} - The promise with the result
   */
  async createApiToken(input: CreateApiTokenRequest): Promise<ApiToken> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/token';
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
    const responseModel = response.data as ApiToken;
    return responseModel;
  }








}