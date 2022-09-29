// linked list
// create class blueprint for list 
public class LinkedListFromScratch {
    Node head;
    // add functionality to add items into the list
    public void add(int data){
        // LinkedList is Empty, there is no item 
        // to check the list is empty check the head of the list is null 
        if(this.head==null){
            this.head = new Node(data);    
        }else{
        // LinkedList is not Empty, we must suggest the head of  list and the NextNode
            Node nodeToAdd = new Node(data);
            nodeToAdd.next = this.head;
            this.head = nodeToAdd;
        }
    }
    // use data structure linke list
    public static void main(String[] args) {
        LinkedListFromScratch myList = new LinkedListFromScratch();
        myList.add(10);
        myList.add(18);
        System.out.println(myList.head.data);
        System.out.println(myList.head.next.data);
    }
}
class Node{
    int data;
    Node next;

Node(int d) {this.data = d;} // constracutor
}