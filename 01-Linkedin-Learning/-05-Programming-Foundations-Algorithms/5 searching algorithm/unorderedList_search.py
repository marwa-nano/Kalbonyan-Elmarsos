# searching for an item in an unordered list
# sometimes called a Linear search has big o of linear time complexity
# time of search increase by no of item in list 

# declare a list of values to operate on
items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def find_item(item, itemlist):
    for i in range(0, len(itemlist)): # from index 0 to last index of the list
        if item == itemlist[i]:
            return i
    
    return None # will be execute if item not found in the list


print(find_item(87, items))
print(find_item(250, items))

