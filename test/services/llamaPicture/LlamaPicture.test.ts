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
        .get('/llama/9730013206/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .getLlamaPictureByLlamaId(9730013206)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/4726358673/picture')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get('/llama/5073223570/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(5073223570),
      ).rejects.toThrow();
    });
  });

  describe('test createLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/7015190385/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .createLlamaPicture({}, 7015190385)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/6136321088/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .post('/llama/8610086060/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.createLlamaPicture({}, 8610086060),
      ).rejects.toThrow();
    });
  });

  describe('test updateLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/2108004555/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .updateLlamaPicture({}, 2108004555)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/3188185820/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .put('/llama/9693056432/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.updateLlamaPicture({}, 9693056432),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLlamaPicture', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/9958351870/picture')
        .reply(200, { data: {} });
      return sdk.llamaPicture
        .deleteLlamaPicture(9958351870)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/1178688068/picture')
        .reply(200, { data: {} });
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .delete('/llama/2652825606/picture')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.llamaPicture.deleteLlamaPicture(2652825606),
      ).rejects.toThrow();
    });
  });
});
