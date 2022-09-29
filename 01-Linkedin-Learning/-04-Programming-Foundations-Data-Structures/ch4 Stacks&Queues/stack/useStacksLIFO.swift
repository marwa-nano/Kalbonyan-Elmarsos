// stack datastructure
// stack is an ordered list you can ad,remove from the top 
// we will implement stack fom scratch in swift
// class is a blueprint how our stack is we use resizable array to store items 
class stack {
    var stackArray = [String]()  // () to initialize items ,
    // push 
    //to add ,access, remove our item we need to add function by using push fun
    func push(item:String){
    //self means the stackray belongs to this class to add our item we use .append fun 
    self.stackArray.append(item)    
    //here the append will append the item to the back of the array,and in this case the back of the array is going to act as the top of our stack 
    //and the front of the array will act as the bottom of the stack
    }
    // to remove item we use pop method 
    //pop no parameter ,return string or ?nil   ->string? there is a value return string (value deleted) or there is no value return(nil)
    func pop()->String?{
    // the back of the array as the top of the stack ,we want to remove items from the back of the array
    // to access the top or technically the last item self.stackArray.last
    // use if statement to check if this last element is nil  array empty stack empty ,if not  save last item in strin then delete ,return string
        if self.stackArray.last != nil{
            let lastString = self.stackArray.last
            self.stackArray.removeLast()
            return lastString!
        }else{
            return nil
        }
        
    }
    //peek look what's on the top of the stack without remove it 
    // with this fun we wil bbe able to access the last item of the stack ,top of the stack 
    func peek()->String?{
        if self.stackArray.last != nil{
            let lastString = self.stackArray.last
            return lastString!
        }else{
            return nil
        }
    }
}
var deck:stack = stack()
deck.push(item: "Heart : Queen")
deck.push(item: "spade : Jack")
deck.push(item: "Heart : 9")
deck.push(item: "Dimond : 4")
print(deck.peek()!)
print(deck.peek()!)
var firstItemPopped = deck.pop()
var secondItemPopped = deck.pop()
print(firstItemPopped!)
print(secondItemPopped!)
