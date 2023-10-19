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
        .get('/llama/8619176539/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .getLlamaPictureByLlamaId(8619176539)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/5519490462/picture')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/4413261293/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(4413261293),
      ).rejects.toThrow();
    });
  });

  describe('test createLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/7214670547/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .createLlamaPicture({}, 7214670547)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/1645572470/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/8657513937/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.createLlamaPicture({}, 8657513937),
      ).rejects.toThrow();
    });
  });

  describe('test updateLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/1233744889/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .updateLlamaPicture({}, 1233744889)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/3036516758/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/9056841930/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.updateLlamaPicture({}, 9056841930),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/8524038790/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .deleteLlamaPicture(8524038790)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/3650847635/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/6470755899/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.deleteLlamaPicture(6470755899),
      ).rejects.toThrow();
    });
  });
});
