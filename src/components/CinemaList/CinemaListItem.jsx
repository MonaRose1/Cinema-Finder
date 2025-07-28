import React from 'react';
import { Chip, IconButton, ListItem, ListItemText } from "@mui/material";
import { MdCall, MdOutlineLocationOn } from 'react-icons/md';
import { format } from 'd3-format';

const dispatchMapSnapTo = (lat, lng) => {
  if (typeof lat !== 'number' || typeof lng !== 'number') {
    console.warn('Cannot dispatch map.snapTo: lat or lng is undefined or invalid.', { lat, lng });
    return;
  }
  // This will dispatch the `map.snapTo` event which will trigger a listener on the
  // respective active map component to zoom to the latitude and longitude passed
  console.log('triggering `map.snapTo` event with args: ', `lat: ${lat}, lng: ${lng}`)
  dispatchEvent(new CustomEvent('map.snapTo', { detail: { lat, lng } }))
}

const CinemaListItem = ({ name, lat, lng, phoneNumber, distance, ...otherProps }) => {
  const hasLocation = typeof lat === 'number' && typeof lng === 'number';
  return (
    <ListItem>
      <ListItemText>
        {name}
        {distance && (<Chip size="small" sx={{ ml: 1 }} label={`${format(',.1f')(distance)} km`} />)}
      </ListItemText>
      {
        phoneNumber && (
          <IconButton component='a' href={`tel:${phoneNumber}`}>
            <MdCall />
          </IconButton>
        )
      }
      {hasLocation && (
        <IconButton onClick={() => dispatchMapSnapTo(lat, lng)}>
          <MdOutlineLocationOn />
        </IconButton>
      )}
    </ListItem>
  );
};
export default CinemaListItem;