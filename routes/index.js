var express = require('express');
var router = express.Router();
const mysqlConfig= require('../msqlconnect');
const storage = require('node-sessionstorage')





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/alldonations',async (req,res,next) =>{
    let sql = `SELECT * FROM donors_tbl`;
    await mysqlConfig.query(sql,(err,result)=>{
        if(err){
            res.send();
        }else {
             res.send(result);
        }
    })

});
router.post('/donations', async (req, res, next) => {
  // TODO: insert data into table
  const donorDetails=req.body;
  var sql = 'INSERT INTO donors_tbl SET ?';
    //let sql = `INSERT INTO donors (first_name,) VALUES (?, ?);`;

  await mysqlConfig.query(sql,donorDetails,function(err, result){
      if (err) {
          res.send(err)
          next(err) // Pass errors to Express.
      } else {
         // window.sessionStorage.setItem('userID', result.insertId);
          res.status(200).send({'message':'success'})

      }
      });
});

//get single item
router.get('/singledonor',  async (req, res, next) => {
    var email = 'loise@gmail.com'
    await mysqlConfig.query('SELECT * FROM donors_tbl WHERE email = ?', email, function (err, result) {
        if (err) {
            res.send(err)
            next(err) // Pass errors to Express.
        } else {
            // window.sessionStorage.setItem('userID', result.insertId);
            res.send(result[0])

        }
        });
    });

// update single donor
router.put('/updatedonor',  async (req, res, next) => {
    var email = 'loise@gmail.com';
    const donorDetails=req.body;
    await mysqlConfig.query('UPDATE donors_tbl SET donorDetails = ? WHERE email = ?', email, function (err, result) {
        if (err) {
             res.send(err)
            next(err) // Pass errors to Express.
        } else {
             res.status(200).send({'message':'success'})

        }
    });
});
    module.exports = router;

