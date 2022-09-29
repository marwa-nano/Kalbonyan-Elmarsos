# Bubble Sort Algorithm 

def bubbleSort(dataset):
    # start with the array length and decrement each time
    # first, what we need to do is write a loop that will start by examining every element  {len(dataset)} and then we'll decrease by one each time because we don't have to examine every element every time {-1}. We can start at the end of the array and then go up to the one before the last and the one before that, so I'm going to have a range function here. I'm going to have for i in range, and the range is going to start at the length of the dataset minus one because that's the zero index array's last item. We're going to stop at the zeroth item and we're going to step by minus one each time. So we're going to count down from the end of the array. 
    for i in range(len(dataset)-1, 0, -1):
        # examine each item pair
        #  And then inside of this, I need to have an inner loop to compare the neighboring elements and then swap them if needed. So I'll write for j in range of i and then I need to do the comparisons. So if the element at dataset j is greater than the one next to it, which is going to be j plus one, then I'll have a temporary variable where I store aside the value of dataset j and then I'll switch them, so dataset j will get the value of its neighbor. And then I'll set dataset j plus one to the temp variable. And by the way, this is where I was talking about earlier. 
        for j in range(i):
            # swap items if needed
            if dataset[j] > dataset[j+1]:
                temp = dataset[j]
                dataset[j] = dataset[j+1]
                dataset[j+1] = temp

        print("Current state: ", dataset)


def main():
    list1 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
    print("Starting state: ", list1)
    bubbleSort(list1)
    print("Final state: ", list1)

if __name__ == "__main__":
    main()    


