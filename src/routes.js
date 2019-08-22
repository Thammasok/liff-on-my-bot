import Home from './pages/Home'
import QrCode from './pages/QrCode'

export const routes = [
	{
		path:'/',
		component: Home,
		exact: true
	},
	{
		path:'/scan',
		component: QrCode,
		exact: true
	}
]