import clsx from 'clsx'
import { HTMLInputTypeAttribute, useId } from 'react'
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import styles from './input.module.css'

interface IInputProps<T extends FieldValues> {
    label?: string
    placeholder?: string
    type?: HTMLInputTypeAttribute
    register: UseFormRegister<T>
    name: Path<T>;
    error?: FieldError
    disabled?: boolean
}

export const Input =
    <T extends FieldValues>({
    placeholder,
    register,
    label,
    type,
    name,
    error,
    disabled }: IInputProps<T>) => {
      if (!register) {
        throw new Error("The 'register' is required but was not provided to Input component.")
      }

      const id = useId()

      return (
        <div className={styles.inputWrapper}>
          {
            label && (
              <label className={styles.label} htmlFor={id}>
                {label}
              </label>)
          }
          <input
            {...register(name)}
            className={clsx(styles.input, Boolean(error) && styles.error, disabled && styles.disabled)}
            id={id}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
          />
          {error && <span className={clsx(styles.errorMessage, styles.error)}>{error.message}</span>}
        </div>
      )
    }