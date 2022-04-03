import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Devider = () => {

    const style = {
        width:"15em",
        bgcolor: 'background.paper',
      }; 
      
  return (
    <div>
        <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Fruits" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Vegetable" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Organic & Hydroponic" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Exotic & Premium" />
                </ListItem>
        </List>
    </div>
  )
}

export default Devider