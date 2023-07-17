import { Route, Routes } from 'react-router-dom'
import { routesName } from '../utils/routes_name'
import SearchPage from '../pages/SearchPage'
import HomePage from '../pages/HomePage'
import Page404 from '../pages/Page404'

function AppRouter() {
	return (
		<Routes>
			<Route path={routesName.index} element={<HomePage />} />
			<Route path={routesName.search} element={<SearchPage />} />
			<Route path={routesName.favorites} element={<SearchPage />} />
			<Route path='*' element={<Page404 />} />
		</Routes>
	)
}

export default AppRouter
