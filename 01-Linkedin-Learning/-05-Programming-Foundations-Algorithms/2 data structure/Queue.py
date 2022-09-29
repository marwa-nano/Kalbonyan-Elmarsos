# try out the Python queue functions
# you can use a regular list as queue in pyton but it's ineffecient to use it in python
# because removing item from the front of the list requires a big -o- of linear time complexity because the subseuent items have to be shifted down in their slots when you do that 
# there is much more efficient data structure called a deck object in python's collection we can import it 

# by import deck 
from collections import deque 
# create a new empty queue
queue = deque()

# add items on to the queue
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)
queue.append(5)
# print the queue contents
print(queue)

# pop an item off the the front of queue
x = queue.popleft()
print(x)
print(queue)