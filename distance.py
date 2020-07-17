import geopy.distance

def distance(coords1, coords2):
    """
    coordss1 = (latitude, longitude) NE = positive SW = negative
    """
    dis = geopy.distance.distance(coords1, coords2).miles
    return dis

print(distance((0,0),(18, -77)))