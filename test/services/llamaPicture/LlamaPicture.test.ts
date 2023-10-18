import nock from 'nock';

import { Llamastore } from '../../../src';

import { LlamaPictureService } from '../../../src/services/llamaPicture/LlamaPicture';

describe('test LlamaPictureService object', () => {
  it('should be an object', () => {
    expect(typeof LlamaPictureService).toBe('function');
  });
});

describe('test LlamaPicture', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Llamastore({});

    nock.cleanAll();
  });

  describe('test getLlamaPictureByLlamaId', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/4885182072/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .getLlamaPictureByLlamaId(4885182072)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/9349247556/picture')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/7038433807/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(7038433807),
      ).rejects.toThrow();
    });
  });

  describe('test createLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/2150110643/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .createLlamaPicture({}, 2150110643)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/9832230934/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/6399688411/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.createLlamaPicture({}, 6399688411),
      ).rejects.toThrow();
    });
  });

  describe('test updateLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/3936499573/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .updateLlamaPicture({}, 3936499573)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/3117353232/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/5043580460/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.updateLlamaPicture({}, 5043580460),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/9344103162/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .deleteLlamaPicture(9344103162)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/2520146136/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/1949165271/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.deleteLlamaPicture(1949165271),
      ).rejects.toThrow();
    });
  });
});
