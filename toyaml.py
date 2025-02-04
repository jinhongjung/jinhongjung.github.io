import json
import yaml
import requests

url = "https://opensheet.elk.sh/1kYKTlz8c3OCxxaliBcIhsYADlaeBPMC-NVzmLfPFrhs/Paper"

response = requests.get(url)
data = response.json()

with open('_data/google_data.yml', 'w', encoding='utf8') as f:
    yaml.dump(data, f, allow_unicode=True, sort_keys=False)
