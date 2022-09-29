# class define with keyword class
# class name written by pascalcase(UperCamelCase)
class Attendee: # create class named Attendee
    def __init__(self, name, tickets):   # create object constructor (attributes  for object)
        self.name = name
        self.tickets = tickets
    
    def displayAttendee(self):   # create object constructor method 
        print(f'Attendee name is {self.name} tickets {self.tickets}')

    def addTicket(self):
        self.tickets += 1
        print(f'tickects increasd by {self.tickets}')
Attendee1 = Attendee('Marwa',2)     #create object from class Attenddee 
Attendee2 = Attendee('ahmed',5) 
Attendee.displayAttendee(Attendee1)
Attendee.displayAttendee(Attendee2)
Attendee.addTicket(Attendee1)
Attendee.addTicket(Attendee2)
