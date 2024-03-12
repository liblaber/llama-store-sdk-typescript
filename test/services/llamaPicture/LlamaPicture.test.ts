import nock from 'nock';

import { Llamastore } from '../../../src';

import { LlamaPictureService } from '../../../src/services/llamaPicture/LlamaPicture';

describe("test LlamaPictureService object", () => {
  it("should be an object", () => {
    expect(typeof LlamaPictureService).toBe('function');
  });
});

describe("test LlamaPicture", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Llamastore({});

    nock.cleanAll();

  });

  describe("test getLlamaPictureByLlamaId", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/1422128867/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.getLlamaPictureByLlamaId(1422128867).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/1446364894/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.getLlamaPictureByLlamaId()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/4316885417/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(4316885417)).rejects.toThrow();
    });

  });

  describe("test createLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/9978439564/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.createLlamaPicture({},9978439564).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/3750591386/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/7462769068/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.createLlamaPicture({},7462769068)).rejects.toThrow();
    });

  });

  describe("test updateLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/6098522312/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.updateLlamaPicture({},6098522312).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/8443586579/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/8845900985/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture({},8845900985)).rejects.toThrow();
    });

  });

  describe("test deleteLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/6523675889/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.deleteLlamaPicture(6523675889).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/6819700200/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/8547347271/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture(8547347271)).rejects.toThrow();
    });

  });

});