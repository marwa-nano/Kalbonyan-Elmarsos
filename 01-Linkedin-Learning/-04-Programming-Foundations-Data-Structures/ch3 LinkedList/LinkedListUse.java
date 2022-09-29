import java.util.LinkedList;

public class MyClass {
    public static void main(String args[]) {
        LinkedList travelBucketList = new LinkedList();
        
        // Add Items
        travelBucketList.add("Santorini, Greece");
        travelBucketList.addFirst("Barcelona, Spain");
        travelBucketList.addLast("Tokyo, Japan");
        travelBucketList.add(2, "Galapagos Islands, Ecuador");
        System.out.println(travelBucketList);
        
        // Access
        System.out.println(travelBucketList.get(2)); // access by index
        System.out.println(travelBucketList.getFirst());  // access first item
        
        System.out.println(travelBucketList.contains("Barcelona, Spain")); // access by object
        
        // Remove Items
        travelBucketList.removeFirst();  // remove first item
        travelBucketList.removeLast();   // remove last item
        System.out.println(travelBucketList); 
        
        travelBucketList.remove("Santorini, Greece"); // remove by object
        travelBucketList.remove(0); //remove byb index
        System.out.println(travelBucketList);
    }
}
