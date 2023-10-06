import { Suspense, lazy, LazyExoticComponent } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Loading } from 'common'

import 'react-reflex/styles.css'
import './scss/style.scss' 

const LandingContainer: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/LandingContainer'))
const Landing: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Landing/Landing'))
const CreateAccount: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/CreateAccount'))
const CreateAccountSuccess: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/CreateAccountSuccess'))
const Invite: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Invite'))
const InviteSuccess: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/InviteSuccess'))
const CreateAccountValidate: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/CreateAccountValidate'))
const ForgotPassword: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/ForgotPassword'))
const ForgotPasswordSuccess: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/ForgotPasswordSuccess'))
const ForgotPasswordValidate: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/ForgotPasswordValidate'))
const Features: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Features/Features'))
const Pricing: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Pricing/Pricing'))
const Initiatives: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Initiatives/Initiatives'))
const About: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/About/About'))
const Contact: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Contact/Contact'))
const Terms: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Terms'))
const Privacy: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Privacy'))
const FeatureRequest: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/FeatureRequest'))
const Issue: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/Issue'))
const KeyboardReference: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Landing/KeyboardReference'))

const UserContainer: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/UserContainer'))
const Dashboard: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Dashboard'))
const Subscriptions: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Subscriptions'))
const Profile: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Profile'))
const Search: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Search'))
const User: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/User'))
const Projects: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Projects'))
const Project: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Project'))
const Scripts: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Scripts'))
const Script: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Script'))
const Schedules: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Schedules'))
const Schedule: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Schedule'))
const ProgressReports: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/ProgressReports'))

const Error: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/Error'))
const NotFound: LazyExoticComponent<()=>JSX.Element> = lazy(() => import('./components/NotFound'))

const router = createBrowserRouter([
  {
    path: '/', element: <LandingContainer />, errorElement: <Error />, children: [
      { element: <Landing />, index: true },
      { path: 'features', element: <Features /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'initiatives', element: <Initiatives /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'terms', element: <Terms /> },
      { path: 'privacy', element: <Privacy />,  },
      { path: 'featurerequest', element: <FeatureRequest /> },
      { path: 'reportissue', element: <Issue /> },
      { path: 'keyboardreference', element: <KeyboardReference /> },
      { path: 'createaccount', children: [
        { element: <CreateAccount />, index: true },
        { path: 'success', element: <CreateAccountSuccess /> },
        { path: 'validate', element: <CreateAccountValidate /> },
      ]},
      { path: 'invite', children: [
        { element: <Invite />, index: true },
        { path: 'success', element: <InviteSuccess /> },
      ]},
      { path: 'forgotpassword', children: [
        { element: <ForgotPassword />, index: true },
        { path: 'success', element: <ForgotPasswordSuccess /> },
        { path: 'validate', element: <ForgotPasswordValidate /> },
      ]},
    ],
  }, {
    path: '/user', element: <UserContainer />, errorElement: <Error />, children: [
      { element: <Dashboard />, index: true },
      { path: ':id', element: <User /> },
      { path: 'subscription', element: <Subscriptions /> },
      { path: 'profile', element: <Profile /> },
      { path: 'search', element: <Search /> },
      { path: 'progress', element: <ProgressReports /> },
      { path: 'project', children: [
        { element: <Projects />, index: true },
        { path: ':id', element: <Project /> },
      ]},
      { path: 'script', children: [
        { element: <Scripts />, index: true },
        { path: ':id', element: <Script /> },
      ]},
      { path: 'schedule', children: [
        { element: <Schedules />, index: true },
        { path: ':id', element: <Schedule /> },
      ]},
    ],
  },
  { path: '*', element: <NotFound /> },
])

export function App(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}