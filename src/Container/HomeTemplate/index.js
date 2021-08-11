import React from 'react'
import { Route } from 'react-router-dom';
import Layout from '../../components/Layout/HomeLayout';
export default function HomeTemplate({ Component, ...props }) {
    return (
      <Route
        {...props}
        render={(propsComponent) => (
          <Layout>
            <Component {...propsComponent} />
          </Layout>
        )}
      />
    )
  }