// call express router for create app routes
const router = require("express").Router();
const { createNewTodo, getAllUserTodo, getOneUserTodo, deleteOneUserTodo } = require("../controllers/todoController");

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
router.get("/", getAllUserTodo);

/**
 * method: GET
 * status: PUBLIC
 * route: /api/v2/:id
 * description: get one user todo
 */
router.get("/:id", getOneUserTodo);

/**
 * method: POST
 * status: PUBLIC
 * route: /api/v2/
 * description: create new user todo
 */
router.post("/", createNewTodo);

/**
 * method: DELETE
 * status: PUBLIC
 * route: /api/v2/:id
 * description: delete one user todo
 */
router.delete("/:id", deleteOneUserTodo);

/**
 * method: PATCH
 * status: PUBLIC
 * route: /api/v2/:id
 * description: update one user todo
 */
router.patch("/:id", testFunc);

// export all todo routes
module.exports = router;
