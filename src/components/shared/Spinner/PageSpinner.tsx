import { Spinner } from '@components/shared'
import { ReactNode, Suspense } from 'react'


interface IPageSpinner {
    children: ReactNode
}

export const PageSpinner = (props: IPageSpinner) => {
  const getSpinner = () => (
    <div className="page-spinner">
      <Spinner />
    </div>
  )

  return (

    <Suspense fallback={getSpinner()}>
      {props.children}
    </Suspense>
  )
}
