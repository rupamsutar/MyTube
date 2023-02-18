import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = (props) => {

  return (
    <Stack direction='row' sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'}
    }}>
        {categories.map( (category, idx) => (
            <button 
                key={idx}
                className='category-btn' 
                onClick={() => {props.setSelectedCategory(category.name)}}
                style={{
                backgroundColor: category.name === props.selectedCategory && '#FC1503',
                color: '#fff'
            }}>
                <span style={{
                    color: category.name === props.selectedCategory ? 'white' : 'red',
                    marginRight: '1.5rem',
                }}>{category.icon}</span>

                <span style={{
                    opacity: category.name === props.selectedCategory ? 1 : 0.8,
                }}>{category.name}</span>
                
            </button>
        ))}

    </Stack>
  )
}

export default SideBar