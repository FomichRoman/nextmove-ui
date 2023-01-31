import { videoApi } from '@/redux/api/video.api';
import { useState } from 'react'
import { HiUpload } from 'react-icons/hi';
import s from '../icons-right/iconsright.module.scss'
import UploadModal from './UploadModal';


export const UploadVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState<number>(0);

  const [createVideo, {isLoading}] = videoApi.useCreateVideoMutation()
  return (
    <>
    <button className={s.btn} disabled={isLoading} onClick={() => {
      createVideo().unwrap().then(id => {
        setVideoId(+id)
        setIsOpen(true)
      })
    }}>
      <HiUpload />
    </button>
    <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
    </>
  )
}