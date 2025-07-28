import React from 'react';
import BaseCinemaList from "./BaseCinemaList";
import FranchiseHeader from "./FranchiseHeader";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import allCinemas from "../../data/cinemas";
import { Typography } from "@mui/material";

const FranchiseCinemasList = () => {
  const { franchiseId, countryCode } = useParams();

  const filteredCinemas = useMemo(() => {
    if (!franchiseId || !countryCode) return [];
    return allCinemas.filter(cinema => (
      franchiseId === 'all-cinemas' ||
      cinema.franchise === franchiseId
    ) && cinema.countryCode === countryCode);
  }, [franchiseId, countryCode]);

  if (!franchiseId || !countryCode) {
    return (
      <Typography sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
        Invalid or missing franchise or country selection.
      </Typography>
    );
  }

  return (
    <BaseCinemaList cinemas={filteredCinemas} Header={FranchiseHeader} />
  );
};
export default FranchiseCinemasList;