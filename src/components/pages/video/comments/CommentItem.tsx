import { IComment } from '@/types/comment.interface'
import { FC } from 'react'
import ChannelInfoSmall from '@/ui/channel-info-small/ChannelInfoSmall'
import s from './Comments.module.scss'

interface ICommentItem {
  comment: IComment
}

const CommentItem: FC<ICommentItem> = ({ comment }) => {
  return (
    <div className={s.commentItem}>
      <ChannelInfoSmall channel={comment.user} message={comment.message} />
    </div>
  )
}



export default CommentItem