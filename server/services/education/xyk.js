const db = require("../projects/db");
const helper = require("../../helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
      // "SELECT * " +
      "SELECT education.education_id, " +
      "education.name AS education_name, " +
      "education.what, " +
      "education.why, " +
      "education.risk, " +
      "education.reward " +
      "FROM education " +
      "JOIN education_tag " +
      "ON education.education_id = education_tag.education_id " +
      "JOIN tag " +
      "ON tag.tag_id = education_tag.tag_id " +
      "WHERE tag.name = 'xyk' " +
      "ORDER BY education.name ASC "+
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
