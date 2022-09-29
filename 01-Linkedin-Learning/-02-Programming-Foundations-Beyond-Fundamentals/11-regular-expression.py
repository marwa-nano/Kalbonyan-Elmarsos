# regular expression lets you create a description of a pattern that you want to match. You can then check a string against the regular expression and if it matches, you can use one or more methods to work with the results. A regular expression known  (regex) can be
#  made up of letters, numbers and special characters.each char has specific  meaning and you can put them together to describe exactly what you need
# /hello/ you can indicate specific text you're looking for by enclosing it in slashes. 
# Back slashes mark many patterns in a regular expression. 
# \d indicates a digit, 
# \w indicates a word character like a letter,
# . dot indicates any character.
# + plus sign to indicate one or more occurrences of the preceding pattern. 
# * Asterisk indicates zero or more 
# ? question mark indicates zero or one. 

# i want to write a regular expression that will identify weather a variable containes five digit in a row which is the min of us zip code 
import re
# import re module which contains methods for creating and working with regular expressions.

five_digit_zip = "98101"
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'
# create variable name with five_digit_expression and for the value i start with letter r which indicates that the string that follows may include backslah that the compiler should ignore ,after that i include my expression in quotes and i simply want to look for five digits so that write
#  \d followed by {}curly braces 5 which donates five occurence of the pecending expression ,the digit  
# '\d{5}'
five_digit_expression = r'\d{4}' # now i have regular expression 
# i want my program to compare it to my strings 
# we will use print command and in the parens i will call re.serch method print(re.search(,))
# and that takes 2 arguments in parens re.search(,) 1-> the regular expression , 2->and the strings against to compare it so 
print(re.search(five_digit_expression, five_digit_zip))
print(re.search(five_digit_expression, nine_digit_zip))
print(re.search(five_digit_expression, phone_number))

