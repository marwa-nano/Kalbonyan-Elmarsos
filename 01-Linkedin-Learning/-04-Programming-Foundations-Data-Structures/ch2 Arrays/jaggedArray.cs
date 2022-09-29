// jagged array different sizes of array no of column for each array inside it can be different 
using System;

class Program
{
    static void Main() {
        // to ceate jagged array first we need to declare it 
        int[][] jagged = new int[3][];        // new integer array has 3 rows ,we not put a no in column slot because no of columns is not fixed
        // set  first row(row 0) will be at index 0
        jagged[0] = new int[2];  //this row have new integer array has 2 slots inside of it (2 columns) it can contain 2 integers 
        jagged[0][0] = 8;  //first integer  at row0 slot0 has value 8
        jagged[0][1] = 10; // second item in this row
        
        // set second row (row 1)
        jagged[1] = new int[9];
        // intialize vlaues of this int array at row 1 to be zero 
         
        // set thir row (row 2) 
        jagged[2] = new int[4] {20,30,40,50};
        Console.WriteLine("At row ,col 1: " + jagged[2][1]);
        
    }
}