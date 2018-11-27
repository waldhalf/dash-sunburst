import csv
import json

csvFilePath = "essai.csv"
jsonFilePath = "happy.json"

data = {}
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        print(csvRow)
