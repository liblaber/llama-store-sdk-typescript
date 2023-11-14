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
      const scope = nock('http://localhost:8000').get('/llama/9104072747').reply(200, { data: {} });
      return sdk.llama.getLlamaById(9104072747).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').get('/llama/7152444216').reply(200, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').get('/llama/4353438967').reply(404, { data: {} });
      return expect(async () => await sdk.llama.getLlamaById(4353438967)).rejects.toThrow();
    });
  });

  describe('test updateLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').put('/llama/4266272255').reply(200, { data: {} });
      return sdk.llama.updateLlama({}, 4266272255).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000').put('/llama/4550487162').reply(200, { data: {} });
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000').put('/llama/8253743710').reply(404, { data: {} });
      return expect(async () => await sdk.llama.updateLlama({}, 8253743710)).rejects.toThrow();
    });
  });

  describe('test deleteLlama', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/9022216147')
        .reply(200, { data: {} });
      return sdk.llama.deleteLlama(9022216147).then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/9620873491')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/1133835060')
        .reply(404, { data: {} });
      return expect(async () => await sdk.llama.deleteLlama(1133835060)).rejects.toThrow();
    });
  });
});
