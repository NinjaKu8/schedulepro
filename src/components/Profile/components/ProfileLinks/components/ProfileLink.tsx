import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { BsLink45Deg } from 'react-icons/bs'
import Form from 'react-bootstrap/Form'

import { AutoInput } from 'common'

export function ProfileLink({ text, link, callback }: { text: string; link: string; callback: ()=>void }) {
  return (
    <Row>
      <Col md={3} className='my-auto'>
        <Form.Label className='mb-0'>{text}</Form.Label>
      </Col>
      <Col md={9}>
        <InputGroup size='sm'>
          <InputGroup.Text><BsLink45Deg className='fs-5' /></InputGroup.Text>
          <AutoInput size='sm' callback={callback} value={link} type='url' inputMode='url' />
        </InputGroup>
      </Col>
    </Row>
  )
}
