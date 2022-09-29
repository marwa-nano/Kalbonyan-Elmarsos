first_name = 'marwa' # you can use single quote or double quote
last_name = "mohamed"
note = "Award: Nobel Peace Price"
# we need to convert small letter into capitalize, python includes method that do this capitalize method convert fisrt letter into capital by reference the string followed by dot then method name
first_name_cap = first_name.capitalize() #convert first letter into capital
first_name_upper = first_name.upper() # covert all letters into capital
print(first_name_cap)
print(first_name_upper)
# finding text look for a text 
# .find(),.index() reference to first occurence of text you specify
# .rfind(),.rindex() reference to last occurence of text you specify
award_location = note.rfind('award:')
print(award_location) # return 0 
# award: <- text
# 0123456 <- charater numbers
# because find method returns the location of the start of the text i searched for with in the string and it indicates the location by numbering the characters starting with zero. So a value of zero indicates that the text I was looking for occurs at the start of the string.

# Now that I know this text is part of the string, I want to get the text that comes after it, the actual description of the award. Getting part of a string value is known as slicing. in Python you don't need a method for this, like you would with concatenation. Instead, you use something called slice notation. With slice notation, I add square brackets after the reference to the string, and I specify the characters I want. I can indicate both the start position and end position, separated by a colon.
# sring[start:end] slice notation
#  I can also leave out one or the other. Leaving out start, means the slice starts at the beginning of the string and leaving out the end means it goes to the last character. In my note variable, the award label is present, so I know it occupies positions zero through six. So I want to slice the remainder, starting at position seven. So I'll create one more variable, award_text, and then for the value, I'll reference note, I'll add my square brackets, and I want seven as my start position and then a colon. And I want to go to the end of the string so I don't enter an end value. And then I want to add a statement to print that.
award_text = note[7:] 
print(award_text)
