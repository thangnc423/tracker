'use client';

import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form"
import { useRouter } from 'next/navigation';

interface ReviewForm {
    title: string;
    description: string;
}

const NewReviewPage = () => {
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<ReviewForm>();

    return (
        <form 
            className='max-w-xl space-y-3' 
            onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post('/api/reviews', data);
                    router.push('/reviews');
                } catch (error) {
                    console.error('Error submitting review:', error);
                }
            })}>
            <TextField.Root placeholder='Series title' {...register('title')}/>
            <Controller 
                name='description' 
                control={control}
                render={({field}) => <SimpleMDE placeholder='Thoughts on series' {...field} />}
            />
            <Button>Submit New Review</Button>
        </form>
    )
}

export default NewReviewPage
