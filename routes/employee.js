const employeeRoutes = (app, fs) => {
    // variables
    const dataPath = './data/employee.json';
  
    // READ
    app.get('/employee', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  
  app.post('/employee', (req, res) => {
    readFile(data => {
      // Note: this needs to be more robust for production use. 
      // e.g. use a UUID or some kind of GUID for a unique ID value.
      const newEmployeeId = Date.now().toString();
  
      // add the new user
      data[newEmployeeId] = req.body;
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('new Employee added');
      });
    }, true);
  });
  app.put('/employee/:id', (req, res) => {
    readFile(data => {
      // add the new user
      const employeeId = req.params['id'];
      data[employeeId] = req.body;
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`employee id:${employeeId} updated`);
      });
    }, true);
  });
  app.delete('/employee/:id', (req, res) => {
    readFile(data => {
      // add the new user
      const employeeId = req.params['id'];
      delete data[employeeId];
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`employee id:${employeeId} removed`);
      });
    }, true);
  });
};
  module.exports = employeeRoutes;