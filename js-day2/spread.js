/* 전개 연산자 spread!! 리액트에서 자주 쓰이는 것이므로 기억할 것!! */

const colors = ["red", "green", "blue"];
const colors2 = [...colors, "black"];
console.log(colors2);

const colors3 = ["gray", ...colors];
console.log(colors3);

let dept1 = [10,20,30];
let dept2 = [40,50,60];
let dept3 = [...dept1, ...dept2];
console.log(dept3);

let dept = {
  deptno: 10,
  dname: "개발부",
  loc: "제주",
};

let emp = {
  empno: 7566,
  ename: 'king',
  hiredate: '2022-06-23'
};

let obj3 = {...dept, ...emp};
console.log(obj3);

let obj4 = {...emp, empno: 7800, ename:'John', hiredate: '2000-11-11'};
console.log(obj4);

let depts = [
  {deptno:10, dname:'총무부', loc:'인천'},
  {deptno:20, dname:'개발부', loc:'제주'},
  {deptno:30, dname:'기획부', loc:'부산'},
];

let depts2 = [...depts, {deptno:40, dname:'경영지원', loc:'광주'}];
console.log(depts2);

let depts3 = [...depts2, {deptno:50}]; /* deptno만 사용하는 경우 deptno만 출력됨 */
console.log(dept3);