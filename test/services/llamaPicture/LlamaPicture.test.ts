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
        .get("/llama/8047104954/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.getLlamaPictureByLlamaId(8047104954).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/3834904949/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.getLlamaPictureByLlamaId()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/3053858859/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(3053858859)).rejects.toThrow();
    });

  });

  describe("test createLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/7156579465/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.createLlamaPicture({},7156579465).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/4286527503/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/3881489471/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.createLlamaPicture({},3881489471)).rejects.toThrow();
    });

  });

  describe("test updateLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/7663487073/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.updateLlamaPicture({},7663487073).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/3311359459/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/4384675649/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture({},4384675649)).rejects.toThrow();
    });

  });

  describe("test deleteLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/4833716348/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.deleteLlamaPicture(4833716348).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/7634481681/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/4710582209/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture(4710582209)).rejects.toThrow();
    });

  });

});