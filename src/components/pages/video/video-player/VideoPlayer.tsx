import s from './VideoPlayer.module.scss'
import { usePlayer } from './usePlayer'
import cn from 'classnames'
import { FC } from 'react'
import { IoPause, IoPlay } from 'react-icons/io5'
import { BsFullscreen } from 'react-icons/bs'

interface IVideoPlayer {
	videoPath: string
}

const VideoPlayer: FC<IVideoPlayer> = ({ videoPath }) => {
	const { videoRef, toggleVideo, status, fullScreen } = usePlayer()
	return (
		<div className={s.wrapper}>
			<video
				ref={videoRef}
				className={s.player}
				src={`${videoPath}#t=8`}
				preload='metadata'
				onClick={toggleVideo}
			/>
			<div className={cn(s.controls, { [s.hide]: status.isPlaying })}>
				<button onClick={toggleVideo}>
					{status.isPlaying ? <IoPause /> : <IoPlay />}
				</button>

				<div className={s.progressBarWrapper}>
					<div
						className={s.progressBar}
						style={{ width: `${status.progress}` }}
					/>
				</div>

				<div className={s.timeControls}>
					<p>
						{Math.floor(status.currentTime / 60) +
							':' +
							('0' + Math.floor(status.currentTime % 60)).slice(-2)}
					</p>
					<p> / </p>
					<p>
						{Math.floor(status.videoTime / 60) +
							':' +
							('0' + Math.floor(status.videoTime % 60)).slice(-2)}
					</p>
				</div>

        <button onClick={fullScreen}>
          <BsFullscreen className='text-tiny' />
        </button>
			</div>
		</div>
	)
}

export default VideoPlayer
