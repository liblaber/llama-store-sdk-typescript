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
      const scope = nock('http://localhost:8000').get('/llama/6199904496').reply(200, { data: {} });
      return sdk.llama.getLlamaById(6199904496).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').get('/llama/3865634788').reply(200, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').get('/llama/8891096269').reply(404, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById(8891096269)).rejects.toThrow();
    });
  });

  describe('test updateLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').put('/llama/1181153677').reply(200, { data: {} });
      return sdk.llama.updateLlama({}, 1181153677).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').put('/llama/4429459656').reply(200, { data: {} });
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').put('/llama/5014078563').reply(404, { data: {} });
      return expect(async () => await sdk.llama.updateLlama({}, 5014078563)).rejects.toThrow();
    });
  });

  describe('test deleteLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/2407481366')
        .reply(200, { data: {} });
      return sdk.llama.deleteLlama(2407481366).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/5482354949')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/4139487988')
        .reply(404, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama(4139487988)).rejects.toThrow();
    });
  });
});
