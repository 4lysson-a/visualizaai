import React from 'react';

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import {
  Dash,
  Clip,
  User,
  Menu,
  Auth,
  Login,
  Signup,
  Default,
  Company,
  NotFound,
  StripeCancel,
  Subscription,
  StripeSuccess,
  SubscriptionInactive,
  SubscriptionSubscribe,
  Validation
} from '@/pages';

import { DashProvider, ValidateCompanyID } from '@/components/layout';
import { paths } from './paths';

import { Blog } from '@/pages/Blog';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="blog" element={<Blog />} />

        <Route
          path={paths.menu.withId}
          element={
            <ValidateCompanyID>
              <Menu />
            </ValidateCompanyID>
          }
        />

        <Route path={paths.auth.main} element={<Auth />}>
          <Route path={paths.auth.login.single} element={<Login />} />
          <Route path={paths.auth.signup.single} element={<Signup />} />
          <Route path='validation' element={<Validation />} />
        </Route>

        <Route path="*" element={<Navigate to={paths.auth.login.main} />} />

        <Route path="not-found" element={<NotFound />} />

        <Route path={paths.stripe.single}>
          <Route path={paths.stripe.success.single} element={<StripeSuccess />} />
          <Route path={paths.stripe.cancel.single} element={<StripeCancel />} />
        </Route>

        <Route
          path={paths.dash.main}
          element={
            <DashProvider>
              <Dash />
            </DashProvider>
          }
        >
          <Route path={paths.subscription.main} element={<Subscription />}>
            <Route path={paths.subscription.inactive.single} element={<SubscriptionInactive />} />
            <Route path={paths.subscription.subscribe.single} element={<SubscriptionSubscribe />} />
          </Route>

          <Route path={paths.dash.company.withId} element={<Company />} />
          <Route path={paths.dash.options.single} element={<Clip />} />
          <Route path={paths.dash.user.single} element={<User />} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
