import json
import urllib.request

homepage = 'https://bemm-app.firebaseio.com/polls/.json
with urllib.request.urlopen(homepage) as response:
   db = response.read()
db = json.loads(db)
def calculate_percentages(request):
    pollid = request.args.get('pollid')
    votes = db[pollid]["votes"]
    total = sum(votes)
    results = [x//total for x in votes]
    return results