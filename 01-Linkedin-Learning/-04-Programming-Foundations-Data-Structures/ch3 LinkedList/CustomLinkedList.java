public class CustomLinkedList {
   Node head;
   Node tail;
   
   class Node {
       int data;
       Node next;
       Node previous;
       
       Node(int d) {data = d;}
   }
}