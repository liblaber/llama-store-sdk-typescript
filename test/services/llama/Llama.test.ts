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
        .get("/llama/9737495154")
        .reply(200, {data: {}});
      return sdk.llama.getLlamaById(9737495154).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/4794206406")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.getLlamaById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/llama/7282280885")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.getLlamaById(7282280885)).rejects.toThrow();
    });

  });

  describe("test updateLlama", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/6936414425")
        .reply(200, {data: {}});
      return sdk.llama.updateLlama({},6936414425).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/1224751929")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.updateLlama()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .put("/llama/2395908246")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.updateLlama({},2395908246)).rejects.toThrow();
    });

  });

  describe("test deleteLlama", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/4945206931")
        .reply(200, {data: {}});
      return sdk.llama.deleteLlama(4945206931).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/6872163488")
        .reply(200, {data: {}});
      return expect(async () => await sdk.llama.deleteLlama()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .delete("/llama/1268195435")
        .reply(404, {data: {}});
      return expect(async () => await sdk.llama.deleteLlama(1268195435)).rejects.toThrow();
    });

  });

});