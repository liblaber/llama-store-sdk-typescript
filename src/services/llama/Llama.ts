import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { GetLlamasResponse } from './models/GetLlamasResponse';
import { Llama } from './models/Llama';
import { CreateLlamaRequest } from './models/CreateLlamaRequest';
import { UpdateLlamaRequest } from './models/UpdateLlamaRequest';

import { serializePath } from '../../http/QuerySerializer';

const hook: CustomHook = new CustomHook();

export class LlamaService extends BaseService {

  /**
   * @summary Get Llamas
   * @description Get all the llamas.

   * @returns {Promise<GetLlamasResponse>} - The promise with the result
   */
  async getLlamas(): Promise<GetLlamasResponse> {

    const headers: { [key: string]: string } = {};
    const urlEndpoint = '/llama';
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
    const responseModel = response.data as GetLlamasResponse;
    return responseModel;
  }

  /**
   * @summary Create Llama
   * @description Create a new llama. Llama names must be unique.

   * @returns {Promise<Llama>} - The promise with the result
   */
  async createLlama(input: CreateLlamaRequest): Promise<Llama> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/llama';
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
    const responseModel = response.data as Llama;
    return responseModel;
  }







  /**
   * @summary Get Llama
   * @description Get a llama by ID.

   * @param llamaId The llama's ID
   * @returns {Promise<Llama>} - The promise with the result
   */
  async getLlamaById(llamaId: number): Promise<Llama> {
    if( llamaId === undefined ){
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {};
    let urlEndpoint = '/llama/{llama_id}';
    urlEndpoint = urlEndpoint.replace('{llama_id}', serializePath('simple', false,  llamaId, undefined));
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
    const responseModel = response.data as Llama;
    return responseModel;
  }


  /**
   * @summary Update Llama
   * @description Update a llama. If the llama does not exist, create it.

When updating a llama, the llama name must be unique. If the llama name is not unique, a 409 will be returned.

   * @param llamaId The llama's ID
   * @returns {Promise<Llama>} - The promise with the result
   */
  async updateLlama(input: UpdateLlamaRequest, llamaId: number): Promise<Llama> {
    if( llamaId === undefined ){
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/llama/{llama_id}';
    urlEndpoint = urlEndpoint.replace('{llama_id}', serializePath('simple', false,  llamaId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const request:Request = { method: 'PUT', url: finalUrl, input, headers };
    await hook.beforeRequest(request);
    const response:any = await this.httpClient.put(
      request.url,
      request.input,
      {
      ...this.getAuthorizationHeader(),
      ...request.headers,
    }, true);
    await hook.afterResponse({ method: 'PUT', url: request.url, input: request.input, headers: request.headers }, { data: response.data, headers: response.headers, status: response.status });
    const responseModel = response.data as Llama;
    return responseModel;
  }


  /**
   * @summary Delete Llama
   * @description Delete a llama. If the llama does not exist, this will return a 404.

   * @param llamaId The llama's ID
   * @returns {Promise<any>} - The promise with the result
   */
  async deleteLlama(llamaId: number): Promise<any> {
    if( llamaId === undefined ){
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {};
    let urlEndpoint = '/llama/{llama_id}';
    urlEndpoint = urlEndpoint.replace('{llama_id}', serializePath('simple', false,  llamaId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const request:Request = { method: 'DELETE', url: finalUrl, input: {}, headers };
    await hook.beforeRequest(request);
    const response:any = await this.httpClient.delete(
      request.url,
      request.input,
      {
      ...this.getAuthorizationHeader(),
      ...request.headers,
    }, true);
    await hook.afterResponse({ method: 'DELETE', url: request.url, headers: request.headers }, { data: response.data, headers: response.headers, status: response.status });
    const responseModel = response.data;
    return responseModel;
  }





}