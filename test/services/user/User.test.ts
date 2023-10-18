import nock from 'nock';

import { Llamastore } from '../../../src';

import { UserService } from '../../../src/services/user/User';

describe('test UserService object', () => {
  it('should be an object', () => {
    expect(typeof UserService).toBe('function');
  });
});

describe('test User', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Llamastore({});

    nock.cleanAll();
  });

  describe('test getUserByEmail', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/ZGgAp%3E:-%5EaR!@SAT%25p%5E0%5EOK~(/E6j?YXci.pG2ZmChEgSETLA7es6+&S%5Bf2UrzbS%5D%7CFLtV8%7C)N%3E1%60Ap9iw@En*r1U0@B%5CdUz)Y:&B7dEp%5C%5CW.uJ/user/XpD%3CApbvpty_a.%20RX+A%7B_E=)%5B%20%7C%5Ckpkz',
        )
        .reply(200, { data: {} });
      return sdk.user
        .getUserByEmail(
          "ZGgAp>:-^aR!@SAT%p^0^OK~(/E6j?YXci.pG2ZmChEgSETLA7es6+&S[f2UrzbS]|FLtV8|)N>1`Ap9iw@En*r1U0@B'dUz)Y:&B7dEp\\W.uJ$`XpD<Apbvpty_a. RX+A{_E=)[ |'kpkz",
        )
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/JCy2#1rP%7D?i@o?%60ilO%5B,%604-Hfk-55p7%7B%3CHHn2::&Z39;q%3E%7DQxuBI.O(yi~!3(E=.gdQCqAJ2!%5Bj!XDi.Ouril%5D$:s6SC7%7C7mbs7kIk6YWk1pks%5E6?U%7CAYd4rT_$%20H%7B%5Cw%3C%5COeL%7BTQV;%5C%5C%5CH,D:*zQ0%5CWYm6&#',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user//S:jg%5C%5C%5EPBZ7%7CG%7D_T-9%20PWuNqp;:@%201S4Q%5B@%5D@4c_t%5C8B32u;F6@75KTjLMCP%25=Pa3%20:5%7Dr!h&%5CiH_UoX;&KHhq2@Btt%3Ea9;NZi8xNDYw.f_a%5BEDIy.&b%5BToU1kqcqf0&E%5C%5E',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.user.getUserByEmail(
            "/S:jg\\^PBZ7|G}_T-9 PWuNqp;:@ 1S4Q[@]@4c_t'8B32u;F6@75KTjLMCP%=Pa3 :5}r!h&'iH_UoX;&KHhq2@Btt>a9;NZi8xNDYw.f_a[EDIy.&b[ToU1kqcqf0&E'^",
          ),
      ).rejects.toThrow();
    });
  });

  describe('test registerUser', () => {
    test('test api call', () => {
      const scope = nock('http://localhost:8000').post('/user').reply(200, { data: {} });
      return sdk.user.registerUser({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
