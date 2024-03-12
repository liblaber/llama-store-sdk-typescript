import nock from 'nock';

import { Llamastore } from '../../../src';

import { LlamaService } from '../../../src/services/llama/Llama';

describe("test LlamaService object", () => {
  it("should be an object", () => {
    expect(typeof LlamaService).toBe('function');
  });
});

describe("test Llama", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Llamastore({});

    nock.cleanAll();

  });

  describe("test getLlamas", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama")
        .reply(200, {data: {}});
      return sdk.llama.getLlamas().then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test createLlama", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .post("/llama")
        .reply(200, {data: {}});
      return sdk.llama.createLlama({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getLlamaById", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/2026757078")
        .reply(200, {data: {}});
      return sdk.llama.getLlamaById(2026757078).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/7272172897")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/9482023476")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.getLlamaById(9482023476)).rejects.toThrow();
    });

  });

  describe("test updateLlama", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/7628569262")
        .reply(200, {data: {}});
      return sdk.llama.updateLlama({},7628569262).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/9579086449")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/8439334868")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.updateLlama({},8439334868)).rejects.toThrow();
    });

  });

  describe("test deleteLlama", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/1394893762")
        .reply(200, {data: {}});
      return sdk.llama.deleteLlama(1394893762).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/2756111967")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/8046730799")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.deleteLlama(8046730799)).rejects.toThrow();
    });

  });

});