import * as C from '../../styles/components'
import PageTemplate from '../PagesTemplate/Template'

export default function SuccessPage() {
  return (
    <PageTemplate title='Success'>
      <C.Text $weight={500} $size={48}>Registration success! You can return to the main page</C.Text>
    </PageTemplate>
  )
}
