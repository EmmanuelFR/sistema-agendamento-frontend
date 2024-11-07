// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { useNavigate } from 'react-router-dom';

// function ForgotPassword({ open, handleClose }) {

//     const navigate = useNavigate();

//     const handleContinue = () => {
//         navigate('/RedefinirSenha')
//     }

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       PaperProps={{
//         component: 'form',
//         onSubmit: (event) => {
//           event.preventDefault();
//           handleClose();
//         },
//         sx: { backgroundImage: 'none' },
//       }}
//     >
//       <DialogTitle>Redefinir Senha</DialogTitle>
//       <DialogContent
//         sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
//       >
//         <DialogContentText>
//           Digite seu E-mail e nós enviaremos um link para a recuperação da senha.
//         </DialogContentText>
//         <OutlinedInput
//           autoFocus
//           required
//           margin="dense"
//           id="email"
//           name="email"
//           label="Email address"
//           placeholder="E-mail"
//           type="email"
//           fullWidth
//         />
//       </DialogContent>
//       <DialogActions sx={{ pb: 3, px: 3 }}>
//         <Button onClick={handleClose}>Cancelar</Button>
//         <Button variant="contained" type="submit" onClick={handleContinue}>
//           Continuar
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

// ForgotPassword.propTypes = {
//   handleClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };

// export default ForgotPassword;

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom';

function ForgotPassword({ open, handleClose }) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const handleContinue = () => {
    if (email) {
      navigate('/RedefinirSenha');
    } else {
      alert('Por favor, preencha o campo de E-mail.');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
        sx: { backgroundImage: 'none' },
      }}
    >
      <DialogTitle>Redefinir Senha</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Digite seu E-mail e nós enviaremos um link para a recuperação da
          senha.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email address"
          placeholder="E-mail"
          type="email"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant="contained" type="submit" onClick={handleContinue}>
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;