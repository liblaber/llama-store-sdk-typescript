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
        .get("/llama/5928581729")
        .reply(200, {data: {}});
      return sdk.llama.getLlamaById(5928581729).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/6078752401")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/3032989737")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.getLlamaById(3032989737)).rejects.toThrow();
    });

  });

  describe("test updateLlama", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/5604917698")
        .reply(200, {data: {}});
      return sdk.llama.updateLlama({},5604917698).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/9624787388")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/7302437403")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.updateLlama({},7302437403)).rejects.toThrow();
    });

  });

  describe("test deleteLlama", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/3735517756")
        .reply(200, {data: {}});
      return sdk.llama.deleteLlama(3735517756).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/6632137630")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/2757079600")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.deleteLlama(2757079600)).rejects.toThrow();
    });

  });

});