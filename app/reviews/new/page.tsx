'use client';

import { TextField, Button, Callout } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
// import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// dynamically importing simpleMDE so it doesn't render on server side
// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

interface ReviewForm {
    title: string;
    description: string;
}

const NewReviewPage = () => {
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<ReviewForm>();
    const [error, setError] = useState('');

    return (
        <div className='max-w-xl'>
            {error && 
                <Callout.Root color="red" className='mb-5'>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            }
            <form 
                className='max-w-xl space-y-3' 
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post('/api/reviews', data);
                        router.push('/reviews');
                    } catch (error) {
                        setError(`Error submitting reviews ${error}`);
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
        </div>
    )
}

export default NewReviewPage
