import { Switch } from '@headlessui/react'
import { FC } from 'react'

interface ITogglePublic {
	isEnabled: any
	clickHandler: any
}

const TogglePublic: FC<ITogglePublic> = ({ isEnabled, clickHandler }) => {
	return (
		<Switch.Group>
			<div className='flex items-center'>
				<Switch
					checked={isEnabled}
					onChange={clickHandler}
					className={`${
						isEnabled ? 'bg-blue-600' : 'bg-gray-200'
					} relative inline-flex h-6 w-11 items-center rounded-full mr-4`}
				>
					<span className='sr-only'>Enable notifications</span>
					<span
						className={`${
							isEnabled ? 'translate-x-6' : 'translate-x-1'
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</Switch>
        <Switch.Label>Публичное видео</Switch.Label>
			</div>
		</Switch.Group>
	)
}

export default TogglePublic
