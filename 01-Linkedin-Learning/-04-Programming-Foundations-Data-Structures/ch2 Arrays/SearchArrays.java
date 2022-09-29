// search Arrays
import java.util.ArrayList;

public class MyClass {
    public static void main(String args[]){
        ArrayList<Integer> myArrayList = new ArrayList<>();
        for(int i = 0; i < 10; i++){
            myArrayList.add(i);
        }
    myArrayList.add(3,100);
    System.out.println(myArrayList);
    System.out.println(myArrayList.indexOf(39)); //item not found return -1
    System.out.println(myArrayList.indexOf(100)); // item founded
    }
}