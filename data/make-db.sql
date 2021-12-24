DROP TABLE project;
DROP TABLE project_tag;
DROP TABLE article;
DROP TABLE article_tag;
DROP TABLE education;
DROP TABLE education_tag;
DROP TABLE event;
DROP TABLE event_tag;
CREATE TABLE project
(
    project_id      serial primary key,
    name            varchar(4000),
    coingecko_id    varchar(400),
    description     varchar(4000),
    token_image_url varchar(4000),
    ticker          varchar(4000),
    website_url     varchar(4000),
    webapp_url      varchar(4000),
    contract_url    varchar(4000),
    coingecko_url   varchar(4000),
    llama_url       varchar(4000),
    dune_url        varchar(4000),
    rekt_url        varchar(4000),
    whitepaper_url  varchar(4000),
    github_url      varchar(4000),
    docs_url        varchar(4000),
    twitter_url     varchar(4000),
    discord_url     varchar(4000),
    telegram_url    varchar(4000),
    medium_url      varchar(4000)
);
CREATE TABLE project_tag
(
    project_id int,
    tag_id     int
);
CREATE TABLE article
(
    article_id  serial primary key,
    title       varchar(4000),
    article_url varchar(4000)
);
CREATE TABLE article_tag
(
    article_id int,
    tag_id     int
);
CREATE TABLE education
(
    education_id serial primary key,
    name         varchar(4000),
    what         varchar(4000),
    why          varchar(4000),
    risk         varchar(4000),
    reward       varchar(4000)
);
CREATE TABLE education_tag
(
    education_id int,
    tag_id       int
);
CREATE TABLE event
(
    event_id       serial primary key,
    event_name     varchar(4000),
    start          varchar(4000),
    finish         varchar(4000),
    location       varchar(4000),
    event_url      varchar(4000),
    event_twitter  varchar(4000),
    event_telegram varchar(4000)
);
CREATE TABLE event_tag
(
    event_id int,
    tag_id   int
);
COPY project FROM '/Users/pentaclexyz/projects/pentacle/data/project-no-tags.csv' delimiter ',' CSV HEADER;
COPY project_tag FROM '/Users/pentaclexyz/projects/pentacle/data/project_tags.csv' delimiter ',' CSV HEADER;
COPY article FROM '/Users/pentaclexyz/projects/pentacle/data/article-no-tags.csv' delimiter ',' CSV HEADER;
COPY article_tag FROM '/Users/pentaclexyz/projects/pentacle/data/article_tags.csv' delimiter ',' CSV HEADER;
COPY education FROM '/Users/pentaclexyz/projects/pentacle/data/education-no-tags.csv' delimiter ',' CSV HEADER;
COPY education_tag FROM '/Users/pentaclexyz/projects/pentacle/data/education_tags.csv' delimiter ',' CSV HEADER;
COPY event FROM '/Users/pentaclexyz/projects/pentacle/data/event-no-tags.csv' delimiter ',' CSV HEADER;
COPY event_tag FROM '/Users/pentaclexyz/projects/pentacle/data/event_tags.csv' delimiter ',' CSV HEADER;