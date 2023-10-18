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
        .get('/llama/6875952440/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .getLlamaPictureByLlamaId(6875952440)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/4740760493/picture')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/4299326382/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(4299326382),
      ).rejects.toThrow();
    });
  });

  describe('test createLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/6678144265/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .createLlamaPicture({}, 6678144265)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/9074961696/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/9691666037/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.createLlamaPicture({}, 9691666037),
      ).rejects.toThrow();
    });
  });

  describe('test updateLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/5974015935/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .updateLlamaPicture({}, 5974015935)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/4038199668/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/9479849066/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.updateLlamaPicture({}, 9479849066),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/9825652383/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .deleteLlamaPicture(9825652383)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/1915394502/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/7865865135/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.deleteLlamaPicture(7865865135),
      ).rejects.toThrow();
    });
  });
});
