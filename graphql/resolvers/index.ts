// Resolvers define the technique for fetching the types defined in the

import books from "../typedefs/testData";

// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers