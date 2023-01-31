import { Transition, Dialog } from '@headlessui/react'
import { FC, Fragment } from 'react'
import UploadVideoForm from './upload-video-form/UploadVideoForm'
import { IUploadModal } from './upload-video.interface'
import s from './UploadVideo.module.scss'


const UploadModal: FC<IUploadModal> = ({ isOpen, setIsOpen, videoId }) => {
  const handleCloseModal = () => setIsOpen(false)
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={handleCloseModal} className={s.modal} >
      <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={s.overlay} aria-hidden='true' />
          </Transition.Child>

          <div className={s.wrapper}>
            <div>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={s.window}>
                  <UploadVideoForm videoId={videoId} handleCloseModal={handleCloseModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

      </Dialog>
    </Transition>
  )
}



export default UploadModal