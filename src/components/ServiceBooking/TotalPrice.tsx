import { FunctionComponent } from 'react'
import { CurrencyFormatter } from './CurrencyFormatter'

interface Props {
  amount: number
}

export const TotalPrice: FunctionComponent<Props> = ({ amount }) => {
  return (
    <div className='border-t mt-2 text-right border-slate-500'>
      Total: <CurrencyFormatter amount={amount} />
    </div>
  )
}
