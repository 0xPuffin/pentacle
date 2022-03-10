import time
import re
from bs4 import BeautifulSoup
import requests
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

URL = 'https://cosmos.network/ecosystem/apps/'
PROJECTS = []

options = Options()
options.headless = True

try:
    print("Checking Chrome Driver...")
    driver = webdriver.Chrome(options=options)
except Exception:
    print("\nSelenium Chrome Driver Not Compatible, Downloading Latest Driver")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    print("Driver Downloaded\n\nContinuing...\n")
    driver.get(URL)
    time.sleep(5)

source_code = driver.page_source
soup = BeautifulSoup(source_code, 'html.parser')

PROJECT_TILES = soup.find_all('div', class_='item')

PROJECT_NAMES = []
LOGO_LINK = []
PROJECT_WEBSITES = []
PROJECT_WEBSITES_STRING = []
GITHUB_LINKS = []
DISCORD_LINKS = []
TELEGRAM_LINKS = []
WHITEPAPER_LINKS = []
MEDIUM_LINKS = []
TWITTER_LINKS = []
DOCS_LINKS = []

LISTS = [GITHUB_LINKS, DISCORD_LINKS, TELEGRAM_LINKS, WHITEPAPER_LINKS, MEDIUM_LINKS, TWITTER_LINKS, DOCS_LINKS]

for project in PROJECT_TILES:
    project = str(project)
    project = re.findall(r'href=".+?"', project)
    PROJECTS.append(project)

# # Pattern Matching Other Links

github_link = re.compile(r'github')
docs_link = re.compile(r'gitbook')
twitter_link = re.compile(r'twitter.com')
discord_link = re.compile(r'discord')
telegram_link = re.compile(r't.me/')
medium_link = re.compile(r'medium')
to_delete = []

for other_link in PROJECTS:
    for item in LISTS:
        item.append('')
    for link in other_link:
        link = str(link)
        link = link.replace('href=', "")
        link = link.replace('"', "")
        if re.search(github_link, link):
            GITHUB_LINKS.pop()
            GITHUB_LINKS.append(link)
            to_delete.append(link)
        if re.search(twitter_link, link):
            TWITTER_LINKS.pop()
            TWITTER_LINKS.append(link)
            to_delete.append(link)
        if re.search(docs_link, link):
            DOCS_LINKS.pop()
            DOCS_LINKS.append(link)
            to_delete.append(link)
        if re.search(discord_link, link):
            DISCORD_LINKS.pop()
            DISCORD_LINKS.append(link)
            to_delete.append(link)
        if re.search(telegram_link, link):
            TELEGRAM_LINKS.pop()
            TELEGRAM_LINKS.append(link)
            to_delete.append(link)

            PROJECTS = [x for x in PROJECT_WEBSITES if x not in to_delete]
        print(GITHUB_LINKS)

pd.DataFrame(
    {'Github': GITHUB_LINKS, 'Docs': DOCS_LINKS,
     'Twitter': TWITTER_LINKS, 'Discord': DISCORD_LINKS, 'Telegram': TELEGRAM_LINKS}).to_csv(
    '../test_data_cosmos.csv')

print("Completed")
driver.quit()
