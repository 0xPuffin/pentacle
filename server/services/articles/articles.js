const db = require("../projects/db");
const helper = require("../../helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
      "SELECT article.article_id, " +
      "article.title AS article_name, " +
      "article.article_url " +
      "FROM article " +
      "JOIN article_tag " +
      "ON article.article_id = article_tag.article_id " +
      "JOIN tag " +
      "ON tag.tag_id = article_tag.tag_id " +
      // "WHERE tag.name = 'amm' " +
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

function validateCreate(education) {
  let messages = [];

  console.log(education);

  if (!education) {
    messages.push("No object is provided");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(education) {
  validateCreate(education);

  const result = await db.query(
    "INSERT INTO education(name) VALUES (bob) RETURNING *",
    [education.name]
  );
  let message = "Error in creating education";

  if (result.length) {
    message = "Project created successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
};
