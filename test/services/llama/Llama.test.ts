import nock from 'nock';

import { Llamastore } from '../../../src';

import { LlamaService } from '../../../src/services/llama/Llama';

describe('test LlamaService object', () => {
  it('should be an object', () => {
    expect(typeof LlamaService).toBe('function');
  });
});

describe('test Llama', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Llamastore({});

    nock.cleanAll();
  });

  describe('test getLlamas', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').get('/llama').reply(200, { data: {} });
      return sdk.llama.getLlamas().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test createLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').post('/llama').reply(200, { data: {} });
      return sdk.llama.createLlama({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getLlamaById', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').get('/llama/3082961913').reply(200, { data: {} });
      return sdk.llama.getLlamaById(3082961913).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').get('/llama/8357115569').reply(200, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').get('/llama/2554123629').reply(404, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById(2554123629)).rejects.toThrow();
    });
  });

  describe('test updateLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').put('/llama/4093906234').reply(200, { data: {} });
      return sdk.llama.updateLlama({}, 4093906234).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').put('/llama/7849342604').reply(200, { data: {} });
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').put('/llama/3308079717').reply(404, { data: {} });
      return expect(async () => await sdk.llama.updateLlama({}, 3308079717)).rejects.toThrow();
    });
  });

  describe('test deleteLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/2687793857')
        .reply(200, { data: {} });
      return sdk.llama.deleteLlama(2687793857).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/8605366062')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/2511697224')
        .reply(404, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama(2511697224)).rejects.toThrow();
    });
  });
});
