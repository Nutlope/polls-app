"""
Poll Creation
"""





"""
Home Page Retrieval
"""


"""
Your Past Polls
"""
import json
import urllib.request
import requests as r
import geohash2 as pgh
import datetime as dt
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
cred = credentials.Certificate('E:\Summer2020\Internhacks\Polls/ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred) #on google cloud platform we dont need cred
db = firestore.client()

pass



homepage = 'https://curiocity-bemm.firebaseio.com/.json'
with urllib.request.urlopen(homepage) as response:
   db = response.read()
db = json.loads(db)


userid = "bemmm" #get userid from frontend
question  = "Which shoes are the best?" #get question from frontend
options = ['af1', 'af2', 'af3'] #get images from frontend
email = "djmackay@mit.edu"
age_range = [18,21]
preferences = {"fashion": True , "lifestyle": True}
date = "7/3/2020"
radius = 32
poll_location = (-77, 18) #lattitude, longitude
def create_poll(question, options, userid, preferences, date, radius, poll_location, age_range):
    """
    Inputs:
    question: string containing question. Example: "What movie should I watch"

    options: ordered list containing each option as a string. Example: ["Isle of Dogs", "Frozen", "Avengers Endgame"]

    userid: string that is unique to each user

    preferences: ordered list containing each preference/demographic as a string. Example: ["movies", "entertainment", "lifestyle"]

    date: preferable ordered list format [hours, minutes, seconds, month, day, year] example 3:40:06 PM onJuly 4,2020 = [15, 40, 6, 7, 4, 2020]

    radius: integer in miles  Example 32 miles = 32

    poll_location: ordered list of latitude and longitude floats at creation. Example 18 degrees North 77 degrees west =  [18.00, -77.00]. Convention: east and north are positive.

    age range : ordered list of lower and upper bounds. Exaple 18 - 21= [18,21]
    """
    page = homepage+'polls/.json'
    poll = {
        "question": question,
        "options": options,
        "owner" : userid,
        "date_posted": date,
        "poll_radius": radius,
        "age_range": age_range,
        "poll_location": poll_location,
        "preferences": preferences,
        }
    poll["votes"] = [0 for x in options]
    pollid = "secondpollever" #generate unique id
    realpoll = {}
    realpoll[pollid] = poll 
#    db["users"][userid]["owned_polls"].append(pollid)
    realpoll = json.dumps(realpoll)
    r.post(page, realpoll)
    pass


def vote(pollid, index, userid):
    db["polls"][pollid]["votes"][index] +=1
    db["polls"][pollid]["votees"][userid] = index
    db["users"][userid]["voted_polls"].append(pollid)
    #updates db

def calculate_percentages(pollid):
    votes = db[pollid]["votes"]
    total = sum(votes)
    results = [x/total for x in votes]
    return results
def create_user(email, username, password, name):
    """
    Inputs:

    email: string containing user email
    username: unique user string to be used as id
    password: user's password as a string
    """
    page = homepage+'users/.json'
    userid = username
    user ={
        userid :{
        "email": email,
        "password": password,
        "owned_polls": [0],
        "saved_polls": [0],
        "voted_polls": [0],#i want to use a set but the only way to do that is dictionary notation
        "preferences" : {"misc": True, "movies": False, "politics": True}
        }
    }
    user= json.dumps(user)
    r.put(page, user)

    #https://us-central1-curiocity-282815.cloudfunctions.net/create-user?username=bemmboss&userinfo=dingo
def location_isvalid(poll, user):
    """
    Takes poll and user as input and returns True if user coordinates are in poll radius.
    """
    pass

def load_polls_homepage(current_date, user_location, userid):
    """
    Inputs:

    current_date: list of integers in format. Example: 3:06:42 PM on July 6, 2020 = [15,06,42,7,6,2020]
    user_location: list of 2 floats corrseponding to latitude and longitude. Example: 18 N, 77 W = [18.00, -77.00]
    userid: string containing unique userid
    """
    time = str(current_date-24)#change to measure time from 24hours previous
    pollpage = homepage+'polls/OrderBy=Time&StartAt='+time+'/.json' #check firebase documentation on how to order by time
    userpage = homepage+'users/.json'
    with urllib.request.urlopen(pollpage) as response:
        pollbase = response.read()
    pollbase = json.loads(pollbase) #loads all polls that are still available
    stack = []
    user = db["users"][userid]
    user_pref = user["preferences"]
    user_age = user["age"]
    user["location"] = user_location
    r.post(userpage, user)
    for poll in pollbase:
        poll_pref = poll["preferences"]
        age_range = poll["age_range"]
        if user_age <= age_range[1] and user_age>= age_range[0]: #constant time check if user falls in age range
            if location_isvalid(poll, user): #constant time calculation to check if user falls in poll radius
                for pref in poll_pref: #worst case O(n) where n = #of poll preferences
                    if user_pref[pref]: #test to see null values return as False
                        stack.append(poll)
                        break
    return stack



def load_owned_polls(userid, user_location):
    """
    Inputs:
    userid: username unique string
    user_location: current user location ordered list [latitude, longitude]
    """
    stack = []
    pollpage = homepage+'polls/.json'
    user = homepage+'users/'+userid+'/.json'
    with urllib.request.urlopen(pollpage) as response:
        pollbase = response.read()
    pollbase = json.loads(pollbase)
    user = json.loads(user)
    for pollid in user["owned_polls"]:
        stack.append(pollbase[pollid])
        pollbase[pollid]["location"] = user_location #in future add if statement for polls that do not follow the user

    r.put(pollpage, pollbase) #think this should work
    return stack


username = 'dskull'
userinfo = '{"email": "djmackay@mit.edu","password": "bemmgod","owned_polls": [3],"saved_polls": [0],"voted_polls": [0],"preferences" : {"misc": True, "movies": False, "politics": True}}'
url = 'https://us-central1-curiocity-282815.cloudfunctions.net/test_json?file='+userinfo
print(url)