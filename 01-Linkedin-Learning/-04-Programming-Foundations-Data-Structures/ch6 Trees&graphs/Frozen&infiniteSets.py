#create a set 
primaryColors = frozenset(["red","blue","yellow"])  #finiteset

color = "green" 
if color.lower() in primaryColors:
    print(color +" is a pimary color")
else:
    print(color +" is not a pimary color")
# to can't add item to this set you can add frozen before set (finite item )
# we also can do it as infinite set 
letters = set(["a","b"])
letters.add("c")
print(letters)   