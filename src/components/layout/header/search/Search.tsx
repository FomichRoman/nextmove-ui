import s from './search.module.scss'
import { useSearch } from './useSearch'
import { FiSearch } from 'react-icons/fi'
import VideoItem from '@/ui/video-item/VideoItem'

export const Search = () => {
	const { handleSearch, data, isSuccess, searchTerm } = useSearch()
	return (
    <div className={s.search_top}>
      <label>
        <input type="text" placeholder='Поиск видео...' value={searchTerm} onChange={handleSearch}  />
        <FiSearch />
      </label>
      {isSuccess && (
        <div className={s.result}>
          { data?.length ? (
            data.map(video => <VideoItem isSmall item={video} key={video.id} />)
            ) : (
              <div className='text-white'>Видео не найдены!</div>
            )}
        </div>
      )}
    </div>
  )
}
