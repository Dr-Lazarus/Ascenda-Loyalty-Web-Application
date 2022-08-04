import requests
import json
from typing import Union
from fastapi import FastAPI
import time

app = FastAPI()

@app.get("/hotelprices")
def read_hotel_prices(checkin, checkout, guests=1, destination_id="WD0M", country_code = "SG", currency = "SGD", partner_id=1, lang = "en_US"):
    comp = False

    url = f"https://hotelapi.loyalty.dev/api/hotels/prices?destination_id={destination_id}&checkin={checkin}&checkout={checkout}&lang={lang}&currency={currency}&country_code={country_code}&guests={guests}&partner_id={partner_id}"
    while not comp:
        print("comp is false")
        try:
            res = requests.get(url)
            res = requests.get(url)
            data = json.loads(res.content)
            comp = data.get('completed', False)
        except Exception as e:
            print(e)
            time.sleep(5)

    return data

@app.get("/roomprices")
def read_hotel_prices(hotelid, checkin, checkout, guests, destination_id="WD0M", country_code = "SG", currency = "SGD", partner_id=1, lang = "en_US"):
    print("getting room prices")
    comp = False

    url = f"https://hotelapi.loyalty.dev/api/hotels/{hotelid}/price?destination_id={destination_id}&checkin={checkin}&checkout={checkout}&lang={lang}&currency={currency}&country_code={country_code}&guests={guests}&partner_id={partner_id}"
    print(url)
    while not comp:
        print("comp is false")
        try:
            res = requests.get(url)
            res = requests.get(url)
            data = json.loads(res.content)
            comp = data.get('completed', False)
        except Exception as e:
            print(e)
            time.sleep(5)

    return data

