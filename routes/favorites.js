var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'rho',
};

var pool = new pg.Pool(config);

// router.get('/', function (req, res) {
//   var search = req.query.q;
//
//   pool.connect(function (err, client, done) {
//     if (err) {
//       console.log('Error connecting to the DB', err);
//       res.sendStatus(500);
//       done();
//       return;
//     }
//     //if search has some value
//     if (search) { //search has a value which it will if there is a query it will be true
//       // then run the query with the parameter
//       client.query('SELECT * FROM treats WHERE name ILIKE $1;', ['%' + search '%'], function (err, result) {
//         done(); //ILIKE caseinsenstive
//         if (err) {
//           console.log('Error querying the DB', err);
//           res.sendStatus(500);
//           return;
//         }
//       )};
//   }else {
//       // else just select everything
//       client.query('SELECT * FROM treats;', function (err, result) {
//         done();
//         if (err) {
//           console.log('Error querying the DB', err);
//           res.sendStatus(500);
//           return;
//         }
//       });
//
//       console.log('Got rows from the DB:', result.rows);
//       res.send(result.rows);
//     }
//   });
// });
//
// /** ---- PUT YOUR CODE BELOW ---- **/
//
// // POST /treats
// router.post('/', function (req, res) {
//   pool.connect(function (err, client, done) {
//     try {
//       if (err) {
//         console.log('Error connecting to the database', err);
//         res.sendStatus(500);
//         return;
//       }
//
//       client.query('INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3) returning *;',
//                   [req.body.name, req.body.description, req.body.pic],
//                   function (err, result) {
//                     if (err) {
//                       console.log('Error querying the database', err);
//                       res.sendStatus(500);
//                       return;
//                     }
//
//                     console.log('Got rows from the database: ', result.rows);
//                     res.send(result.rows);
//                   });
//     } finally {
//       done();
//     }
//   });
// });
//
// // PUT /treats/<id>
// router.put('/:id', function (req, res) {
//   var id = parseInt(req.params.id);
//   pool.connect(function (err, client, done) {
//     try {
//       if (err) {
//         console.log('Error connecting the DB', err);
//         res.sendStatus(500);
//         return;
//       }
//
//       client.query('UPDATE treats SET name=$1, description=$2, pic=$3 WHERE id=$4 RETURNING *;',
//       [req.body.name, req.body.description, req.body.pic, id],
//       function (err, result) {
//         if (err) {
//           console.log('Error querying database', err);
//           res.sendStatus(500);
//         } else {
//           res.send(result.rows);
//         }
//       });
//     } finally {
//       done();
//     }
//   });
// });
//
// // DELETE /treats/<id>
// router.delete('/:id', function (req, res) {
//   var id = parseInt(req.params.id);
//
//   pool.connect(function (err, client, done) {
//     try {
//       if (err) {
//         console.log('Error connecting to database', err);
//         res.sendStatus(500);
//         return;
//       }
//
//       client.query('DELETE FROM treats WHERE id=$1;', [id], function (err) {
//         if (err) {
//           console.log('Error querying the database', err);
//           res.sendStatus(500);
//           return;
//         }
//
//         res.sendStatus(204);
//       });
//     } finally {
//       done();
//     }
//   });
// });


module.exports = router;
