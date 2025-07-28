import React from 'react';
import { List, Divider, Typography } from "@mui/material";
import CinemaListItem from './CinemaListItem';

const CinemaListAside = ({ cinemas, Header = null }) => {
  return (
    <List sx={{ maxHeight: 'calc(100vh - 112px)', overflowY: 'auto' }}>
      {Header && <Header cinemas={cinemas} />}
      {Header && <Divider />}
      {/* NOTE: potential future feature of adding frontend sorting */}
      {/* NOTE: this currently doesn't handle the case of cinemas array being empty
                (poential caused by manually manipulated url arguments) */}
      {cinemas.length === 0 ? (
        <Typography sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
          No cinemas found.
        </Typography>
      ) : (
        cinemas.map((cinema, idx) => (
          <CinemaListItem {...cinema} key={idx} />
        ))
      )}
    </List>
  )
}
export default CinemaListAside;