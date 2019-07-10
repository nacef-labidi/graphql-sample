var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('./BookType');
var bookModel = require('./Books');

exports.updateBook = {
    type: bookType.bookType,
    args: {
        id: {

            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        author: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async(root, args) =>{

        const UpdatedBook = await bookModel.findByIdAndUpdate(args.id,args);
        if (!UpdatedBook) {
          throw new Error('Error')
        }
        return UpdatedBook;
    }
}