import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { LlamaId } from './models/LlamaId';

import { serializePath } from '../../http/QuerySerializer';

const hook: CustomHook = new CustomHook();

export class LlamaPictureService extends BaseService {

  /**
   * @summary Get Llama Picture
   * @description Get a llama's picture by the llama ID. Pictures are in PNG format.

   * @param llamaId The ID of the llama to get the picture for
   * @returns {Promise<any>} - The promise with the result
   */
  async getLlamaPictureByLlamaId(llamaId: number): Promise<any> {
    if( llamaId === undefined ){
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {};
    let urlEndpoint = '/llama/{llama_id}/picture';
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
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Create Llama Picture
   * @description Create a picture for a llama. The picture is sent as a PNG as binary data in the body of the request.

   * @param llamaId The ID of the llama that this picture is for
   * @returns {Promise<LlamaId>} - The promise with the result
   */
  async createLlamaPicture(input: any, llamaId: number): Promise<LlamaId> {
    if( llamaId === undefined ){
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'image/png'};
    let urlEndpoint = '/llama/{llama_id}/picture';
    urlEndpoint = urlEndpoint.replace('{llama_id}', serializePath('simple', false,  llamaId, undefined));
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
    const responseModel = response.data as LlamaId;
    return responseModel;
  }

  /**
   * @summary Update Llama Picture
   * @description Update a picture for a llama. The picture is sent as a PNG as binary data in the body of the request.

If the llama does not have a picture, one will be created. If the llama already has a picture,
 it will be overwritten.
If the llama does not exist, a 404 will be returned.

   * @param llamaId The ID of the llama that this picture is for
   * @returns {Promise<LlamaId>} - The promise with the result
   */
  async updateLlamaPicture(input: any, llamaId: number): Promise<LlamaId> {
    if( llamaId === undefined ){
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'image/png'};
    let urlEndpoint = '/llama/{llama_id}/picture';
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
    const responseModel = response.data as LlamaId;
    return responseModel;
  }


  /**
   * @summary Delete Llama Picture
   * @description Delete a llama's picture by ID.

   * @param llamaId The ID of the llama to delete the picture for
   * @returns {Promise<any>} - The promise with the result
   */
  async deleteLlamaPicture(llamaId: number): Promise<any> {
    if( llamaId === undefined ){
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {};
    let urlEndpoint = '/llama/{llama_id}/picture';
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