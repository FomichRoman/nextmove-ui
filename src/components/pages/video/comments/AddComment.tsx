import s from './Comments.module.scss'
import { commentApi } from '@/redux/api/comment.api'
import { ICommentsDto } from '@/types/comment.interface'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'
import { Field } from '@/ui/field/Field'

interface IAddComment {
	videoId: number
}

const AddComment: FC<IAddComment> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ICommentsDto>({ mode: 'onChange' })

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

	const onSubmit: SubmitHandler<ICommentsDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset())
	}

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<div className='relative'>
				<Field
					placeholder='Введите комментарий'
					error={errors.message}
					{...register('message', {
						required: 'Сообщение обязательно!'
					})}
				/>

				<button
					className={'text-xl absolute right-2 top-1.5 text-purple'}
					disabled={isLoading}
				>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddComment
