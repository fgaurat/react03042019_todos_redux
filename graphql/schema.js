const graphql = require('graphql');
const axios = require ("axios");
mongoose = require('mongoose');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLList
} = graphql;


mongoose.connect('mongodb://localhost/companiesdb');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var companySchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String
});

var Company = mongoose.model('Company', companySchema);


const UserType = new GraphQLObjectType({
    name:"UserType",
    fields: ()=>({
        id:{type:GraphQLString},
        firstName:{type:GraphQLString},
        age:{type:GraphQLInt},
        companyId:{type:GraphQLString},
        company:{type:CompanyType,
            async resolve(parentValue,args){
                return await Company.findById(parentValue.companyId);
            }

        },
        todos:{
            type:new GraphQLList(TodoType),
            resolve(parentValue,args){
                return axios.get(`http://localhost:3004/todos?user_id=${parentValue.id}`).then( (response) => {
                    return response.data;
                })
            }
        }
    })
});

const TodoType = new GraphQLObjectType({
    name:"TodoType",
    fields:{
        id:{type:GraphQLString},
        title:{type:GraphQLString},
        completed:{type:GraphQLBoolean},
        user:{
            type:UserType,
            resolve(parentValue,args){
                return axios.get(`http://localhost:3005/users/${parentValue.user_id}`)
                    .then( (response) => {                                        
                        return response.data;
                    })
                    .catch(_=> Promise.resolve(null));

            }
        }
    }
});

const CompanyType = new GraphQLObjectType({
    name:"CompanyType",
    fields:()=>({
        _id:{type:GraphQLString},
        name:{type:GraphQLString}
    })
});


const MutationType =  new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addTodo:{
            type:TodoType,
            args:{
                title:{ type: GraphQLString },
                completed:{ type: GraphQLBoolean },
            },
            resolve(parentValue,args){
                return axios.post(`http://localhost:3004/todos/`,{title:args.title,completed:args.completed}).then( (response) => {
                    return response.data;
                })
            }
        }
    }
});


const RootQueryType = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        companies:{
            type:new GraphQLList(CompanyType),
            async resolve(parentValue,args){
                return await Company.find();
            }
            // resolve(parentValue,args){
                // return Company.find( (err, companies)=> {
                //     if (err) return console.error(err);
                //     return companies
                //   })
            
                // return Company.find().then(companies => companies);
            // }
        },
        todos:{
            type:new GraphQLList(TodoType),
            resolve(parentValue,args){
                return axios.get(`http://localhost:3004/todos`).then( (response) => {                                        
                    return response.data;
                })
            }
        },
        users:{
            type:new GraphQLList(UserType),
            resolve(parentValue,args){
                return axios.get(`http://localhost:3005/users`).then( (response) => {                                        
                    return response.data;
                })
            }
        },
        todo:{
            type:TodoType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue,args){
                return axios.get(`http://localhost:3004/todos/${args.id}`).then( (response) => {                                        
                    return response.data;
                })
            }

        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQueryType,
    mutation:MutationType
});