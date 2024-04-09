import { FunctionComponent } from 'react'
import { CurrencyFormatter } from './CurrencyFormatter'

interface Props {
  amount: number
}

export const TotalPrice: FunctionComponent<Props> = ({ amount }) => {
  return (
    <div className='border-t text-right border-black'>
      Total: <CurrencyFormatter amount={amount} />
    </div>
  )
}
