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
    driver.get('https://ignition.devpost.com/project-gallery')
    time.sleep(5)

if RUN_SCRAPER is True:

    number_of_pages = 21
    page_number = 1
    source_code = []

    while page_number <= number_of_pages:
        source_code.append(driver.page_source)
        print("Page {} has been scraped".format(page_number))
        page_number += 1
        try:
            driver.find_element_by_css_selector("a[rel='next']").click()
            time.sleep(3)
        except Exception:
            print("There is no next page")

    driver.quit()

    with open("solana_devpost_data.html", "w") as file:
        for page in source_code:
            file.write(page)

    print(source_code)

PROJECT_DEVPOST_LINKS = []
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
PROJECT_DEMOS = []

LISTS = [GITHUB_LINKS, DISCORD_LINKS, TELEGRAM_LINKS, WHITEPAPER_LINKS, MEDIUM_LINKS, TWITTER_LINKS, DOCS_LINKS, PITCH_DECK_LINKS, APP_LINKS]

# Project Devpost Link
soup = BeautifulSoup(open("solana_devpost_data.html"), "html.parser")
for link in soup.find_all("a", href=re.compile("/software/")):
   PROJECT_DEVPOST_LINKS.append(link.get('href'))

# PROJECT_DEVPOST_LINKS = PROJECT_DEVPOST_LINKS[:8]

for project in PROJECT_DEVPOST_LINKS:
    URL = project
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    for item in LISTS:
        item.append('')

# Project Name
    try:
        project_name = soup.find(id = "app-title")
        PROJECT_NAMES.append(project_name.text)
    except Exception:
        PROJECT_NAMES.append("")

# Project Description
    try:
        project_description = soup.find('p', class_ = "large")
        PROJECT_DESCRIPTIONS.append(project_description.text.strip())
    except Exception:
        PROJECT_DESCRIPTIONS.append("")


# Add Element into each list to ensure array sizes are equal when exporting CSV
# Project Website & Other Links
    try:
        for project_website in soup.find_all(target="_blank", href=True):
            if project_website.get('href') != 'https://www.facebook.com/devposthacks' and project_website.get('href') != 'https://www.youtube.com/playlist?list=PLmJ41elIxG7bRbhhCUQun3e4XNeyKc_-o':
                PROJECT_WEBSITES.append(project_website.get('href'))
    except Exception:
        PROJECT_WEBSITES.append("")


    # # Pattern Matching Other Links

    github_link = re.compile(r'github')
    docs_link = re.compile(r'gitbook')
    twitter_link = re.compile(r'twitter.com')
    app_link = re.compile(r'http[s]?://app.')
    discord_link = re.compile(r'discord')
    telegram_link = re.compile(r't.me/')
    pitch_deck_link = re.compile(r'docsend')
    medium_link = re.compile(r'medium')
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

    PROJECT_WEBSITES = [x for x in PROJECT_WEBSITES if x not in to_delete]
    PROJECT_WEBSITES_STRING.append(','.join(PROJECT_WEBSITES))
    PROJECT_WEBSITES = []

# Project Demo
    try:
        driver.get(project)
        time.sleep(1)
        driver.switch_to.frame(driver.find_element_by_xpath('//iframe[starts-with(@src, "https://www.youtube.com/embed")]'))
        iframe_source = driver.page_source
        soup2 = BeautifulSoup(iframe_source, 'html.parser')
        project_demo = soup2.select("[rel='canonical']")[0]['href']
        PROJECT_DEMOS.append(project_demo)
    except Exception:
        PROJECT_DEMOS.append("")

pd.DataFrame({'Project Name':PROJECT_NAMES,'Devpost Link':PROJECT_DEVPOST_LINKS, 'Project Description':PROJECT_DESCRIPTIONS, 'Website': PROJECT_WEBSITES_STRING, 'App': APP_LINKS, 'Github': GITHUB_LINKS, 'Docs': DOCS_LINKS, 'Twitter': TWITTER_LINKS, 'Discord': DISCORD_LINKS, 'Telegram': TELEGRAM_LINKS, 'Pitch Deck': PITCH_DECK_LINKS, 'Project Demo': PROJECT_DEMOS}).to_csv(
    'test_data_devpost.csv')

print("Scrape Complete")