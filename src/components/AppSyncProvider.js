import React from 'react'
import 'isomorphic-fetch'
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'
import AppSync from '../../config/AppSync'
import { AUTH_TYPE } from 'aws-appsync/lib'
import firebase from 'firebase/app'

const appSyncClient = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.OPENID_CONNECT,
    jwtToken: async () => firebase.auth().currentUser.getIdToken(),
  },
})

export default function({ children }) {
  return (
    <ApolloProvider client={appSyncClient}>
      <Rehydrated>{children}</Rehydrated>
    </ApolloProvider>
  )
}
