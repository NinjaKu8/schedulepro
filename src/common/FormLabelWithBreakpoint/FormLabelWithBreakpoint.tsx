import { FormLabel } from 'common'

type Props = {
  className?: string;
  textWide?: string;
  textNarrow?: string;
  [x:string]: any;
}

// Form.Label that can show different text when smaller than the XL breakpoint
export function FormLabelWithBreakpoint({ className, textWide, textNarrow, ...rest }: Props): JSX.Element {
  return (
    <>
      <FormLabel className={`d-none d-xl-block ${className}`} {...rest}>{textWide}</FormLabel>
      <FormLabel className={`d-xl-none ${className}`} {...rest}>{textNarrow}</FormLabel>
    </>
  )
}
