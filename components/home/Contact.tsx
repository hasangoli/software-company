'use client';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CustomButton } from '../global/CustomButton';
import { ImageProvider } from '../global/ImageProvider';
import { Input } from '../global/Input';
import { Textarea } from '../global/Textarea';

export const Contact = () => {
  return (
    <div>
      <ImageProvider
        src='/assets/images/contact.png'
        alt=''
        width='100%'
        height='550px'
        imgClass='object-cover'
        className='rounded-se-[7rem] overflow-hidden'
      />
      <div className='container w-11/12 mx-auto px-6 py-8 translate-y-[-11rem] bg-white'>
        <h2 className='capitalize text-primary text-4xl font-semibold'>
          Connect with your next great hire today!
        </h2>

        <form onSubmit={e => e.preventDefault()}>
          <Input
            type='text'
            name='company'
            label='Company'
            placeholder='Enter your company name'
            onChange={e => console.log(e.target.value)}
          />
          <Input
            type='text'
            name='name'
            label='Your Name'
            placeholder='Enter your name'
            onChange={e => console.log(e.target.value)}
          />
          <Input
            type='number'
            name='number'
            label='Phone Number'
            placeholder='Enter your phone number'
            onChange={e => console.log(e.target.value)}
          />
          <Input
            type='email'
            name='email'
            label='Your Email'
            placeholder='Enter your email address'
            onChange={e => console.log(e.target.value)}
          />
          <Textarea
            name='detail'
            label='Project Detail'
            placeholder='Describe your project ...'
            onChange={e => console.log(e.target.value)}
          />
          <FormControlLabel
            value='top'
            control={<Checkbox />}
            label={
              <label className='text-primary'>
                By sending this form I confirm that I have read and accept the
                <strong> Privacy Policy</strong>
              </label>
            }
            onChange={(_, checked) => console.log(checked)}
          />
          <CustomButton
            title='GET CONSULTATION'
            type='submit'
            className='mt-8'
          />
        </form>
      </div>
    </div>
  );
};
