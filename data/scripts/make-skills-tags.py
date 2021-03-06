import pandas as pd

# Set pandas display options
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('display.float_format', lambda x: '%.3f' % x)
pd.set_option('display.width', 1500)

dt = pd.read_csv("../tags.csv", index_col="tag_id")
tag_dict = dt.T.to_dict('records')[0]
tag_dict = dict((v,k) for k,v in tag_dict.items())

df = pd.read_csv("../skill.csv", index_col="skill_id")

map_df = df[['title', 'tag1', 'tag2', 'tag3']].copy()
map_df['tag1'] = map_df['tag1'].map(tag_dict)
map_df['tag2'] = map_df['tag2'].map(tag_dict)
map_df['tag3'] = map_df['tag3'].map(tag_dict)

df1 = map_df[['tag1']].copy().dropna()
df2 = map_df[['tag2']].copy().dropna()
df3 = map_df[['tag3']].copy().dropna()

df1.columns = ['tag_id']
df2.columns = ['tag_id']
df3.columns = ['tag_id']

new_df = pd.concat([df1, df2], axis=0, sort=False)
new_df = pd.concat([new_df, df3], axis=0, sort=False)

new_df['tag_id'] = new_df['tag_id'].astype(int)

print(new_df)
new_df.to_csv('../skill-tags.csv')
