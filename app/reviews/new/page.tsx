'use client';

import { TextField, TextArea, Button } from '@radix-ui/themes';
import React from 'react';

const NewReviewPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Series title'/>
      <TextArea placeholder='Thoughts on series' />
      <Button>Submit New Review</Button>
    </div>
  )
}

export default NewReviewPage
