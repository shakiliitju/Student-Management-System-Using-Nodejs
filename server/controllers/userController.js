const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// View Users
exports.view = (req, res) => {
  
  connection.query('SELECT * FROM student WHERE status = "active" LIMIT 5', (err, rows) => {
    
    if (!err) {
      let removedUser = req.query.removed;
      res.render('home', { rows, removedUser });
    } else {
      console.log(err);
    }
    console.log('The data from student table: \n', rows);
  });
}


// View result
exports.views = (req, res) => {
  
  connection.query('SELECT DISTINCT id  FROM result ORDER BY id LIMIT 5', (err, rows) => {
    
    if (!err) {
      let removedUser = req.query.removed;
      res.render('result', { rows, removedUser });
    } else {
      console.log(err);
    }
    console.log('The data from result table: \n', rows);
  });
}


// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  
  connection.query('SELECT * FROM student WHERE id LIKE ? OR name LIKE ? OR gender LIKE ? OR department LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%',  '%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if(rows ==0 ){
      res.render('home', { alert: 'Student Not found.' });

    }
   else  if (!err) {
      res.render('home', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from student table: \n', rows);
  });
}

exports.finds = (req, res) => {
  let searchTerm = req.body.sr;
  
  connection.query('SELECT DISTINCT id FROM result WHERE id LIKE ?', ['%' + searchTerm + '%'  ], (err, rows) => {
    if(rows ==0 ){
      res.render('result', { alert: 'Result Not found.' });
    }
    else if (!err) {
      res.render('result', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from result table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('add-user');
}

// Add new user
exports.create = (req, res) => {
  const { id, name, batch, gender, department, phone, email } = req.body;
  let searchTerm = req.body.search;


  connection.query('INSERT INTO student SET id = ?, name = ?, batch = ?, gender = ?, department = ?, phone = ?, email = ?', [id, name, batch, gender, department, phone, email], (err, rows) => {
    if (!err) {
      res.render('add-user', { alert: 'Student added successfully.' });
    } else {
      console.log(err);
    }
    console.log('The data from student table: \n', rows);
  });
}





exports.forms = (req, res) => {
  res.render('add-result');
}

// Add new result
exports.creates = (req, res) => {
  const { id, semester, cgpa } = req.body;
  let searchTerm = req.body.search;


  connection.query('INSERT INTO result SET id = ?, semester = ?, cgpa = ?', [id, semester, cgpa], (err, rows) => {
    if (!err) {
      res.render('add-result', { alert: 'Result added successfully.' });
    } else {
      console.log(err);
    }
    console.log('The data from result table: \n', rows);
  });
}




// Edit user
exports.edit = (req, res) => {

  connection.query('SELECT * FROM student WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from student table: \n', rows);
  });
}


// Update User
exports.update = (req, res) => {
  const { id, name, batch, gender, department, phone, email } = req.body;

  connection.query('UPDATE student SET id = ?, name = ?, batch = ?, gender = ?, department = ?, phone = ?, email = ? WHERE id = ?', [ id, name, batch, gender, department, phone, email, req.params.id], (err, rows) => {
    if (!err) {
      connection.query('SELECT * FROM student WHERE id = ?', [req.params.id], (err, rows) => { 
        if (!err) {
          res.render('edit-user', { rows, alert: `${name} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from student table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from student table: \n', rows);
  });
}

// Delete User
exports.delete = (req, res) => {

  connection.query('DELETE FROM student WHERE id = ?', [req.params.id], (err, rows) => {
    if(!err) {
      res.redirect('/');
    } else {
      console.log(err);
    }
    console.log('The data from student table: \n', rows);
  });

  // Hide a record

  // connection.query('UPDATE student SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
  //   if (!err) {
  //     let removedUser = encodeURIComponent('Student successeflly removed.');
  //     res.redirect('/?removed=' + removedUser);
  //   } else {
  //     console.log(err);
  //   }
  //   console.log('The data from student table are: \n', rows);
  // });
}

// View Users
exports.viewall = (req, res) => {
  connection.query('SELECT * FROM student WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from student table: \n', rows);
  });
}


// View Results by id
exports.viewalls = (req, res) => {
  // connection.query('SELECT * FROM student INNER JOIN result ON student.id = result.id WHERE student.id = ?', [req.params.id], (err, rows) => {
     connection.query('SELECT * FROM student NATURAL JOIN result WHERE id = ? ORDER BY semester', [req.params.id], (err, rows) => {

    if (!err) {
      res.render('view-result', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from result table: \n', rows);
  });
}
