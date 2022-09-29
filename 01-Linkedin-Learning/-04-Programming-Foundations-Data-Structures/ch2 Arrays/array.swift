// create program to compute average for => no of pets per student
// we create an array with initialize value for no.of pets each student has 
var perStudentPerCount = [0,1,2,0,5,8,0,7,1,1,1,3,2,2,5,5,3,2,2]
// we need to know no of students in class
// built in function to compute length of array in swift we use count property
var numOfStudents = perStudentPerCount.count
print(numOfStudents)
// algorithm to compute average => we need sumOfItems / numOfItems
// we need to compute sum of array => so we need to access each element in this array by using index 
var sum = 0
for pets in perStudentPerCount{
    sum = sum + perStudentPerCount[pets]
}
print(sum)
var avg = sum / numOfStudents
print(avg)


