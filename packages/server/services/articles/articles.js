const db = require("../db");
const helper = require("../../helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT article.article_id, " +
      "article.title AS article_name, " +
      "article.article_url, " +
      "tag.name AS tag_name " +
      "FROM article " +
      "JOIN article_tag " +
      "ON article.article_id = article_tag.article_id " +
      "JOIN tag " +
      "ON tag.tag_id = article_tag.tag_id " +
      // "WHERE tag.name = 'link' " +
      // "ORDER BY article.title ASC "+
      "OFFSET $1 LIMIT $2",
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

function validateCreate(article) {
  let messages = [];

  console.log(article);

  if (!article) {
    messages.push("No object is provided");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(article) {
  validateCreate(article);

  const result = await db.query(
    "INSERT INTO article(name) VALUES (bob) RETURNING *",
    [article.name]
  );
  let message = "Error in creating article";

  if (result.length) {
    message = "Project created successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
};
