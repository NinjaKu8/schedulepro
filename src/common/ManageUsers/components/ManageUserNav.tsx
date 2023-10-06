import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next'

import { Checkbox, Filter, NavSimple } from 'common'

type Props = {
  handleClickCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAdd: () => void;
  handleClickDelete: () => void;
  checked: boolean;
  isSelectSome: boolean;
}

export function ManageUserNav({ handleClickCheckbox, handleClickAdd, handleClickDelete, checked, isSelectSome }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <NavSimple className='ps-3'>
      <Nav.Item>
        <Form.Group className='my-lg-auto me-3' controlId={'make this a useId'}>
          <Checkbox callback={handleClickCheckbox} checked={checked} />
        </Form.Group>
      </Nav.Item>
      <Nav.Item>
        <Button size='sm' variant='success' onClick={handleClickAdd}>{t('Add')}</Button>
      </Nav.Item>
      <Nav.Item>
        <Button size='sm' variant='danger' disabled={!isSelectSome} onClick={handleClickDelete}>{t('Delete')}</Button>
      </Nav.Item>
      <Nav.Item className='ms-auto'>
        <Filter size='sm' />
      </Nav.Item>   
    </NavSimple>
  )
}