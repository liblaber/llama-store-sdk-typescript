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
        .get('/llama/8919182623/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .getLlamaPictureByLlamaId(8919182623)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/8047331343/picture')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/8043610081/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(8043610081),
      ).rejects.toThrow();
    });
  });

  describe('test createLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/4406055521/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .createLlamaPicture({}, 4406055521)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/2954549659/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/9839967998/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.createLlamaPicture({}, 9839967998),
      ).rejects.toThrow();
    });
  });

  describe('test updateLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/1458171911/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .updateLlamaPicture({}, 1458171911)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/4623042543/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/1602305962/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.updateLlamaPicture({}, 1602305962),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/4804998249/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .deleteLlamaPicture(4804998249)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/2528831507/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/4572731612/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.deleteLlamaPicture(4572731612),
      ).rejects.toThrow();
    });
  });
});
