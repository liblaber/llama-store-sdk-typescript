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
        .get("/user/,%60*%5C%5CY&b?)%7Dcgrf3YwA%5BJpfnf8%60C%60?n%5DmY=-o:+%20!!099HJ&L2qIz%60$Hm(%5CdK+r;+!iwXo%7BJ46=o;.%60Uo1NWZh_=%5Cr%20h@%3Ed@c%25YEa%7B*tl6I(B8~%5E:*3+%5C.5cPYbE5ujUyIm1)Hd4h%5BUF)yq%5C%7DPASrBI-uZw%608(#oK4.B9p?hFdjGjX%25Bz6p%5Do%3EpMnaOi=fPmpw?!=I43%60$VJM;k%7C-a6UOgT@%3E~CcNa%5C%5Cg")
        .reply(200, {data: {}});
      return sdk.user.getUserByEmail(',`*\\Y&b?)}cgrf3YwA[Jpfnf8`C`?n]mY=-o:+ !!099HJ&L2qIz`$Hm(\"dK+r;+!iwXo{J46=o;.`Uo1NWZh_=\"r h@>d@c%YEa{*tl6I(B8~^:*3+\'.5cPYbE5ujUyIm1)Hd4h[UF)yq\'}PASrBI-uZw`8(#oK4.B9p?hFdjGjX%Bz6p]o>pMnaOi=fPmpw?!=I43`$VJM;k|-a6UOgT@>~CcNa\\g').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/user/%25hud~)5j%5C%5CO3)@@Ogdso,$;YM%5DK%5BuXvGK)o9s~:Wfk=oeoE%5Edco@l#%5C*J~DGe4%5C%5C-iXz%7CK+p%5B.ocW!%5C/%5C&lMeY%5BE61=XC%5E,??JGU-6EwC%5BY?a.hLmXkcX2Y/s%5C%5CP=E6f2%5Cjj1hgi6+W6lOS5XZY2J2)")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/user/%7BfD+E($@Fsq%3CicD#b7p,%7B)+bKMpOW@%7BT?~DSoUkQo%3C%3C;S=%5C)%5Bi3%20tS%25%5C%5CI.7!BiN0EuEW!;t.7o6h3dlE6HhmG%25tTX!T%5B%7C!yz%20lVqdt#qn%5B")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUserByEmail('{fD+E($@Fsq<icD#b7p,{)+bKMpOW@{T?~DSoUkQo<<;S=\")[i3 tS%\\I.7!BiN0EuEW!;t.7o6h3dlE6HhmG%tTX!T[|!yz lVqdt#qn[')).rejects.toThrow();
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