// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
// import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// const ToolbarComponent = () => {
//   const navigate = useNavigate();

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#036C6E' }}> 
//       <Toolbar>
//         <IconButton 
//           aria-label="menu" 
//           sx={{ color: '#FFFFFF', mr: 2 }} 
//           onClick={() => navigate('/Menu')}
//         >
//           <AiOutlineMenu size={28} />
//         </IconButton>
//         <img 
//           src="/images/images-removebg-preview.png" 
//           alt="Logo" 
//           style={{ height: 50, marginRight: 10 }} 
//         />
//         <Typography 
//           variant="h6" 
//           component="div" 
//           sx={{ flexGrow: 1, color: '#FFFFFF' }}
//         >
//           AgendaFácil UNIFAA
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Avatar sx={{ bgcolor: '#FFFFFF', color: '#036C6E' }}>U</Avatar> 
//           <Typography variant="body2" sx={{ ml: 1, color: '#FFFFFF' }}>
//             Usuário Nome 
//           </Typography>
//         </Box>
//         <IconButton 
//           aria-label="logout" 
//           sx={{ color: '#FFFFFF', ml: 2 }} 
//           onClick={() => navigate('/Logout')}
//         >
//           <AiOutlineLogout size={28} />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default ToolbarComponent;

// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
// import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// const ToolbarComponent = ({ showMenu, logoutPath }) => {
//   const navigate = useNavigate();

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#036C6E' }}> 
//       <Toolbar>
//         {showMenu && (
//           <IconButton 
//             aria-label="menu" 
//             sx={{ color: '#FFFFFF', mr: 2 }} 
//             onClick={() => navigate('/Menu')}
//           >
//             <AiOutlineMenu size={28} />
//           </IconButton>
//         )}
//         <img 
//           src="/images/images-removebg-preview.png" 
//           alt="Logo" 
//           style={{ height: 50, marginRight: 10 }} 
//         />
//         <Typography 
//           variant="h6" 
//           component="div" 
//           sx={{ flexGrow: 1, color: '#FFFFFF' }}
//         >
//           AgendaFácil UNIFAA
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Avatar sx={{ bgcolor: '#FFFFFF', color: '#036C6E' }}>U</Avatar> 
//           <Typography variant="body2" sx={{ ml: 1, color: '#FFFFFF' }}>
//             Usuário Nome 
//           </Typography>
//         </Box>
//         <IconButton 
//           aria-label="logout" 
//           sx={{ color: '#FFFFFF', ml: 2 }} 
//           onClick={() => navigate(logoutPath)} 
//         >
//           <AiOutlineLogout size={28} />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default ToolbarComponent;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ToolbarComponent = ({ showMenu, showLogout, logoutPath }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#036C6E' }}>
      <Toolbar>
        {showMenu && (
          <IconButton
            aria-label="menu"
            sx={{ color: '#FFFFFF', mr: 2 }}
            onClick={() => navigate('/Menu')}
          >
            <AiOutlineMenu size={28} />
          </IconButton>
        )}
        <img
          src="/images/images-removebg-preview.png"
          alt="Logo"
          style={{ height: 50, marginRight: 10 }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: '#FFFFFF' }}
        >
          AgendaFácil UNIFAA
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ border: '2px solid #FAFAFA' }} />
          <Typography variant="body2" sx={{ ml: 1, color: '#FFFFFF' }}>
            João Silva
          </Typography>
        </Box>
        {showLogout && ( // Condicione a exibição do botão logout com showLogout
          <IconButton
            aria-label="logout"
            sx={{ color: '#FFFFFF', ml: 2 }}
            onClick={() => navigate(logoutPath)}
          >
            <AiOutlineLogout size={28} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;