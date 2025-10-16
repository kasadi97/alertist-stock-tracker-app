import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const InputField = ({name, label, placeholder, type ='text', register, error, validation, disabled, value}: FormInputProps) => {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>
            {label}
        </Label>
        <Input 
            id={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            className={cn('form-input', {'opacity-50 cursor-not-allowed': disabled, 'border-red-500': error})}
            {...register(name, validation)}
        />
        {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  )
}

export default InputField