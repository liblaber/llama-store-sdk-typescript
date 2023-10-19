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
          '/user/s-8$ZSCJ6blTPtD1@ohlc$)2lT&6%7D27KL;v%5C(Ox.P/05Lf%7B%60QJZik.$z1@@l%20Ln%5CXp&,1%5C%5C!pZRf3.0%3E%7DL%25%60j%5E)x%205Fza:adM#10%7BaE0l%20379Nk9:.%5CeKn0Y~Nh%3E8SaQ%5Dnt*',
        )
        .reply(200, { data: {} });
      return sdk.user
        .getUserByEmail(
          's-8$ZSCJ6blTPtD1@ohlc$)2lT&6}27KL;v"(Ox.P/05Lf{`QJZik.$z1@@l Ln"Xp&,1\\!pZRf3.0>}L%`j^)x 5Fza:adM#10{aE0l 379Nk9:."eKn0Y~Nh>8SaQ]nt*',
        )
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/Pn~2$A%5Ek%3E%5CB%5Ca%5DzUOp%3E9%7ClD=n;nv@)pn.T#2+/*O%5C%7CRTrt$jM$dd~%7D%7Bw_(Nj%7B0*wp&%7B%25Qa9JC%7DGH!1#oHT/n?z6%7D0QizeQ%609%60Q%25%5BR%5C%7C(T!1ajfI+1SrY',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/R%200oBSMG%5Ee@Nz7ggor!8II.Uw=2%7CH6.%7B%5CA7ix%25%3E5I$nWyn%3E%20/sIH%7D?*i~%5CErN%7CWmpfx1H:Yf$a)e&(;%5C%5C%5ChOYLFyv$#%5C%5C0%60m~Bh+dEFqDT%5B2;g=Nn',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.user.getUserByEmail(
            "R 0oBSMG^e@Nz7ggor!8II.Uw=2|H6.{'A7ix%>5I$nWyn> /sIH}?*i~'ErN|Wmpfx1H:Yf$a)e&(;\"\"'hOYLFyv$#''0`m~Bh+dEFqDT[2;g=Nn",
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
