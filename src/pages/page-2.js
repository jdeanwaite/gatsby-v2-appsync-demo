import React from 'react'
import { Link } from 'gatsby'
import firebase from 'firebase/app'

import Layout from '../components/layout'
import AppSyncProvider from '../components/AppSyncProvider'

class SecondPage extends React.Component {
  state = {
    signedIn: false,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged()
  }

  onAuthStateChange = user => {
    this.setState({ signedIn: !!user })
  }

  render() {
    return (
      <AppSyncProvider>
        <Layout>
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
          <p>Signed in: {this.state.signedIn}</p>
          {!this.state.signedIn && (
            <div>
              <input type="text" placeholder="email" />
              <br />
              <input type="text" placeholder="password" />
              <button onClick={this.signIn}>Sign in</button>
            </div>
          )}
        </Layout>
      </AppSyncProvider>
    )
  }
}

export default SecondPage
