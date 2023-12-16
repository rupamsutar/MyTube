import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos } from "./";
import ChannelCard from './ChannelCard';
import { FetchFromAPI } from '../utils/FetchFromAPI';


const ChannelDetail = () => {
  const [ channelDetail, setChannelDetail ] = useState("null");
  const [ videos, setVideos ] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`/channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    FetchFromAPI(`/search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  },[]);

  console.log(channelDetail);
  console.log(videos);

  return (
    <Box minHeight="95vh">
      <Box> 
        <div style={{
          backgroundImage: "linear-gradient(to right,#C33764, #1D2671 )",
          zIndex: "10",
          height: "300px"
        }}>
          <ChannelCard channelDetail={channelDetail} />
        </div>
      </Box>
    </Box>
  )
}

export default ChannelDetail;