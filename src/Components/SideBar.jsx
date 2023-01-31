import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SelectedCategory = 'New';

const SideBar = () => {
  return (
    <Stack direction='row' sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'}
    }}>
        {categories.map( (category) => (
            <button className='category-btn' style={{
                backgroundColor: category.name === SelectedCategory && '#FC1503',
                color: '#fff'
            }}>
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}

    </Stack>
  )
}

export default SideBar