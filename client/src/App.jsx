import Header from "../src/components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
        projects: {
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="bg-black text-white">
          <Header />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
};

export default App;
