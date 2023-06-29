import { InputType } from '@/types';

export const Input = ({
  name,
  label,
  type = 'text',
  id = name,
  placeholder,
  required = false,
  onChange,
}: InputType) => {
  return (
    <div className='my-5'>
      <label htmlFor={name} className='text-primary capitalize'>
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className='w-full border-[1px] border-primary/20 p-3 mt-2 rounded-lg'
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
