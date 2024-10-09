import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link'

const ReviewsPage = () => {
  return (
    <div>
        <Button><Link href='/reviews/new'>New Review</Link></Button>
    </div>
  )
}

export default ReviewsPage
