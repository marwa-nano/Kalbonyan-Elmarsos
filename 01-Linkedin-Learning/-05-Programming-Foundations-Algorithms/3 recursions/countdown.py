# use recursion to implement a countdown counter 
# recursion function call it's self 
# use techniue of stack data structure

def countdown(x):
    if (x == 0):
        return 0
    else:
        print(x)
        countdown(x - 1)
    
countdown(5)

