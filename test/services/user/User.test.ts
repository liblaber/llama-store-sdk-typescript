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
        .get("/user/D4%5C%5C59:)%3C1B%5Cp%5Dkiyan=@%60:Inl@CH,DMF:.Oc@=&Q_.pCwov%3EN&~%25V7G%5C%5CNpmmy;Z%3ElFvJ%3E%25:(.S:$ajVKLd_@9HZ:T/Zt%5C%5C%5C%5Ci~H.%7D%3Cq$oBI%3C%5EUA%7B7m5j%20@I1f%7C%7Cx*BI&eg%5CZH%7C%5ED")
        .reply(200, {data: {}});
      return sdk.user.getUserByEmail('D4\\59:)<1B\'p]kiyan=@`:Inl@CH,DMF:.Oc@=&Q_.pCwov>N&~%V7G\\Npmmy;Z>lFvJ>%:(.S:$ajVKLd_@9HZ:T/Zt\\\\i~H.}<q$oBI<^UA{7m5j @I1f||x*BI&eg\'ZH|^D').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("http://localhost:8080")
        .get("/user/5N=3Tz-Mc(7++U,%7CX&8%5Dqc%5Dm;BU@ux?%5E@!59pUG?-%5DXEwQ.-j%7D%5E:$PA8a*6Iriw+IyYAG0u?4.P%7D;%5D5?%5C%5CBW%5D)")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("http://localhost:8080")
        .get("/user/uce+5al&r~%7BzXn_+%20%3Cf&nGC/J1o;3dXQ;v!7%7D%3E?P%5E%7CU=--j)9@URs&cP%25Kx%5Cq%5Eos:sIn#7%20V,4R%5E/sOB6JzlufO%25c8.Hrm,-W=t%7D%20V5%25fY)@%5DS5b%5EG=.~zG%5E")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUserByEmail('uce+5al&r~{zXn_+ <f&nGC/J1o;3dXQ;v!7}>?P^|U=--j)9@URs&cP%Kx\'q^os:sIn#7 V,4R^/sOB6JzlufO%c8.Hrm,-W=t} V5%fY)@]S5b^G=.~zG^')).rejects.toThrow();
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