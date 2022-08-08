// Q1. make a string out of an array
/// 주어진 배열을 string으로 변환하기
{
  const fruits = ['apple', 'banana', 'orange'];
  // join(구분자는 생략가능)
  // const result = fruits.join(); 
  // console.log(result); // apple,banana,orange
  const result = fruits.join('|'); 
  console.log(result); // apple|banana|orange
}


// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // split(구분자전달, 개수는 선택사항)
  //const result = fruits.split(','); // 위 과일4개가 담긴 배열 생성
  const result = fruits.split(',', 2); // 인덱스 2까지만!
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]    -> reverse!
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
// : remove an item by index position
// splice(시작하는 인덱스번호, 지울 개수);  -> 삭제된 아이들이 리턴됨 -> 기존 배열을 가공하는 개념
// slice(인덱스 시작번호, 끝번호); *끝번호는 포함 안됨! -> 새로운 배열을 만드는 개념
{
  const array = [1, 2, 3, 4, 5];
  //const result = array.splice(0, 2);  // 인덱스0부터 2개를 삭제하겠다
  //console.log(result); // [1,2] 삭제되는 아이들이 리턴
  //console.log(array); // [3,4,5] 배열 자체에서 1,2가 삭제되었으므로

  const result = array.slice(2, 5); 
  console.log(result); // [3, 4, 5] 출력
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];



// Q5. find a student with the score 90
// Callback 함수 - 나중에 호출할게!! > boolean 타입을 리턴한다
// find api 사용 - 2개의 인자를 전달함 (1.predicate:콜백함수 2. )
{
  const result = students.find(function (student, index) {
    //console.log(student, index); 콘솔로 찍어보기 
    return student.score === 90;
  });
  console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
}
{
  // Arrow Function으로 간단하게
  const result = students.find((student) => student.score === 90);
  console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students (수업에 등록된 학생만 필터링)
{
  const result = students.filter((student) => student.enrolled);
  console.log(result); // A,C,E 학생만 출력함
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map : 배열안에 들어있는 모든 요소들을 전달해준 콜백함수를 호출해주면서
  // 콜백함수에서 리턴된 값들로 대체하는 것!
  const result = students.map((student) => student.score);
  console.log(result); // [45, 80, 90, 66, 88] 점수만 출력!
}
{
  const result = students.map((student) => student.score * 2);
  console.log(result); // [90, 160, 180, 132, 176] 2배한 점수 출력!
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // true - 배열중에 하나라도 만족하는 사람이 있다면 true임!

  const result2 = students.every((student) => student.score >=50);
  console.log(result2); // false출력 - 모든 배열의 조건을 만족하면 true이기 때문!
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    console.log('-------------------');
    console.log(prev);
    console.log(curr);
  })
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result= students.map(student => student.score);
  console.log(result); //[45, 80, 90, 66, 88]

  const result2= students.map((student) => student.score).join();
  console.log(result2); // '45,80,90,66,88'  하나의 문자열로 join 됨!

  const result3= students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result3); // '80,90,66,88'
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result); // '45,66,80,88,90'  오름차!!

  const result2 = students
  .map((student) => student.score)
  .sort((a, b) => b - a)
  .join();
  console.log(result2); // '90,88,80,66,45'  내림차!!
}