const db = require("../db");
const helper = require("../../helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query("SELECT name FROM tag OFFSET $1 LIMIT $2", [
    offset,
    config.listPerPage,
  ]);
  // const rows = await db.query(
  //     "SELECT event_id, " +
  //     "FROM event_tag " +
  //     "OFFSET $1 LIMIT $2",
  //     [offset, config.listPerPage]
  // );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

function validateCreate(tag) {
  let messages = [];

  console.log(tag);

  if (!tag) {
    messages.push("No object is provided");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(tag) {
  validateCreate(tag);

  const result = await db.query(
    "INSERT INTO tag(tag_name) VALUES (bob) RETURNING *",
    [tag.tag_name]
  );
  let message = "Error in creating tag";

  if (result.length) {
    message = "tag created successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
};
