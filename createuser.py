import json
import urllib.request
import requests as r
from datetime import date

homepage = 'https://bemm-app.firebaseio.com/.json'
with urllib.request.urlopen(homepage) as response:
   db = response.read()
db = json.loads(db)

def user1():
    email = "djmackay@mit.edu"
    fname = "David"
    lname = "Mackay"
    prefs = ["entertainment", "miscellaneous"]
    username = "dmack1"
    dob = [12,1,1998]
    pword = "dman"
    location = [18, -77]
    # email = request.args.get('email')
    # fname = request.args.get('fname')
    # lname = request.args.get('lname')
    # prefs = request.args.get('prefs')
    # username = request.args.get('username')
    # location = requests.args.get('location')
    # if username in db:
    #     return 'User Already Exists'   
    # pword = request.args.get('pword')
    # dob = request.args.get('dob')
    birthDate = date(dob[2], dob[0], dob[1])
    today = date.today() 
    age = today.year - birthDate.year - ((today.month, today.day) < (birthDate.month, birthDate.day)) 
    interests = {}
    if prefs:
        for pref in prefs:
            interests[pref] = True
    user = {

                "fname" : fname,
                "lname" : lname,
                "email": email,
                "password": pword,
                "owned_polls": [],
                "saved_polls": [],
                "voted_polls": {},
                "preferences" : interests,
                "age": age,
                "dob": dob,
                "location": location

    }
    page = 'https://bemm-app.firebaseio.com/users/'+username+'/.json' 
    user = json.dumps(user)
    r.put(page,user)
    return 'User Created Successfully'
print(user1())
