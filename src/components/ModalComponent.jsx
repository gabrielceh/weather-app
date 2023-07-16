/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal'

function ModalComponet({ open, handleClose, children }) {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-title'
			aria-describedby='modal-description'
			sx={{ p: 1, backdropFilter: 'blur(5px)' }}>
			{children}
		</Modal>
	)
}

export default ModalComponet
