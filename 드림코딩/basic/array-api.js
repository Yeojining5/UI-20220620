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
  const result = fruits.split(','); // 위 과일4개가 담긴 배열 생성
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.shift();
  array.shift();
  console.log(array);
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
students.shift();
students.shift();
console.log(students);


// Q5. find a student with the score 90
{
}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}