import { motion } from 'framer-motion';

interface FormFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
}

export const FormField = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  rows = 4,
}: FormFieldProps) => {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';
  
  return (
    <div>
      <label htmlFor={id} className="flex items-center text-white text-[18px] mb-2">
        {required && <span className="text-crimson mr-1">*</span>}
        {label}
      </label>
      <InputComponent
        id={id}
        type={type === 'textarea' ? undefined : type}
        rows={type === 'textarea' ? rows : undefined}
        className="w-full bg-transparent border-b border-x-0 border-t-0 border-white text-white text-[16px] py-2 px-0 focus:ring-0 transition-colors"
        value={value}
        onChange={onChange}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-2 text-sm text-crimson"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}; 