// import React from 'react'
// import { Redirect } from 'react-router'

import Home from './components/Home'
import NotFound from './components/Other/Notfound'

export const routes = [
	{
		path:'/',
		component: Home,
		exact: true
	},
	{
		path:'',
		component: NotFound
	}
]