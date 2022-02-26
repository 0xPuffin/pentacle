const db = require("../db");
const helper = require("../../helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT skill.skill_id, " +
      "skill.title AS skill_title, " +
      "skill.text AS skill_text, " +
      "tag.name AS tag_name " +
      "FROM skill " +
      "JOIN skill_tag " +
      "ON skill.skill_id = skill_tag.skill_id " +
      "JOIN tag " +
      "ON tag.tag_id = skill_tag.tag_id " +
      "WHERE tag.name = 'skill' " +
      "UPDATE skill " +
      "SET skill.text = E(skill.text) " +
      "REPLACE (skill.text, '\n', '\r') " +
      "ORDER BY skill.title ASC " +
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
