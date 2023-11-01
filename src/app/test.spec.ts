import{ calc } from './testservice';

describe('testservice',()=>{
  it('should add 2 number',()=>{
    const c1=new calc();
    expect(c1.add(2,2)).toBe(4);
  });

  it('should substract 2 number',()=>{
    const c2=new calc();
    expect(c2.sub(2,2)).toBe(0);
  });

  it('should multiplicate 2 number',()=>{
    const c3=new calc();
    expect(c3.mult(2,3)).toBe(6);
  })

});
