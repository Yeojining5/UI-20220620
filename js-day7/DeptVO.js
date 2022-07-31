// export 하면 외부 클래스에서 접근 가능
export class DeptVO {
  constructor(deptno, dname, loc) {
    this.deptno = deptno;
    this.dname = dname;
    this.loc = loc;
  }
  get getDeptno() {
    return this.deptno;
  }
  set setDeptno(value){
    this.deptno = value;
  }
  get getDname() {
    return this.dname;
  }
  set setDname(value){
    this.dname = value;
  }
  get getLoc() {
    return this.loc;
  }
  set setLoc(value){
    this.loc = value;
  }
  
}

const dvo = new DeptVO(10, '총무부', '서울');
console.log(dvo.deptno);
dvo.setDeptno = 20;
console.log(dvo.getDeptno);
