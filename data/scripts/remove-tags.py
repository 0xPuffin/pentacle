import pandas as pd

tagged_csvs = ["article", "education", "event", "eth-projects", "sol-projects", "skill"]

for csv in tagged_csvs:
    df = pd.read_csv(f"{csv}.csv")
    df.drop(df.columns[df.columns.str.contains('tag')], axis=1, inplace=True)
    df.to_csv(f"{csv}-no-tags.csv", index=False)


