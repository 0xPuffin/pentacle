import pandas as pd

project_csvs = ["eth-projects", "sol-projects"]

print("--- Potential Duplicate Finder ---")
for csv in project_csvs:
    df = pd.read_csv(f"../{csv}.csv")
    print(f"\n// Checking {csv}.csv for potential duplicate data //\n")
    duplicates_website_url = df[df.duplicated(subset='website_url', keep=False)]
    duplicates_project_name = df[df.duplicated(subset='name', keep=False)]

    print("Potential Duplicate Project Names:", df.duplicated(subset='name').sum())
    print(duplicates_project_name)
    print("Potential Duplicate Website URLs:", df.duplicated(subset='website_url').sum())
    print(duplicates_website_url)

