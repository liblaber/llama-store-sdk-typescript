import BaseService from '../../BaseService';

import { GetLlamasResponse } from './models/GetLlamasResponse';
import { Llama } from './models/Llama';
import { LlamaCreate } from './models/LlamaCreate';

import { serializePath } from '../../http/QuerySerializer';

export class LlamaService extends BaseService {
  /**
   * @summary Get Llamas
   * @description Get all the llamas.

   * @returns {Promise<GetLlamasResponse>} - The promise with the result
   */
  async getLlamas(): Promise<GetLlamasResponse> {
    const urlEndpoint = '/llama';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as GetLlamasResponse;
    return responseModel;
  }

  /**
   * @summary Create Llama
   * @description Create a new llama. Llama names must be unique.

   * @returns {Promise<Llama>} - The promise with the result
   */
  async createLlama(input: LlamaCreate): Promise<Llama> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/llama';
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
    if (llamaId === undefined) {
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank');
    }
    let urlEndpoint = '/llama/{llama_id}';
    urlEndpoint = urlEndpoint.replace(
      '{llama_id}',
      encodeURIComponent(serializePath('simple', false, llamaId, undefined)),
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
  async updateLlama(input: LlamaCreate, llamaId: number): Promise<Llama> {
    if (llamaId === undefined) {
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank');
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/llama/{llama_id}';
    urlEndpoint = urlEndpoint.replace(
      '{llama_id}',
      encodeURIComponent(serializePath('simple', false, llamaId, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.put(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
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
    if (llamaId === undefined) {
      throw new Error('The following parameter is required: llamaId, cannot be empty or blank');
    }
    let urlEndpoint = '/llama/{llama_id}';
    urlEndpoint = urlEndpoint.replace(
      '{llama_id}',
      encodeURIComponent(serializePath('simple', false, llamaId, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
