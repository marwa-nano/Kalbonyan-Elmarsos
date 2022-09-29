# program reads input from external file and perform some pocessing and then write the outputs to another file 
# this program uses a few Python methods that are specific to input and output. The code in the first couple of lines uses the open method. 
# open method This opens files with specific names that are located in the same folder as the program file.
infile = open('values.txt', 'rt') # open method to open file values.txt which contain list of numbers ,'rt'->r for Read - Default value. Opens a file for reading, error if the file does not exist, t ->specify if the file should be handled as binary(b) or text mode(t)
outfile = open('values-totaled.txt', 'wt') # file values-totaled.txt doesn't exist ptyhon will create it and use this file to store the output of the program ,"w" - Write - Opens a file for writing, creates the file if it does not exist
print('Processing input') # print statement one way of providing output  
sum = 0
# for loop is taking one line of the input file at a time which is one number at a time , 
for line in infile:
    # notice that number is encoded as string so you need to convert it to integer and then adding it to the sum variable 
    sum += int(line)
    # when the program has looped through all of the lines in the values.txt file ,the sum variable should contain the total for all numbers 
    # the for loop also include print statement which is printing the current line with any line ending character stripped out 
    # .rstrip() method removes any trailing characters (characters at the end a string), space is the default trailing character to remove. 
    # Remove any white spaces at the end of the string
    # but there's n extraargument here file=outfile that specifies that the data should be printed to a file and specifies the outfile which is the values-totaled.txt file so, when it is done i should see the list of numbers recreated in the output file 
    print(line.rstrip(), file=outfile)
#after the loop is completed,there's a print command that prints a word total: followed by the value of the sum variable conveted to string ,and this print statement is also directed to values-totaled.txt
print('\nTotal: ' + str(sum), file=outfile)
outfile.close() # The close() method closes an open file.which indicates that the pogram is finished writing to values-totaled.txt
print('Output complete')
#
infile = open('values.txt', 'rt')
outfile = open('values-totaled.txt', 'wt')
print('Processing input')
sum = 0
for line in infile:
    sum += int(line)
    print(line.rstrip(), file=outfile)
print('\nTotal: ' + str(sum), file=outfile)
outfile.close()
print('Output complete')
#