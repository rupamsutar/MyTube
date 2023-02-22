import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { FetchFromAPI } from '../utils/FetchFromAPI';


const ChannelDetail = () => {
  const [ channelDetail, setChannelDetail ] = useState("null");
  const [ videos, setVideos ] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`/channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  })

  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail;