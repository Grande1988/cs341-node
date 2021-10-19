




const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://cluster0.sll31.mongodb.net/myFirstDatabase --username reddgl'
    )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {}
      return_db;
    }
throw 'No database found!';