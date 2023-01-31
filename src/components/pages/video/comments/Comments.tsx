import { useAuth } from '@/hooks/useAuth'
import { IComment } from '@/types/comment.interface'
import { FC } from 'react'
import AddComment from './AddComment'
import CommentItem from './CommentItem'
import s from './Comments.module.scss'

interface IComments {
  comments: IComment[]
  videoId: number
}

const Comments: FC<IComments> = ({ comments, videoId }) => {
  const { user } = useAuth()
  return (
    <div className={s.comments}>
      <h2>Комментарии</h2>
      <div className={s.line} />
        {comments.length ? (
          <div className={s.grid}>
            {comments.map(comment => (
              <CommentItem comment={comment} key={comment.id} />
            ))}
          </div>
        ) : (
          <p>Комментариев не найдено!</p>
        )}
        <div className={s.bottomForm}>
          {user && <AddComment videoId={videoId} />}
        </div>
    </div>
  )
}



export default Comments