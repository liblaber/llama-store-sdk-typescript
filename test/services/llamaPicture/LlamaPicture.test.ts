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
        .get("/llama/2111065469/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.getLlamaPictureByLlamaId(2111065469).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/8102851340/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.getLlamaPictureByLlamaId()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/6984245127/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.getLlamaPictureByLlamaId(6984245127)).rejects.toThrow();
    });

  });

  describe("test createLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/1546306883/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.createLlamaPicture({},1546306883).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/1580492214/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.createLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama/8750510593/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.createLlamaPicture({},8750510593)).rejects.toThrow();
    });

  });

  describe("test updateLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/1912704033/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.updateLlamaPicture({},1912704033).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/5496581045/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/2068819355/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.updateLlamaPicture({},2068819355)).rejects.toThrow();
    });

  });

  describe("test deleteLlamaPicture", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/8846847346/picture")
        .reply(200, {data: {}});
      return sdk.llamaPicture.deleteLlamaPicture(8846847346).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/6217205618/picture")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/1821887475/picture")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llamaPicture.deleteLlamaPicture(1821887475)).rejects.toThrow();
    });

  });

});