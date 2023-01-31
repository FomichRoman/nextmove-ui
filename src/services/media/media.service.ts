import { store } from '@/redux/store';
import { axiosClassic } from '@/src/api/axios';
import { IMediaResponse } from './media.interface';
export const MediaService = {
 async upload(media: FormData, folder?: string, setValue?: (val:number) => void) {
  const prepareHeaders = () => {
    const token = store.getState().auth.accessToken
    if (!token) return {
      'Content-Type': 'multipart/form-data'
    }
    return {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
  }
  return axiosClassic.post<IMediaResponse>('/media', media, {
    params: {folder},
    headers: prepareHeaders(),
    onUploadProgress: processEvent => {
      if (setValue) {
        //@ts-ignore
        const progress = (processEvent.loaded / processEvent.total) * 100
        setValue(Math.ceil(progress))
      }
    }
  })
 }
}