import Home from './pages/Home'
import QrCode from './pages/QrCode'
import Share from './pages/Share'

export const routes = [
	{
		path:'/',
		component: Home,
		exact: true
	},
	{
		path:'/scan',
		component: QrCode
	},
	{
		path:'/share',
		component: Share
	}
]