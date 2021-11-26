const db = require("./db");
const helper = require("../../utils/helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query("SELECT * FROM project_tag OFFSET $1 LIMIT $2", [
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

function validateCreate(project_tag) {
  let messages = [];

  console.log(project_tag);

  if (!project_tag) {
    messages.push("No object is provided");
  }

  // if (!project-elements.quote) {
  //     messages.push('Quote is empty');
  // }
  //
  // if (!project-elements.author) {
  //     messages.push('Author is empty');
  // }
  //
  // if (project-elements.quote && quote.quote.length > 255) {
  //     messages.push('Quote cannot be longer than 255 characters');
  // }
  //
  // if (project-elements.author && quote.author.length > 255) {
  //     messages.push('Author name cannot be longer than 255 characters');
  // }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(tag) {
  validateCreate(tag);

  const result = await db.query(
    "INSERT INTO tag(name) VALUES (bob) RETURNING *",
    [tag.name]
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
