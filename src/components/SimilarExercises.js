import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg:'100px', xs:'0'}}} >
        <Typography variant='h5' p="20px" mb="10px">
            Exercises that target the same muscle group
        </Typography>
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {targetMuscleExercises.length ? 
            <HorizontalScrollbar data={targetMuscleExercises} />
            : <Loader/>}
        </Stack>
        <Typography variant='h5' p="20px" mb="10px" mt={7}>
            Exercises that uses the same equipment
        </Typography>
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {equipmentExercises.length ? 
            <HorizontalScrollbar data={equipmentExercises} />
            : <Loader/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercises