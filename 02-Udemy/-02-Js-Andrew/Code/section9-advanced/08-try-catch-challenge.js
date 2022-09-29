let gradeCalc1 = function (score, totalScore) {
  if (typeof score === "number" && typeof totalScore === "number") {
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
  } else {
    throw Error("must be a numbers ");
  }
};
try {
  let result1 = gradeCalc1(1, 20);
  console.log(result1);
} catch (e) {
  console.log("please Enter Numbers");
  console.log(e.message);
}
