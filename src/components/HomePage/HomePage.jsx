import { Grid } from '@mui/material';
import React from 'react';
import '../../index.css';
import 'tailwindcss/tailwind.css';
import Navigation from '../Navigation/Navigation';

const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
      {/* this is the left portion navigation */}
      <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
         

        <Navigation/>
      </Grid>

      {/* middle feed portion */}
      <Grid item xs={12} lg={6} className='w-full relative border border-gray-500'>
        <p className='text-center'>middle part</p>
      </Grid>

      

      <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <p className='text-center'>right part</p>

      </Grid>
    </Grid>
  );
};

export default HomePage;
