import { Box, ImageListItem } from '@mui/material';
import { ClientInterface } from './type';

interface ClientItemProps {
    item: ClientInterface
}

// eslint-disable-next-line no-undef
export const ClientItems:React.FC<ClientItemProps> = ({item}) => {
    return (
        <ImageListItem 
            sx={{
              position: 'relative', // Ensure the bar can be positioned absolutely
            }}
          >
            <Box
              component='img'
              src={item.imageLink}
              alt={`Image ${item.imageTitle}`}
              sx={{ height: 'auto', width: 'auto', objectFit: 'cover', mx: 5 }}
            />
        </ImageListItem>
    );
}