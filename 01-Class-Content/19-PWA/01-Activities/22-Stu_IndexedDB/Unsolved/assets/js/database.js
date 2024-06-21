import { openDB } from 'idb';
// import the idb library
//we define a function to initialize the db
const initdb = async () =>

// TODO: Add a comment explaining what this method does
//openDB creates a database named "todos" with version 1 defined
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // upgrade() creates a schema
    upgrade(db) {
      //check if database exists. If not, create it. 
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // the database is created or "stored" in db.
      // define a column "id" and set it to autoincrement
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

  //call the initialization
initdb();
