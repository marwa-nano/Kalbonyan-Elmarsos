// students score,total possible score
// 15/20-You got a C(75%)!
//A 90-100,B 88-89,C 70-79,D 60-69,F 0-59

let getGrade = function (score, total = 20) {
  let grade = (score / total) * 100;
  if (grade >= 90 && grade <= 100) {
    return `you got a A ${grade}%`;
  } else if (grade >= 80 && grade <= 89) {
    return `you got a B ${grade}%`;
  } else if (grade >= 70 && grade <= 79) {
    return `you got a c ${grade}%`;
  } else if (grade >= 60 && grade <= 69) {
    return `you got a D ${grade}%`;
  } else if (grade >= 0 && grade <= 59) {
    return `you got a F ${grade}%`;
  } else {
    return "please enter a right degree";
  }
};
let yourGrade = getGrade(19, 20);
console.log(yourGrade);
//////////////////////////////////////////////////////////
let gradeCalc = function (score, totalScore) {
  let precent = (score / totalScore) * 100;
  let letterGrade = "";
  if (precent >= 90) {
    letterGrade = "A";
    return `you got a ${letterGrade} (${precent}%) `;
  } else if (precent >= 80) {
    letterGrade = "B";
    return `you got a ${letterGrade} (${precent}%) `;
  } else if (precent >= 70) {
    letterGrade = "c";
    return `you got a ${letterGrade} (${precent}%) `;
  } else if (precent >= 60) {
    letterGrade = "D";
    return `you got a ${letterGrade} (${precent}%) `;
  } else {
    letterGrade = "F";
    return `you got a ${letterGrade} (${precent}%) `;
  }
};
let result = gradeCalc(15, 20);
console.log(result);
/////////////////////////////////////////////
let gradeCalc1 = function (score, totalScore) {
  let precent = (score / totalScore) * 100;
  let letterGrade = "";
  if (precent >= 90) {
    letterGrade = "A";
  } else if (precent >= 80) {
    letterGrade = "B";
  } else if (precent >= 70) {
    letterGrade = "c";
  } else if (precent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `you got a ${letterGrade} (${precent}%) `;
};
let result1 = gradeCalc1(1, 20);
console.log(result1);
