# input fn retun string datatype 
value = input('Enter a Number:')
# using concatenation +
print(value +' This is my favorite number')
# deal with value as string data type so it repeat vlaue 10 times
# don't make multiply  
print(value * 10)
# to be able to do math with input fn we need to convert the user's entry 
# to number data type and then i can do math with the converted data type
# before  multiplication create new variable value_int
# int method converts a string into an integer 
value_int = int(value)
print(value_int * 10)
# you also can convet string to decimal number with float method
