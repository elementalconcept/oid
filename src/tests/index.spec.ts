import { expect } from 'chai';
import 'mocha';
import { OID } from '../main';

class Test1 {
}

class Test2 {
}

describe('OID', () => {
  it('should generate unique IDs', () => {
    const oid1 = OID(Test1);
    const oid2 = OID(Test2);
    const oid3 = OID(new Test1());
    const oid4 = OID(new Test1());
    const oid5 = OID(new Test2());

    expect(oid1).not.eq(oid2);
    expect(oid1).not.eq(oid3);
    expect(oid1).not.eq(oid4);
    expect(oid1).not.eq(oid5);

    expect(oid2).not.eq(oid3);
    expect(oid2).not.eq(oid4);
    expect(oid2).not.eq(oid5);

    expect(oid3).not.eq(oid4);
    expect(oid3).not.eq(oid5);

    expect(oid4).not.eq(oid5);
  });

  it('should retains same ID between calls', () => {
    const instance = new Test1();

    const oid1 = OID(Test1);
    const oid2 = OID(Test1);
    const oid3 = OID(instance);
    const oid4 = OID(instance);
    const oid5 = OID(Test1);

    expect(oid1).eq(oid2);
    expect(oid1).eq(oid5);
    expect(oid3).eq(oid4);
  });
});
