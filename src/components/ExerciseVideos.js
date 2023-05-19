import React, { useEffect } from 'react';
import { Typography, Box, Stack,Divider } from '@mui/material';

const ExerciseVideos = ({exerciseVideos,name}) => {
    console.log(exerciseVideos)
    if(!exerciseVideos.length) return 'Loding...';
  return (
    <Box sx={{marginTop : {lg : '160px', xs: '20px'}}} p="20px">
        <Divider sx={{borderBottomWidth: 4, mb:'30px', background: '#ff2625', width:'200px',
     alignItems:"center",
     justify:"center"}}/>
        <Typography variant='h4' mb="20px">
            Watch <span style={{color: '#ff2625',
            textTransform:'capitalize'}}>{name} </span>
             exercise videos.
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap"
        alignItems="center"
        sx = {{
            flexDirection: {lg: 'row'},gap: {lg: '30px', xs: '0'},
            marginTop: '10px'
        }}>
            {exerciseVideos?.slice(0,5).map((item,index)=>(
                <a key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='_blank'
                rel="noopner noreferrer"  
                >
                    <img src={item.video.thumbnails[0].url}
                    alt={item.video.title}/>
                    <Box>
                        <Typography color='#000'>
                            {item.video.title}
                        </Typography>
                        <Typography color='#000' fontWeight="bold">
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos