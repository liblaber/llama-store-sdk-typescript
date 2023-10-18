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
      const scope = nock('http://localhost:8000').get('/llama/6401903356').reply(200, { data: {} });
      return sdk.llama.getLlamaById(6401903356).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').get('/llama/6193245804').reply(200, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').get('/llama/5393515173').reply(404, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById(5393515173)).rejects.toThrow();
    });
  });

  describe('test updateLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').put('/llama/3918029726').reply(200, { data: {} });
      return sdk.llama.updateLlama({}, 3918029726).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').put('/llama/5918881976').reply(200, { data: {} });
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').put('/llama/8203564368').reply(404, { data: {} });
      return expect(async () => await sdk.llama.updateLlama({}, 8203564368)).rejects.toThrow();
    });
  });

  describe('test deleteLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/5518613176')
        .reply(200, { data: {} });
      return sdk.llama.deleteLlama(5518613176).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/9453584247')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/5506119999')
        .reply(404, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama(5506119999)).rejects.toThrow();
    });
  });
});
