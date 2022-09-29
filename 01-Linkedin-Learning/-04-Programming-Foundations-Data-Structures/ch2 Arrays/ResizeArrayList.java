import java.util.ArrayList;

public class MyClass {
    public static void main(String args[]){
        ArrayList<Integer> myArrayList = new ArrayList<>();
        for(int i = 0; i < 10; i++){
            myArrayList.add(i);
        }
    myArrayList.add(3,100);
    System.out.println(myArrayList);
    }
}