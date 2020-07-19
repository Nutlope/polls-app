"""
All the following functions will require a post request to the specified url, with a JSON file as the payload. An example of a properly formatted json file is noted.

"""


def create_poll:

    """
    JSON example:
        {
            "question" : "Which movie should I watch?",
            "options" : ["Isle of Dogs", "Frozens", "Orphanage", "Godzilla"],
            "category": "entertainment",
            "age_range" : [18,26],
            "owner" : "djmckay",
            "location" : {"latitude": 18, "longitude": -77},
            "radius" : 2

        }
    url: https://us-central1-curiocity-282815.cloudfunctions.net/create_poll/.json
    
    
    #creates poll in database https://bemm-app.firebaseio.com/polls
    #adds pollid to the user's owned polls  https://bemm-app.firebaseio.com/users/***USERID***/owned_polls

    """
    pass

def create_user:
    """
    JSON Example:
    {
        "email": "dj@gmail.com",
        "lname": "Mackay"
        "fname": David
        "pword": "password",
        "gender": "Male",
        "dob": [7,19,2020],
        "prefs" : {"misc": True, "movies": False, "politics": True}
        "location": {"longitude": -18, "latitude": 21}
    }
    url: https://us-central1-curiocity-282815.cloudfunctions.net/create_user/.json

    """
    pass
    
def vote:
    """



    """