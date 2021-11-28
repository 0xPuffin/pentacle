const db = require("./db");
const helper = require("../../utils/helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT project.project_id, " +
      "project.name AS project_name, " +
      "project.description, " +
      "tag.name AS tag_name " +
      "FROM project " +
      "JOIN project_tag " +
      "ON project.project_id = project_tag.project_id " +
      "JOIN tag " +
      "ON tag.tag_id = project_tag.tag_id " +
      "WHERE tag.tag_id = 1 " +
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

function validateCreate(projectAmm) {
  let messages = [];

  console.log(projectAmm);

  if (!projectAmm) {
    messages.push("No object is provided");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(projectAmm) {
  validateCreate(projectAmm);

  const result = await db.query(
    "INSERT INTO projectAmm(name) VALUES (bob) RETURNING *",
    [projectAmm.projectAmm_name]
  );
  let message = "Error in creating projectAmm";

  if (result.length) {
    message = "Project created successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
};
