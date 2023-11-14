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
          '/user/:$@#%60K%20%60s5:SUvz:%5B,l+FWhFhKE%5C~zco%20%5CcR*X=b%5Ck!H*x$%3E!ia+%5DH7%7CP%3CvPu7%3Cc%203%5EeRQJ_%20rdnZL5%7DUh%3CH&V.Gxfm%20YinPnBN',
        )
        .reply(200, { data: {} });
      return sdk.user
        .getUserByEmail(
          ':$@#`K `s5:SUvz:[,l+FWhFhKE"~zco "cR*X=b"k!H*x$>!ia+]H7|P<vPu7<c 3^eRQJ_ rdnZL5}Uh<H&V.Gxfm YinPnBN',
        )
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/yeuJ=$7*(,Y%5C%3CrR+(;%25Im5%3EF:r@S%3C/9%3E+GS=%7B8JO*%3EwC3a.XBAb!RyhK%25sHW%5Ex)J%7B%3Ebr%5E',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/M7s1Y.xpe$6J~*LP%5C%3EEl)$8M-W5r%3CZp*dQ8Z)z=l&FqRmv*@ga.0gHo86F3)Y,P%5E9RB3b/H;%20%5B!*s@s#%7DO?%5DG_6k%25DiQQUnVO:6~%5C%25emRk5%5E~Fi&3HT.4y%5DMjRz%7B:HUbekYs%5C%5C8gCB%5C%5CRBCbgDm-?%5CRT%3Ez;SVzH%7CrS1%5B%5D%5Eqz=%5Cz.=p-GC%3EO%5CRr%25#fcY13%7DL.v*&-I/+A3&',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.user.getUserByEmail(
            "M7s1Y.xpe$6J~*LP\">El)$8M-W5r<Zp*dQ8Z)z=l&FqRmv*@ga.0gHo86F3)Y,P^9RB3b/H; [!*s@s#}O?]G_6k%DiQQUnVO:6~'%emRk5^~Fi&3HT.4y]MjRz{:HUbekYs\\8gCB\\RBCbgDm-?\"RT>z;SVzH|rS1[]^qz='z.=p-GC>O'Rr%#fcY13}L.v*&-I/+A3&",
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
