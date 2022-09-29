def car_wash(amount_paid):
    if(amount_paid == 12):
        print("wash with tricolor foam")
        print("rinse twice")
        print("dry with blow dryer")
    if(amount_paid == 6):
        print("wash with white foam")
        print("rinse once")
        print(" air dry")

car_wash(6)   


def withdraw_money(current_balance,amount):    
    if(current_balance >= amount):
        current_balance = current_balance-amount
        return current_balance
amount_witdraw = input("enter the amount you need to withdraw")
amount_witdraw = int(amount_witdraw)
balance = withdraw_money(120,amount_witdraw)
print("the balance is",balance)

if (balance <= 50):
    print("we need to make a deposit")
else:
    print("nothing to do")    

def favorite_city(name):
    print("one of my favorite cities is " ,name )

favorite_city("Alex")    
favorite_city("Cairo")    
favorite_city("Ismailia")    
