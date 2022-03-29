import time
import re
from bs4 import BeautifulSoup
import requests
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

RUN_SCRAPER = False

options = Options()
options.headless = True
try:
    print("Checking Chrome Driver...")
    driver = webdriver.Chrome(options=options)
except Exception:
    print("\nSelenium Chrome Driver Not Compatible, Downloading Latest Driver")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    print("Driver Downloaded\n\nContinuing...\n")
    driver.get('https://solana.com/riptide/voting')
    time.sleep(5)

    if RUN_SCRAPER is True:
        source_code = driver.page_source
        driver.quit()
        print(source_code)

        driver.quit()

        with open("solana_riptide_data.html", "w") as file:
            file.write(source_code)

PROJECT_LINKS = []
PROJECT_NAMES = []
PROJECT_DESCRIPTIONS = []
PROJECT_WEBSITES = []
PROJECT_WEBSITES_STRING = []
GITHUB_LINKS = []
DISCORD_LINKS = []
TELEGRAM_LINKS = []
WHITEPAPER_LINKS = []
MEDIUM_LINKS = []
TWITTER_LINKS = []
DOCS_LINKS = []
PITCH_DECK_LINKS = []
APP_LINKS = []
PROJECT_PRESENTATIONS = []

LISTS = [GITHUB_LINKS, DISCORD_LINKS, TELEGRAM_LINKS, WHITEPAPER_LINKS, MEDIUM_LINKS, TWITTER_LINKS, DOCS_LINKS,
         PITCH_DECK_LINKS, APP_LINKS, PROJECT_PRESENTATIONS]

# Project Links
soup = BeautifulSoup(open("solana_riptide_data.html"), "html.parser")
for link in soup.find_all("a", href=re.compile("/riptide/voting/")):
    PROJECT_LINKS.append(link.get('href'))

for project in PROJECT_LINKS:
    URL = project
    page = requests.get(f'http://solana.com{URL}')
    print(page)
    soup = BeautifulSoup(page.content, 'html.parser')
    for item in LISTS:
        item.append('')

    # Project Name
    try:
        project_name = project.replace("/riptide/voting/", "")
        project_name = project_name.replace("-", " ").title()
        print(project_name)
        PROJECT_NAMES.append(project_name)
    except Exception:
        PROJECT_NAMES.append("")

    # Project Description
    try:
        PROJECT_DESCRIPTIONS.append("")
    except Exception:
        PROJECT_DESCRIPTIONS.append("")
        # going to do this manually since descriptions include a lot of other information on how to test for judges
        # this time

    # Add Element into each list to ensure array sizes are equal when exporting CSV
    # Project Website & Other Links
    try:
        for project_website in soup.find_all(target="_blank", href=True):
            PROJECT_WEBSITES.append(project_website.get('href'))
    except Exception:
        PROJECT_WEBSITES.append("")

    # Pattern Matching Other Links

    github_link = re.compile(r'github')
    docs_link = re.compile(r'gitbook')
    twitter_link = re.compile(r'twitter.com')
    app_link = re.compile(r'http[s]?://app.')
    discord_link = re.compile(r'discord')
    telegram_link = re.compile(r't.me/')
    pitch_deck_link = re.compile(r'docsend')
    medium_link = re.compile(r'medium')
    presentation_link = re.compile(r'drive.google.com/')
    to_delete = []

    for other_link in PROJECT_WEBSITES:
        if re.search(github_link, other_link):
            GITHUB_LINKS.pop()
            GITHUB_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(twitter_link, other_link):
            TWITTER_LINKS.pop()
            TWITTER_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(docs_link, other_link):
            DOCS_LINKS.pop()
            DOCS_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(app_link, other_link):
            APP_LINKS.pop()
            APP_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(discord_link, other_link):
            DISCORD_LINKS.pop()
            DISCORD_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(telegram_link, other_link):
            TELEGRAM_LINKS.pop()
            TELEGRAM_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(pitch_deck_link, other_link):
            PITCH_DECK_LINKS.pop()
            PITCH_DECK_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(medium_link, other_link):
            MEDIUM_LINKS.pop()
            MEDIUM_LINKS.append(other_link)
            to_delete.append(other_link)
        if re.search(presentation_link, other_link):
            PROJECT_PRESENTATIONS.pop()
            PROJECT_PRESENTATIONS.append(presentation_link)
            to_delete.append(other_link)

    PROJECT_WEBSITES = [x for x in PROJECT_WEBSITES if x not in to_delete]
    PROJECT_WEBSITES_STRING.append(','.join(PROJECT_WEBSITES))
    PROJECT_WEBSITES = []

pd.DataFrame(
    {'Project Name': PROJECT_NAMES, 'Project Description': PROJECT_DESCRIPTIONS, 'Website': PROJECT_WEBSITES_STRING,
     'App': APP_LINKS, 'Github': GITHUB_LINKS, 'Docs': DOCS_LINKS, 'Twitter': TWITTER_LINKS, 'Discord': DISCORD_LINKS,
     'Telegram': TELEGRAM_LINKS, 'Pitch Deck': PITCH_DECK_LINKS, 'Project Demo': PROJECT_PRESENTATIONS}).to_csv(
    'test_data_riptide.csv')

print("Scrape Complete")
