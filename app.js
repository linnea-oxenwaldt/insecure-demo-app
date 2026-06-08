const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query1 = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'";

    pool.query(query1, [], function(err, results) {});
});