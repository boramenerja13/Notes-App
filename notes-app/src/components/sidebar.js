// import React, { useState } from 'react';
// import { Box, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

// const Sidebar = () => {
//   const [sidebarHeight, setSidebarHeight] = useState(100); // initial height

//   const handleMouseMove = (e) => {
//     const newHeight = e.clientY; // Get cursor's Y position
//     setSidebarHeight(newHeight);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
//       }}
//     >
//       <Box
//         onMouseMove={handleMouseMove}
//         sx={{
//           height: `${sidebarHeight}px`, // Adjust height dynamically
//           overflowY: 'auto',
//           transition: 'height 0.2s ease',
//         }}
//       >
//         <List>
//           <ListItem button>
//             <ListItemText primary="All Notes" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Archived" />
//           </ListItem>
//         </List>
//       </Box>
//       <Divider />
//     </Drawer>
//   );
// };

// export default Sidebar;
