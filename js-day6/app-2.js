
// 아래  import문이 없으면 increase not defined 에러뜸 
import {increase, getCount, count } from './account-2.js';
increase();
increase();
increase();
const c2 = getCount();
console.log('getCount() => ', getCount());
console.log('c2', c2);
console.log('getCount() => ', getCount());
