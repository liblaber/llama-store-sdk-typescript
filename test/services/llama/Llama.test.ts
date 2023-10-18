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
      const scope = nock('http://localhost:8000').get('/llama/3291910280').reply(200, { data: {} });
      return sdk.llama.getLlamaById(3291910280).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').get('/llama/9400092570').reply(200, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').get('/llama/4189307276').reply(404, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById(4189307276)).rejects.toThrow();
    });
  });

  describe('test updateLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').put('/llama/9733050916').reply(200, { data: {} });
      return sdk.llama.updateLlama({}, 9733050916).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').put('/llama/6575292885').reply(200, { data: {} });
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').put('/llama/9893261768').reply(404, { data: {} });
      return expect(async () => await sdk.llama.updateLlama({}, 9893261768)).rejects.toThrow();
    });
  });

  describe('test deleteLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/8429641164')
        .reply(200, { data: {} });
      return sdk.llama.deleteLlama(8429641164).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/7608877379')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/8039274609')
        .reply(404, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama(8039274609)).rejects.toThrow();
    });
  });
});
