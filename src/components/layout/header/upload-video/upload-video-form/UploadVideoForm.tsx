import { UploadVideo } from '../UploadVideo'
import s from '../UploadVideo.module.scss'
import SuccessMessage from './SuccessMessage'
import FooterForm from './footer-form/FooterForm'
import { useUploadVideoForm } from './useUploadVideoForm'
import VideoInformation from './video-information/VideoInformation'
import { IMediaResponse } from '@/services/media/media.interface'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Field } from '@/ui/field/Field'
import { TextArea } from '@/ui/text-area/TextArea'
import UploadField from '@/ui/upload-field/UploadField'
import TogglePublic from './toggle-public/TogglePublic'

interface IUploadVideoForm {
	videoId: number
	handleCloseModal: () => void
}

const UploadVideoForm: FC<IUploadVideoForm> = ({
	videoId,
	handleCloseModal
}) => {
	const { form, status, media } = useUploadVideoForm({
		videoId,
		handleCloseModal
	})
	return (
		<form
			onSubmit={form.handleSubmit(form.onSubmit)}
			className={'flex flex-wrap w-full h-full'}
		>
			{status.isSuccess && <SuccessMessage />}
			{status.isChosen ? (
				<>
					<div className={'w-7/12 pr-6 pt-3'}>
						<Field
							{...form.register('name', { required: 'Название обязательно' })}
							placeholder={'Название'}
							error={form.errors.name}
						/>
						<TextArea
							{...form.register('description', {
								required: 'Описание обязательно'
							})}
							placeholder={'Описание'}
							error={form.errors.description}
						/>
						<div className={'my-8'}>
							<Controller
								control={form.control}
								name={'thumbnailPath'}
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
            <Controller control={form.control} name='isPublic' render={({ field: { onChange, value } }) => (
              <TogglePublic clickHandler={() => onChange(!value)} isEnabled={!!value} />
            )} />

					</div>

					<div className={'w-5/12 p-3 pl-10'}>
						<VideoInformation
							fileName={media.videoFileName}
							videoId={videoId}
							isUploaded={status.isUploaded}
							thumbnailPath={media.thumbnailPath}
						/>
					</div>

					<FooterForm isUploaded={status.isUploaded} percent={status.percent} />
				</>
			) : (
				<Controller
					control={form.control}
					name='videoPath'
					render={() => (
						<UploadField
							title='Сначала загрузи видео👇'
							folder='video'
							onChange={media.handleUploadVideo}
							setValue={status.setProgressPercentage}
							setIsChosen={status.setIsChosen}
						/>
					)}
				/>
			)}
		</form>
	)
}

export default UploadVideoForm
