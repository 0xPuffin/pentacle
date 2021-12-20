const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
      "SELECT project.project_id, " +
      "project.name AS project_name, " +
"project.coingecko_id, " +
      "project.description, " +
      "project.ticker, " +
      "project.website_url, " +
      "project.webapp_url, " +
      "project.contract_url, " +
      "project.coingecko_url, " +
      "project.whitepaper_url, " +
      "project.github_url, " +
      "project.docs_url, " +
      "project.twitter_url, " +
      "project.discord_url, " +
      "project.telegram_url, " +
      "project.medium_url, " +
      "tag.name AS tag_name " +
      "FROM project " +
      "JOIN project_tag " +
      "ON project.project_id = project_tag.project_id " +
      "JOIN tag " +
      "ON tag.tag_id = project_tag.tag_id " +
      "WHERE tag.name = 'defi-tool' " +
      "ORDER BY project.name ASC "+
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
    [project.name]
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
