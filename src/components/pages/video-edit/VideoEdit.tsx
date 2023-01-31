import s from './VideoEdit.module.scss'
import { Layout } from '@/components/layout/Layout'
import TogglePublic from '@/components/layout/header/upload-video/upload-video-form/toggle-public/TogglePublic'
import VideoInformation from '@/components/layout/header/upload-video/upload-video-form/video-information/VideoInformation'
import { videoApi } from '@/redux/api/video.api'
import { IMediaResponse } from '@/services/media/media.interface'
import { IVideoDto } from '@/types/video.interface'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import Loader from '@/ui/loader/Loader'
import { TextArea } from '@/ui/text-area/TextArea'
import UploadField from '@/ui/upload-field/UploadField'

const VideoEdit: FC = () => {
	const { query, push } = useRouter()
	const videoId = Number(query.id)

	const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
		skip: !videoId
	})

	console.log(data)

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue
	} = useForm<IVideoDto>({ mode: 'onChange' })

	const videoName = () => {
		if (data) {
			return data.videoPath.slice(data.videoPath.indexOf('/', 14) + 1)
		} else {
			return ''
		}
	}

	useEffect(() => {
		if (!watch('name') && data) {
			setValue('name', data.name)
			setValue('description', data.description)
			setValue('videoPath', data.videoPath)
			setValue('thumbnailPath', data.thumbnailPath)
			setValue('isPublic', data.isPublic)
		}
	}, [data])

	const [updateVideo, { isLoading: isUpdateLoading }] =
		videoApi.useUpdateVideoMutation()

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => {
				toastr.success('Статус', 'Видео обновлено!')
				push('/studio')
			})
	}

	return (
		<Layout title='Редактирование видео'>
			{isLoading ? (
				<Loader count={5} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={'flex flex-wrap'}>
					<div className={'w-7/12 pr-6 pt-3'}>
						<Field
							{...register('name', { required: 'Название обязательно' })}
							placeholder='Name'
							error={errors.name}
						/>
						<TextArea
							{...register('description', {
								required: 'Описание обязательно'
							})}
							placeholder='Description'
							error={errors.description}
						/>
						<div className={'mt-8'}>
							<span className={'text-white mb-2 block'}>Превью: </span>
							<Controller
								control={control}
								name='thumbnailPath'
								render={({ field: { onChange } }) => (
									<UploadField
										folder='thumbnails'
										onChange={(value: IMediaResponse) => {
											onChange(value.url)
										}}
									/>
								)}
							/>
						</div>
						<div className={'my-8'}>
							<span className={'text-white mb-2 block'}>Видео: </span>
							<Controller
								control={control}
								name='videoPath'
								render={({ field: { onChange } }) => (
									<UploadField
										folder='thumbnails'
										onChange={(value: IMediaResponse) => {
											onChange(value.url)
										}}
									/>
								)}
							/>
						</div>
						<Controller
							control={control}
							name='isPublic'
							render={({ field: { onChange, value } }) => (
								<TogglePublic
									clickHandler={() => onChange(!value)}
									isEnabled={value}
								/>
							)}
						/>
					</div>

					<div className={s.right_block}>
						<VideoInformation
							fileName={videoName()}
							videoId={videoId}
							isUploaded
							thumbnailPath={watch('thumbnailPath')}
						/>
						<Button>{isUpdateLoading ? 'Ожидайте...' : 'Сохранить'}</Button>
					</div>
				</form>
			)}
		</Layout>
	)
}

export default VideoEdit
