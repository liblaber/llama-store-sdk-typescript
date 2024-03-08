import nock from 'nock';

import { Llamastore } from '../../../src';

import { TokenService } from '../../../src/services/token/Token';

describe("test TokenService object", () => {
  it("should be an object", () => {
    expect(typeof TokenService).toBe('function');
  });
});

describe("test Token", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Llamastore({});

    nock.cleanAll();

  });

  describe("test createApiToken", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .post("/token")
        .reply(200, {data: {}});
      return sdk.token.createApiToken({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});