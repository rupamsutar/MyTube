import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { FetchFromAPI } from '../utils/FetchFromAPI';


const ChannelDetail = () => {

  const { id } = useParams();

  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail;