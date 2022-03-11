import pandas as pd


def twitter_list_to_dataframe():
    """turn an exported twitter list from .txt format into a .csv compatible with database schema"""

    twitter_list_input = input("Enter the name of the Twitter List to work with (xyz_twitter_list.txt): ")

    with open(f'../twitter_lists/{twitter_list_input}_twitter_list.txt') as file:
        twitter_handles = file.readlines()
        file.close()

        twitter_handles = [handle.replace("@", "https://twitter.com/").replace("\n", "") for handle in twitter_handles]
        pd.DataFrame({'twitter_url': twitter_handles}).to_csv(f"../twitter_lists/{twitter_list_input}_twitter_dataframe.csv")

    print(f"Converted {twitter_list_input}_twitter_list.txt to {twitter_list_input}_dataframe.csv")


def dataframe_to_twitter_list():
    """turn a .csv with a twitter_url column into an importable twitter list"""

    dataframe_input = input("Enter the name of the Dataframe to work with (.csv): ")

    df = pd.read_csv(f'../{dataframe_input}.csv')
    twitter_urls = df["twitter_url"].dropna().to_list()
    twitter_handles = [url.replace("https://twitter.com/", "@") for url in twitter_urls]

    with open(f"../twitter_lists/{dataframe_input}_twitter_list.txt", "w") as file:

        twitter_handles = "\n".join(twitter_handles)
        file.write(twitter_handles)
        file.close()

    print(f"Converted {dataframe_input}.csv to {dataframe_input}_twitter_list.txt")

def menu():
    while True:
        print(
            "\nTwitter List <-> Dataframe Tool\n\nChoose an action:\n"
            "\n1) Twitter List -> Dataframe\n2) Dataframe -> ""Twitter List\n""3) Exit")
        option_selection = int(input("\nSelection Choice (1-3): "))

        if option_selection == 1:
            twitter_list_to_dataframe()
        elif option_selection == 2:
            dataframe_to_twitter_list()
        elif option_selection == 3:
            exit()
        else:
            print("Try again")


if __name__ == "__main__":
    menu()
