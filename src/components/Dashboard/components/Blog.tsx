import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Image } from 'react-bootstrap'
import { BsArrowRightCircle } from 'react-icons/bs'

export function Blog(): JSX.Element {
  return (
    <div>
      <Card className='shadow overflow-hidden'>
        <div className='blog-card'>
          <div>
            <Image src="/assets/img/blog/tc_2.png" alt='blog image' />
          </div>
          <div className='p-4'>
            <h5>The Future Has Arrived</h5>
            <p>
              We are delighted to introduce you to Think Crew 2.0. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
            </p>
            <div className='d-flex justify-content-end w-100'>
              <Link to='#'><BsArrowRightCircle className='fs-2' /></Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
