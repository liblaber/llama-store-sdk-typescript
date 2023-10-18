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
          '/user/_%5CWufi#bH$Js$adu%7D%5Bfd%7B:%3E%5DSB%25@42Bbs%3CFPxHeK9J_%3E-%3C2(@*n6%5C%5C(96fd-v%20d%5B6z%5Cm*Y1,IMDwt$RCWB=HxMvW#w2+1t6+$=6C%5C%5C8K*g(ARGI#.%5D&rly!v*%3CRsY_c4%25D%5Cb%5Cv.5Sg5oh#&p0e0XcC$N-O5(GEsl5HA:%60;U',
        )
        .reply(200, { data: {} });
      return sdk.user
        .getUserByEmail(
          "_'Wufi#bH$Js$adu}[fd{:>]SB%@42Bbs<FPxHeK9J_>-<2(@*n6\\(96fd-v d[6z'm*Y1,IMDwt$RCWB=HxMvW#w2+1t6+$=6C\\8K*g(ARGI#.]&rly!v*<RsY_c4%D'b\"v.5Sg5oh#&p0e0XcC$N-O5(GEsl5HA:`;U",
        )
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/.%5Cf%60M!%7CJT.0Zy=VOaGTj%25E73.v%60Ey#X-?Oy#ELIN$1/UDG_0%5B4KM%25@MECfH;us+%5BZipp$-R%5DS%7C%3CPx%5C:)-cX.k=r27(%7DS5D.B8jLVx',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.user.getUserByEmail()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://localhost:8000')
        .get(
          '/user/FTT-)RE2lxr2%7Du7%7BZ&b%3CRVe;=i%7CQmPZ%5C%5CY5K!hU%5EqJ2%5C%3Cx2%5Bh6ZuwzVURW)~l%5B%5BMAMh+%25%5Cr%5D1TJ%25enwcB%20E*&&@ac/GdJR%25i$%3C2Yl6u.R*g',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.user.getUserByEmail(
            'FTT-)RE2lxr2}u7{Z&b<RVe;=i|QmPZ\\Y5K!hU^qJ2"<x2[h6ZuwzVURW)~l[[MAMh+%\'r]1TJ%enwcB E*&&@ac/GdJR%i$<2Yl6u.R*g',
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
