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



homepage = 'https://curiocity-bemm.firebaseio.com/'
with urllib.request.urlopen('https://curiocity-bemm.firebaseio.com/.json') as response:
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
    pollid = "secondpollever"
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
def create_user(email, username, password):
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

def location_isvalid(poll, user):
    """
    Takes poll and user as input and returns True if user coordinates are in poll radius.
    """
    pass

def load_polls(current_date, user_location, userid):
    time = str(current_date-24)#change to measure time from 24hours previous
    page = homepage+'polls/OrderBy=Time&StartAt='+time+'/.json' #check firebase documentation on how to order by time
    with urllib.request.urlopen(page) as response:
        pollbase = response.read()
    pollbase = json.loads(pollbase) #loads all polls that are still available
    stack = []
    user = db["users"][userid]
    user_pref = user["preferences"]
    user_age = user["age"]
    for poll in pollbase:
        poll_pref = poll["preferences"]
        age_range = poll["age_range"]
        if user_age <= age_range[1] and user_age>= age_range[0]: #constant time check if user falls in age range
            if location_isvalid(poll, user): #constant time calculation to check if user falls in poll radius
                for pref in user_pref: #worst case O(n) where n = #of user preferences -> 6 constant time checks if some user falls under any of the preferences
                    if poll_pref[pref]: #test to see null values return as False
                        stack.append(poll)
                        break
    return stack


create_poll(question, options, userid, preferences, date, radius, poll_location, age_range)