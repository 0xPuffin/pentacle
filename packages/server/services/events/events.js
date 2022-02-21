const db = require("../db");
const helper = require("../../helper");
const config = require("../../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT event.event_id, " +
      "event.event_name, " +
      "event.start, " +
      "event.finish, " +
      "event.location, " +
      "event.event_url, " +
      "event.event_twitter, " +
      "event.event_telegram " +
      // "tag.name AS tag_name " +
      "FROM event " +
      "JOIN event_tag " +
      "ON event.event_id = event_tag.event_id " +
      "JOIN tag " +
      "ON tag.tag_id = event_tag.tag_id " +
      "WHERE tag.name = 'event' " +
      "ORDER BY event.start ASC " +
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

function validateCreate(event) {
  let messages = [];

  console.log(event);

  if (!event) {
    messages.push("No object is provided");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(event) {
  validateCreate(event);

  const result = await db.query(
    "INSERT INTO education(name) VALUES (bob) RETURNING *",
    [event.name]
  );
  let message = "Error in creating event";

  if (result.length) {
    message = "Project created successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
};
