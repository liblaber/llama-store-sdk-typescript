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
          '/user/VB83;WCkz4%7B@;o0/E%5C%5C%5CR;;VK#fqwlB9POPIms.5a%25tuy0C%5D:8:88p%5D3d%5CeBuY8%7Cv!BTqXv~%3E!LvluXoU3T-F@6?z%7DH9IJ%5C-M%5CYqe%5B!%5CrJR1)1Z!trKoWUX7YD?',
        )
        .reply(200, { data: {} });
      return sdk.user
        .getUserByEmail(
          "VB83;WCkz4{@;o0/E\\'R;;VK#fqwlB9POPIms.5a%tuy0C]:8:88p]3d'eBuY8|v!BTqXv~>!LvluXoU3T-F@6?z}H9IJ'-M\"Yqe[!\"rJR1)1Z!trKoWUX7YD?",
        )
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/;%209W%60I%5C%5Cepd&s%5C5AlkK@3S_.%5EQQ)E1%5Ceb$O/V?gC8%7BBrtcDT@J.Z4_%5EmGBVyx%7Bwj3!?W)iOZr%7C:fF%7Be',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/OFBQ%5D%7BCBPC*:b%7D%5E373/3%5C%5CjnF$MqhnIx9o_%20VOMvUS@v+2KKl%605%7C%5D%5E6r0%5Cx?4;onXR%20z(%5C@C%5By:0si$7JH=PL%20LN%3Ce_Qcj@%7B%7BGVe~AKN,P.%3C)f1B1G%25E=_u9%25o;~3g%3E,86%60K/eU)vzU%7BPW=_An3FYtv+9/@%7D0A',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.user.getUserByEmail(
            "OFBQ]{CBPC*:b}^373/3\\jnF$MqhnIx9o_ VOMvUS@v+2KKl`5|]^6r0'x?4;onXR z('@C[y:0si$7JH=PL LN<e_Qcj@{{GVe~AKN,P.<)f1B1G%E=_u9%o;~3g>,86`K/eU)vzU{PW=_An3FYtv+9/@}0A",
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
