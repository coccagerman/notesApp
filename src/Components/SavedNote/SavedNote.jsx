import { Icon } from '@iconify/react'
import delete20Filled from '@iconify-icons/fluent/delete-20-filled'
import bxsEdit from '@iconify-icons/bx/bxs-edit'

export default function SavedNote () {
    return (
        <div className='savedNote-container'>
            <Icon icon={delete20Filled} className='icon delete' />
            <Icon icon={bxsEdit} className='icon edit' />
            <article className='savedNote'>
                <h2>Note tittle</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis voluptatum sit nemo explicabo ipsam odit optio qui temporibus ipsa, corrupti velit dicta aspernatur quidem autem voluptate. Rem doloremque molestiae officia quia. Maiores magnam molestias voluptate perferendis iste neque incidunt quos rem autem repellendus quis adipisci nobis corporis laborum quia, dignissimos est esse ipsa laudantium? Blanditiis distinctio delectus error adipisci dolores aliquid doloribus laudantium quis odio voluptatibus. Nihil quibusdam nulla iusto minus vel amet fugiat sit magni sapiente possimus perspiciatis, culpa ad necessitatibus pariatur vitae ut distinctio doloremque. Totam adipisci architecto numquam temporibus animi consequuntur hic iste, possimus amet ipsum!</p>
            </article>
        </div>
    )
}