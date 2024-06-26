import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import NavbarBlock from './Components/Navbar';
import { UserPage } from "./pages/UserPage";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    // eslint-disable-next-line array-callback-return
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NavbarBlock />
      <UserPage />
    </ApolloProvider>
  );
}

export default App;
