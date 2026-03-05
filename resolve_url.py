import requests

url = "https://maps.app.goo.gl/F8ZEWoUcrAEX6W1y7"
try:
    response = requests.head(url, allow_redirects=True)
    print(f"Final URL: {response.url}")
except Exception as e:
    print(f"Error: {e}")
