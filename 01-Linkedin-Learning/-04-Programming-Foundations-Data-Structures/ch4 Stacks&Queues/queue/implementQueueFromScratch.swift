// Queues datastructure
// Queues is an ordered list you can add,remove with specific way  add to the back ,remove from the front 
// we will implement Queues fom scratch in swift
// class is a blueprint how our Queues is we use resizable array to store items 
class Queue {
    var queueArray = [String]()  // () to initialize items ,
    // enqueue as push
    //to add ,access, remove our item we need to add function 
    func enqueue(item:String){
    //self means the queueArray belongs to this class to add our item we use .append fun 
    self.queueArray.append(item)    
    //here the append will append the item to the back of the array,
    }
    // to remove item we use pop method 
    //pop no parameter ,return string or ?nil   ->string? there is a value return string (value deleted) or there is no value return(nil)
    // dequeue as pop
    func dequeue()->String?{
    // we want to remove items from the front of the array
    // to access the top or technically the first item self.stackArray.first
    // use if statement to check if this fisrt element is nil  array empty queue empty ,if not  save fisrt item in string then delete ,return string
        if self.queueArray.first != nil{
            let firstString = self.queueArray.first
            self.queueArray.removeFirst()
            return firstString!
        }else{
            return nil
        }
        
    }
    //peek look what's on the top of the queue without remove it 
    // with this fun we wil be able to access the fisrt item of the queue ,top of the queue 
    func peek()->String?{
        if self.queueArray.first != nil{
            let firstString = self.queueArray.first
            return firstString!
        }else{
            return nil
        }
    }
}
