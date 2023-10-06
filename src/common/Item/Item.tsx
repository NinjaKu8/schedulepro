import { DNDItem } from 'types/types'
import classnames from 'classnames'

type Props = {
	id: DNDItem;
	isSelected?: boolean;
}

const itemObjects = [
	{ _id: '0', color: '#8378ff' },
	{ _id: '1', color: '#50CE65' },
	{ _id: '2', color: '#50CE65' },
	{ _id: '3', color: '#8378ff' },
	{ _id: '4', color: '#221D58' },
	{ _id: '5', color: '#FFB03A' },
	{ _id: '6', color: '#F8F9FB' },
	{ _id: '7', color: '#F8F9FB' },
	{ _id: '8', color: '#FFB03A' },
	{ _id: '9', color: '#221D58' },
	{ _id: '10', color: '#8378ff' },
	{ _id: '11', color: '#50CE65' },
	{ _id: '12', color: '#50CE65' },
	{ _id: '13', color: '#8378ff' },
	{ _id: '14', color: '#221D58' },
	{ _id: '15', color: '#FFB03A' },
	{ _id: '16', color: '#F8F9FB' },
	{ _id: '17', color: '#F8F9FB' },
	{ _id: '18', color: '#FFB03A' },
	{ _id: '19', color: '#221D58' },
	{ _id: '20', color: '#8378ff' },
	{ _id: '21', color: '#50CE65' },
	{ _id: '22', color: '#50CE65' },
	{ _id: '23', color: '#8378ff' },
	{ _id: '24', color: '#221D58' },
	{ _id: '25', color: '#FFB03A' },
	{ _id: '26', color: '#F8F9FB' },
	{ _id: '27', color: '#F8F9FB' },
	{ _id: '28', color: '#FFB03A' },
	{ _id: '29', color: '#221D58' },
	{ _id: '30', color: '#8378ff' },
	{ _id: '31', color: '#50CE65' },
	{ _id: '32', color: '#50CE65' },
	{ _id: '33', color: '#8378ff' },
	{ _id: '34', color: '#221D58' },
	{ _id: '35', color: '#FFB03A' },
	{ _id: '36', color: '#F8F9FB' },
	{ _id: '37', color: '#F8F9FB' },
	{ _id: '38', color: '#FFB03A' },
	{ _id: '39', color: '#221D58' },
	{ _id: '40', color: '#8378ff' },
	{ _id: '41', color: '#50CE65' },
	{ _id: '42', color: '#50CE65' },
	{ _id: '43', color: '#8378ff' },
	{ _id: '44', color: '#221D58' },
	{ _id: '45', color: '#FFB03A' },
	{ _id: '46', color: '#F8F9FB' },
	{ _id: '47', color: '#F8F9FB' },
	{ _id: '48', color: '#FFB03A' },
	{ _id: '49', color: '#221D58' },
	{ _id: '50', color: '#8378ff' },
	{ _id: '51', color: '#50CE65' },
	{ _id: '52', color: '#50CE65' },
	{ _id: '53', color: '#8378ff' },
	{ _id: '54', color: '#221D58' },
	{ _id: '55', color: '#FFB03A' },
	{ _id: '56', color: '#F8F9FB' },
	{ _id: '57', color: '#F8F9FB' },
	{ _id: '58', color: '#FFB03A' },
	{ _id: '59', color: '#221D58' },
	{ _id: '60', color: '#8378ff' },
	{ _id: '61', color: '#50CE65' },
	{ _id: '62', color: '#50CE65' },
	{ _id: '63', color: '#8378ff' },
	{ _id: '64', color: '#221D58' },
	{ _id: '65', color: '#FFB03A' },
	{ _id: '66', color: '#F8F9FB' },
	{ _id: '67', color: '#F8F9FB' },
	{ _id: '68', color: '#FFB03A' },
	{ _id: '69', color: '#221D58' },
	{ _id: '70', color: '#8378ff' },
	{ _id: '71', color: '#50CE65' },
	{ _id: '72', color: '#50CE65' },
	{ _id: '73', color: '#8378ff' },
	{ _id: '74', color: '#221D58' },
	{ _id: '75', color: '#FFB03A' },
	{ _id: '76', color: '#F8F9FB' },
	{ _id: '77', color: '#F8F9FB' },
	{ _id: '78', color: '#FFB03A' },
	{ _id: '79', color: '#221D58' },
	{ _id: '80', color: '#8378ff' },
	{ _id: '81', color: '#50CE65' },
	{ _id: '82', color: '#50CE65' },
	{ _id: '83', color: '#8378ff' },
	{ _id: '84', color: '#221D58' },
	{ _id: '85', color: '#FFB03A' },
	{ _id: '86', color: '#F8F9FB' },
	{ _id: '87', color: '#F8F9FB' },
	{ _id: '88', color: '#FFB03A' },
	{ _id: '89', color: '#221D58' },
	{ _id: '90', color: '#8378ff' },
	{ _id: '91', color: '#50CE65' },
	{ _id: '92', color: '#50CE65' },
	{ _id: '93', color: '#8378ff' },
	{ _id: '94', color: '#221D58' },
	{ _id: '95', color: '#FFB03A' },
	{ _id: '96', color: '#F8F9FB' },
	{ _id: '97', color: '#F8F9FB' },
	{ _id: '98', color: '#FFB03A' },
	{ _id: '99', color: '#221D58' }
]

export function Item({ id, isSelected }: Props): JSX.Element {
	// in lieu of redux call
	const itemObject = itemObjects.find((i) => i._id === id)

	return (
		<div className='position-relative w-100 user-select-none'>
			<div 
				className={classnames('rounded-1 p-3', isSelected && 'bg-selected')}
				style={{ backgroundColor: !isSelected ? itemObject?.color : 'inherit' }}
			>
				{itemObject?._id}
			</div>
		</div>
	)
}
