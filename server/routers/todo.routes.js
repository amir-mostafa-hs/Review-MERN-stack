// call express router for create app routes
const router = require("express").Router();

/**
 * method: GET
 * status: PUBLIC
 * route: /api/v2/
 * description: get all user todo
 */
router.get("/");

/**
 * method: GET
 * status: PUBLIC
 * route: /api/v2/:id
 * description: get one user todo
 */
router.get("/:id");

/**
 * method: POST
 * status: PUBLIC
 * route: /api/v2/
 * description: create one user todo
 */
router.post("/");

/**
 * method: DELETE
 * status: PUBLIC
 * route: /api/v2/:id
 * description: delete one user todo
 */
router.delete("/:id");

/**
 * method: PATCH
 * status: PUBLIC
 * route: /api/v2/:id
 * description: update one user todo
 */
router.patch("/:id");

// export all todo routes
module.exports = router;
