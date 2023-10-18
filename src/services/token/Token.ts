import BaseService from '../../BaseService';

import { ApiToken } from './models/ApiToken';
import { ApiTokenRequest } from './models/ApiTokenRequest';

export class TokenService extends BaseService {
  /**
   * @summary Create Api Token
   * @description Create an API token for a user. These tokens expire after 30 minutes.

Once you have this token, you need to pass it to other endpoints in the Authorization header as a Bearer token.

   * @returns {Promise<ApiToken>} - The promise with the result
   */
  async createApiToken(input: ApiTokenRequest): Promise<ApiToken> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/token';
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
    const responseModel = response.data as ApiToken;
    return responseModel;
  }
}
