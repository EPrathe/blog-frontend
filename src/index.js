import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './modules/store';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const cache=new InMemoryCache();
const link=new HttpLink({
    uri: 'https://graphql-pokemon.now.sh/'
})

const client = new ApolloClient({
    cache,
    link
})

ReactDOM.render(<ApolloProvider client={client}>
<Provider store={store}>
    <App />
</Provider>
</ApolloProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
