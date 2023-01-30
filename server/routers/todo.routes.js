// call express router for create app routes
const router = require("express").Router();

// test route function
const testFunc = (req, res) => {
  const resultObj = {};
  if (req.method === "POST") {
    resultObj.message = `the route ${req.path} on method ${req.method} is worked`;
    resultObj.body = req.body;
  } else {
    resultObj.message = `the route ${req.path} on method ${req.method} is worked`;
  }
  res.json(resultObj);
};

/**
 * method: GET
 * status: PUBLIC
 * route: /api/v2/
 * description: get all user todo
 */
router.get("/", testFunc);

/**
 * method: GET
 * status: PUBLIC
 * route: /api/v2/:id
 * description: get one user todo
 */
router.get("/:id", testFunc);

/**
 * method: POST
 * status: PUBLIC
 * route: /api/v2/
 * description: create one user todo
 */
router.post("/", testFunc);

/**
 * method: DELETE
 * status: PUBLIC
 * route: /api/v2/:id
 * description: delete one user todo
 */
router.delete("/:id", testFunc);

/**
 * method: PATCH
 * status: PUBLIC
 * route: /api/v2/:id
 * description: update one user todo
 */
router.patch("/:id", testFunc);

// export all todo routes
module.exports = router;
