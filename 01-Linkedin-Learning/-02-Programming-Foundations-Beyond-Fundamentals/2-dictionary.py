# employee information

# employee_name = "ahmed adel"
# employee_address = "103 st blabla"
# employee_id = "123"
# employee_edu = "faculty of eng"

#we can group them in a dicyionary 
employee_info = {
    'name': "ahmed adel",
    'address' : "103 st blabla ",
    'id': "123" ,
    'education': "bsc of eng",
}

# to deal with data in a dictionary we can use the name of the variable  that stories the dictionary value. A dictionary doesn't use index numbers though, because each item in a dictionary has a label . To reference a dictionary value, I simply add square brackets after the variable name and specify the label in quotes.
print (employee_info['address'])