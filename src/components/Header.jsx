/* eslint-disable react/prop-types */
import { useModal } from '../hooks/useModal'
import { Box, Container, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { useTheme } from '@emotion/react'
import { useState } from 'react'
import ModalComponet from './ModalComponent'
import SearchModal from './search/SearchModal'
import BtnSettings from './BtnSettings'
import ConfigMenu from './ConfigMenu'
import { routesName } from '../utils/routes_name'
import BtnSearch from './BtnSearch'
import BtnFav from './BtnFav'
import FavoritesMenu from './FavoritesMenu'

function Header() {
	const [anchorEl, setAnchorEl] = useState(null)
	const [anchorFav, setAnchorFav] = useState(null)
	const isOpenMenu = Boolean(anchorEl)
	const isOpenFav = Boolean(anchorFav)
	const { isOpen: isOpenSearch, openModal: openSearch, closeModal: closeSearch } = useModal()
	const bgColorState = useSelector((state) => state.bgColor)

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleCloseMenu = () => {
		setAnchorEl(null)
	}

	const handleOpenFav = (event) => {
		setAnchorFav(event.currentTarget)
	}

	const handleCloseFav = () => {
		setAnchorFav(null)
	}

	return (
		<>
			<Box
				component='header'
				sx={{
					position: 'sticky',
					top: 0,
					zIndex: 1,
					bgcolor: `${bgColorState}.main`,
					backdropFilter: 'blur(5px)',
					py: 1,
					borderBottomWidth: '1px',
					borderBottomStyle: 'solid',
					borderBottomColor: `${bgColorState}.contrastText`,
				}}>
				<Container maxWidth='sm'>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<Link
							component={RouterLink}
							to={routesName.index}
							sx={{
								color: `${bgColorState}.contrastText`,
								textDecoration: 'none',
							}}>
							<Typography
								variant='h5'
								component='h2'
								sx={{ fontWeight: 'bold', letterSpacing: '0.2rem' }}>
								My Weather
							</Typography>
						</Link>
						<Box display='flex' gap={0.1}>
							<BtnSearch open={openSearch} />
							<BtnFav open={handleOpenFav} />
							<BtnSettings openMenu={handleOpenMenu} />
						</Box>
					</Box>
				</Container>
			</Box>

			<ModalComponet open={isOpenSearch} handleClose={closeSearch}>
				<SearchModal closeModal={closeSearch} />
			</ModalComponet>

			<ConfigMenu onclose={handleCloseMenu} isOpen={isOpenMenu} anchorEl={anchorEl} />
			<FavoritesMenu anchorEl={anchorFav} isOpen={isOpenFav} onclose={handleCloseFav} />
		</>
	)
}

export default Header
