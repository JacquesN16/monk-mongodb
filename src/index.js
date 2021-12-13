const url = 'localhost:27017/data'
const db = require('monk')(url);


//Create initial database
const todos = db.get('todos');
db.then(()=>{
    console.log('Connected to db')  
})

////
//Create:  insert one with {}, insert many with [{},{}]
    // todos.insert({todo:'second thing'})
    // .catch((err)=>console.log(err))
    // .then(()=>db.close)

//Create many
    // todos.insert([
    //     {todo:'third thing', done:'false'},
    //     {todo:'fourth thing',done:'false'},
    //     {todo:'fifth thing', done:'false'},
    // ])
    // .catch((err)=>console.log(err))
    // .then(()=>db.close)

//Read:
    //readOne: 
        // todos.find(
        //     {"todo":"first thing"})
        // .catch((err)=>console.log(err))
        // .then((data)=>console.log(data))
    //readMany: pass nothing into first argument, second argument is the search key
        // todos
        // .find({},'todo')
        // .then((doc)=>console.log(doc))

//Update:
    //Update one:
        // todos
        // .findOneAndUpdate({todo:'fourth thing'},{$set: {todo:'fourth BUT EDIT thing'} })
        // .then((doc)=>console.log(doc))
    //Update many: query and newValue need to be set or error
        // const query = {done:'false'}
        // const newValue = {$set:{done:'true'}} ;
        // todos.bulkWrite([
        //     {updateMany: {filter: query, update: newValue, upsert: false}}
        // ])
        


//Delete:
    //Delete one: 
        // todos.remove({todo:'first thing'})
    // find One and Delete: doc = delete object
        // todos
        // .findOneAndDelete({todo:'fifth thing'})
        // .then((doc)=>console.log(doc))
    //Delete many
        // const query = {done:'true'}
        // todos.bulkWrite([
        //     {deleteMany: {filter: query}}
        // ])


    
    


