# using recursion to implementfactorial, power function 
# 5! = 5*4*3*2*1 = 120
# 0! = 1
def factorial(num):
    if (num == 0):
        return 1
    else:
        return num * factorial(num-1)

print(factorial(5))

# 2^4 = 2*2*2*2
def power(num, pwr):
    if (pwr == 0):
        return 1
    else:
        return num * power(num, pwr-1)

print(power(4, 2))
        


