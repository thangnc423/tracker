'use client';

import { TextField, Button, Callout, Text, Spinner } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
// import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createReviewSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

// dynamically importing simpleMDE so it doesn't render on server side
// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

type ReviewForm = z.infer<typeof createReviewSchema>;

// interface ReviewForm {
//     title: string;
//     description: string;
// }

const NewReviewPage = () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState : { errors } } = useForm<ReviewForm>({
        resolver: zodResolver(createReviewSchema),
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                        setIsSubmitting(true);
                        await axios.post('/api/reviews', data);
                        router.push('/reviews');
                    } catch (error) {
                        setIsSubmitting(false);
                        setError(`Error submitting reviews ${error}`);
                    }
                })}>
                <TextField.Root placeholder='Series title' {...register('title')}/>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller 
                    name='description' 
                    control={control}
                    render={({field}) => <SimpleMDE placeholder='Thoughts on series' {...field} />}
                />
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <Button disabled={isSubmitting} className="hover:cursor-pointer">Submit New Review {isSubmitting && <Spinner />}</Button>
            </form>
        </div>
    )
}

export default NewReviewPage
