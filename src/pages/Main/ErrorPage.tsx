import * as C from '../../styles/components'
import PageTemplate from '../PagesTemplate/Template'

export default function ErrorPage() {
  return (
    <PageTemplate title='ERROR'>
      <C.Text $weight={500} $size={48}>Something went wrong</C.Text>
    </PageTemplate>
  )
}
