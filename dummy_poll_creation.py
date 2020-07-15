import json
import urllib.request
from datetime import date
import requests as r

userpage = 'https://bemm-app.firebaseio.com/users/.json'
pollpage = 'https://bemm-app.firebaseio.com/polls/.json'
with urllib.request.urlopen(userpage) as response:
   db_user = response.read()
db_user = json.loads(db_user)

with urllib.request.urlopen(pollpage) as response:
   db_poll = response.read()
db_poll = json.loads(db_poll)



question = "Which movie should I watch?"
options = ["Isle of Dogs", "Frozens", "Orphanage", "Godzilla"] #JS Array (preferred)
options_2 = {0: 'Isle of Dogs', 1: 'Frozen', 2: 'Orphanage', 3: 'Godzilla'} #json object version
category = "entertainment"
age_range = [18, 26] #OR {"lowerbound": 18, "upperbound": 21}
owner = "dskull"
date = date.today()
location = {"latitude": 18, "longitude": -77}
radius = 2 #miles

def create_poll(question, options, category, age_range, owner, date, location, radius):
    pollid = "uniqueid2"
    if db_poll and pollid in db_poll.keys():
        raise FileExistsError
    poll = {

            "question" : question,
            "options" : options,
            "votes" : [0 for x in options],
            "category": category,
            "age_range" : age_range,
            "owner" : owner,
            "date" : [date.year, date.month, date.day], #date objects tend not to be serializable so make an array with [year, month, day, hour, minute, second]
            "location" : location,
            "radius" : radius,

    }
    user = db_user[owner]

    
    if "owned_polls" in user.keys():
        user["owned_polls"].append(pollid)
    else:
        user["owned_polls"] = [pollid,]
    user = json.dumps(user)
    poll = json.dumps(poll)
    r.put('https://bemm-app.firebaseio.com/users/'+owner+'/.json', user)
    r.put('https://bemm-app.firebaseio.com/polls/'+pollid+'/.json', poll)
    print('success')

create_poll(question, options_2, category, age_range, owner, date, location, radius)