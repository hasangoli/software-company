type Input = {
  name: string;
  label: string;
  id?: string;
  placeholder: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export const Textarea = ({
  name,
  label,
  id = name,
  placeholder,
  required = false,
  onChange,
}: Input) => {
  return (
    <div className='my-5'>
      <label htmlFor={name} className='text-primary capitalize'>
        {label}
        {required ? ' *' : ''}
      </label>
      <textarea
        name={name}
        id={id}
        className='w-full border-[1px] border-primary/20 p-3 mt-2 rounded-lg'
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        rows={3}
      ></textarea>
    </div>
  );
};
