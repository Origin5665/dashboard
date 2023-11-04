import clsx from 'clsx'
import { ReactNode } from 'react'

// https://www.davidhu.io/react-spinners/storybook/?path=/docs/barloader--main
import styles from './button.module.css'
import { Spinner } from '../Spinner/Spinner.tsx'

interface IButtonProps {
  onClick: () => void
  disabled?: boolean
  children: ReactNode
  processing?: boolean;
}

export const Button = ({ onClick, disabled = false, children, processing }: IButtonProps) => {
    const isDisabled = processing || disabled

    return (
        (
            <button role="button" aria-busy={processing} type="button" className={clsx(styles.button, isDisabled && styles.disabled)} onClick={onClick} disabled={isDisabled}>
                <span>{processing ? <Spinner size="6" /> : children}</span>
            </button>
        )
    )
}

