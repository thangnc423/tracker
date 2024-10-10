'use client';

import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewReviewPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Series title'/>
      <SimpleMDE placeholder='Thoughts on series' />
      <Button>Submit New Review</Button>
    </div>
  )
}

export default NewReviewPage
