const express = require("express");
const http = require("http");
const request = require("request");
const router = express.Router();

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const APIManagementKey = "MY_AUTH0_API_KEY";
function updatePatientLogs(user_id, log, res) {
  const URL = `https://${AUTH0_DOMAIN}/api/v2/users/` + user_id;

  request(
    {
      url: URL,
      body: {
        user_metadata: {
          "logs": log,
        },
      },
      json: true,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + APIManagementKey,
      },
    },
    function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        console.log(response.statusCode, body);
      }
    }
  );

  res.send(log);
}

function getPatientLogs(res) {
  const URL = `https://${AUTH0_DOMAIN}/api/v2/users`;

  request(
    {
      url: URL,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + APIManagementKey,
      },
      params: {
        fields: "user_metadata.logs",
        search_engine: "v3",
      },
    },
    function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        console.log(response.statusCode, body);
        logs = body;
        res.send(logs);
      }
    }
  );
}

router.use(function timeLog(req, res, next) {
  next();
});

router.post("/logs", function (req, res) {
  getPatientLogs(res);
});

router.post("/log", function (req, res) {
  const log = req.body.logs;
  updatePatientLogs(req.user.sub, log, res);
});

module.exports = router;
