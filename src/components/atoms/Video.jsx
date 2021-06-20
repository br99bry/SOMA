import React from 'react';
import { Box } from '@material-ui/core';

import headerVideo from '../../assets/videos/home.mp4';

const Video = () => {
  return(
    <>
      <Box component='section' >
          <video autoPlay loop mute="true" className="video">
            <source src={headerVideo} type="video/mp4"/>
          </video>
      </Box>
    </>
  )
}

export default Video;