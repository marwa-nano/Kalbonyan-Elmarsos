// runtime stack errors 
import java.util.Stack;
public class MyClass {
    public static void main(String args[]) {
        Stack myStack = new Stack();
        myStack.push("hi");
        myStack.pop();
        myStack.pop(); // stack is empty so we get error at this 
    }
}