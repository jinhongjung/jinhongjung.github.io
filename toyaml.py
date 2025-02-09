import json
import yaml
import requests

api = "https://script.google.com/macros/s/AKfycbxO17hMwj9jdoHT5imxfTgTITt1JOxLYXNwHz42ZS9VGg1k1qpunpfPvu1pnP6_sSPFKw/exec"

sheets = {
    "International+Conference" : "papers",
    "International+Journal": "journals"
}

for (sheetName, fileName) in sheets.items():
    url = api + f"?sheet={sheetName}"

    response = requests.get(url)
    data = response.json()

    with open(f'_data/{fileName}.yml', 'w', encoding='utf8') as f:
        yaml.dump(data, f, allow_unicode=True, sort_keys=False)
