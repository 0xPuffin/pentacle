import csv
from os import listdir
from os.path import isfile, join

mypath = 'projects/'
paths = onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

dataSets = {}

def splitColon (st):
  st.split(':')

for p in paths:
  with open(mypath + p, 'r') as file:
    data = file.read()
    table = data.split('---')[1]
    desc = data.split('---')[2]
    spl = table.split('\n')
    obj = {}
    name = ''
    for sym in spl:
      try:
        res = sym.split(': ')
        if res[0] == '':
          continue
        if res[1] is None:
          continue

        obj[res[0]] = res[1].replace('\"', '')
        if res[0] == 'slug':
          name = res[1].replace('\"', '')

        dataSets[name] = {}
        dataSets[name]['data'] = {}
        dataSets[name]['data'] = obj
        dataSets[name]['data']['description'] = desc.replace('\n', '')
      except Exception as e:
        print(e)
        pass

fieldnames = ['slug', 'date', 'title', 'logline', 'cta', 'logo', 'category', 'website', 'twitter', 'status', 'discord', 'telegram', 'forum','description']
with open('data.csv', mode='w') as data_file:
  writer = csv.DictWriter(data_file, fieldnames=fieldnames, extrasaction='ignore')
  writer.writeheader()
  for d in dataSets:
    writer.writerow(dataSets[d]['data'])
