const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query1 = "SELECT * FROM users WHERE email = $1 AND password = $2";

    pool.query(query1, [email, password], function(err, results) {});
});