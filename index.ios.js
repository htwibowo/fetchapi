/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator,
  Text,
  View
} from 'react-native';
const user = {
  name: "Gufy Goober",
  username: "Gufy",
  email: "mgufronefendi@gmail.com",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}
export default class fetchapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: {},
      users: []
    };
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json()),
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response=>response.json()),
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json()),
    ]).then(([posts, albums, users]) => {
      this.setState({
        posts: posts,
        albums: albums,
        users: users,
        loading: false
      });
    })
    .catch(err=>console.log(err));
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ?
          <ActivityIndicator/> :
          (this.state.users.map(user=><Text>{user.username}</Text>))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('fetchapi', () => fetchapi);
