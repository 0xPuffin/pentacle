const db = require("./db");
const helper = require("../../utils/helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query("SELECT * FROM project OFFSET $1 LIMIT $2", [
    offset,
    config.listPerPage,
  ]);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

function validateCreate(project) {
  let messages = [];

  console.log(project);

  if (!project) {
    messages.push("No object is provided");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(project) {
  validateCreate(project);

  const result = await db.query(
    "INSERT INTO project(name) VALUES (bob) RETURNING *",
    [project.project_name]
  );
  let message = "Error in creating project";

  if (result.length) {
    message = "Project created successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
};
