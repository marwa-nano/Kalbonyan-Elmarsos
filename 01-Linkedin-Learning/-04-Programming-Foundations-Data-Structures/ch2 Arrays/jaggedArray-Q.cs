using System;
class Program
{
    static void Main() {
       int[][] jagged = new int[3][];
       jagged[0]=new int[4];
       jagged[1] = new int[2];
       jagged[2]=new int[7];
       Console.WriteLine(jagged[1][1]);
}}