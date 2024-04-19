/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */
/* "postgresql://postgres@localhost/postgres" */
require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://poealumz:tXC5Dx2CyUMa4vdJs-MFa-E1iWarjQhU@drona.db.elephantsql.com/poealumz",
  DATABASE_URL_DEVELOPMENT = "postgres://tlpporly:47_n-aSjEAkfUDSKRa3YLCgqpdc1FHUC@drona.db.elephantsql.com/tlpporly",
  DATABASE_URL_TEST = "postgres://gcnezozo:dM0nS37SFGDArZ0ZfGEAFmt5M1UfLHdj@drona.db.elephantsql.com/gcnezozo",
  DATABASE_URL_PREVIEW = "postgres://jonybhid:LZM7Y7RM3e0AHZztJnaOO2hCKghANZkS@drona.db.elephantsql.com/jonybhid",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
    debug: !!DEBUG,
  },
};
