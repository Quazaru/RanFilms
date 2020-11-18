import requests
from bs4 import BeautifulSoup as BS
from app import app
from app.models import Movies, db
import os 

url = "https://www.kinoafisha.info/rating/movies/"
# https://www.kinoafisha.info/rating/movies/?page=9
source = requests.get(url)
results = BS(source.text, 'lxml')

x = 1

for element in results.find_all("a", class_ = "films_name ref"):
    x += 1 
    title = element.text
    #print(results.find("))
    source = requests.get("https://www.kinoafisha.info" + element["href"])
    results = BS(source.text, 'lxml')

    description = results.find("span", class_ = "movieInfoV2_descText").text
    description = description.replace("\r","")
    description = description.replace("\n","")
    description = description.replace("\t","")

    year = results.find_all("span", class_ = "movieInfoV2_infoData")
    year = list(year[1])
    
    link = results.find("img", class_ = "movieInfoV2_posterImage")
    print(link["src"])

    r = requests.get(link["src"])
    number = db.session.query(Movies).count() + 1 

    with open(f"app/static/assets/img/previews/{number}.png", 'wb') as fd:
        for chunk in r.iter_content():
            fd.write(chunk)

    new_film = Movies(title = title, description = description, year = year[0])
    db.session.add(new_film)
    db.session.commit()    

    if x == 10: 
        exit()




    



