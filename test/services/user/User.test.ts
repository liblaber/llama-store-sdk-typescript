import nock from 'nock';

import { Llamastore } from '../../../src';

import { UserService } from '../../../src/services/user/User';

describe("test UserService object", () => {
  it("should be an object", () => {
    expect(typeof UserService).toBe('function');
  });
});

describe("test User", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Llamastore({});

    nock.cleanAll();

  });

  describe("test getUserByEmail", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .get("/user/J%5CudP7E+C3~sJ~R#f%7B/+4%25Bvgu2S%209l%20@$tE@eW;,JXV&%5C7@E%7B4Cn-,UY~A_FvKuXtwd_,VTr:zW1V&0%20fmFb%5B%7C~NRN+l7zZ%7BaW@ol/yv=_%60HMk%20%5E@B$AGv/As2F2hRR%7C%25tdIhHG&P.(%25$%20k+%5D?+,A")
        .reply(200, {data: {}});
      return sdk.user.getUserByEmail('J\'udP7E+C3~sJ~R#f{/+4%Bvgu2S 9l @$tE@eW;,JXV&\'7@E{4Cn-,UY~A_FvKuXtwd_,VTr:zW1V&0 fmFb[|~NRN+l7zZ{aW@ol/yv=_`HMk ^@B$AGv/As2F2hRR|%tdIhHG&P.(%$ k+]?+,A').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/user/K_j%60c!i%5Cv,YAkPN%60RvY5)BuU46a+L%7C%5DR#Q~1e7gto3%25%25QQS;@1QxxIV%5DcK7i)m%5B%7Cb%60Pnz#S~V,A?10RC*B%3E4dqKe;%7D%5C%25dK%5EqO6AhX60.@v%60$qqi%5D92I%7B.P-yYXDIbc%3E;tWQRH5zC%7DA9E=w2SPA5%7D7%20.nw%5ElH%3C/&c,2,O@%5Czlpt&J%5BtrF&)Ge%5CO_.g-~o%7C$y:Ujjw8.So7E~)l8?%3ELT%7B-*%5C#Sb4%25=iX)WQ")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/user/;P@%5CqMa?P+O+XvX6EnOTGuXUx%7Cw9K!Bh3o6k%5C%5C4I/E0;.Y%7BWMhhUSc90%25!%60Sv%7BeyYw%5C%5C=BAjB.%5ChVm%3C%60%7CE$V8MC")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUserByEmail(';P@\'qMa?P+O+XvX6EnOTGuXUx|w9K!Bh3o6k\\4I/E0;.Y{WMhhUSc90%!`Sv{eyYw\\=BAjB.\"hVm<`|E$V8MC')).rejects.toThrow();
    });

  });

  describe("test registerUser", () => {

    test("test api call", () => {
      const scope = nock("http://localhost:8080")
        .post("/user")
        .reply(200, {data: {}});
      return sdk.user.registerUser({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});