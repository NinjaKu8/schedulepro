
export interface InitialCategory { 
  ussId: number;
  isRemovable: boolean;
  breakdownField: string | null;
  name: string;
	finalDraftTagNumber?: string;
}

export const initialCategories: InitialCategory[] = [
	// Removable Categories (editable by user)
  { ussId: 100, isRemovable: true, breakdownField: null, name: 'Cast', finalDraftTagNumber: '2' },
	{ ussId: 101, isRemovable: true, breakdownField: null, name: 'Background', finalDraftTagNumber: '3' },
	{ ussId: 102, isRemovable: true, breakdownField: null, name: 'Stunts', finalDraftTagNumber: '4' },
	{ ussId: 103, isRemovable: true, breakdownField: null, name: 'Vehicles', finalDraftTagNumber: '5' },
	{ ussId: 104, isRemovable: true, breakdownField: null, name: 'Props', finalDraftTagNumber: '6' },
	{ ussId: 105, isRemovable: true, breakdownField: null, name: 'SFX', finalDraftTagNumber: '8' },
	{ ussId: 106, isRemovable: true, breakdownField: null, name: 'Wardrobe', finalDraftTagNumber: '9' },
	{ ussId: 107, isRemovable: true, breakdownField: null, name: 'Makeup/Hair', finalDraftTagNumber: '10' },
	{ ussId: 108, isRemovable: true, breakdownField: null, name: 'Animals', finalDraftTagNumber: '11' },
	{ ussId: 109, isRemovable: true, breakdownField: null, name: 'Animal Handler', finalDraftTagNumber: '12' },
	{ ussId: 110, isRemovable: true, breakdownField: null, name: 'Camera', finalDraftTagNumber: '7' },
	{ ussId: 111, isRemovable: true, breakdownField: null, name: 'Grip', finalDraftTagNumber: '' },
	{ ussId: 112, isRemovable: true, breakdownField: null, name: 'Electric', finalDraftTagNumber: '' },
	{ ussId: 113, isRemovable: true, breakdownField: null, name: 'Sound', finalDraftTagNumber: '14' },
	{ ussId: 114, isRemovable: true, breakdownField: null, name: 'Music', finalDraftTagNumber: '13' },
	{ ussId: 115, isRemovable: true, breakdownField: null, name: 'Art Department', finalDraftTagNumber: '15' },
	{ ussId: 116, isRemovable: true, breakdownField: null, name: 'Set Dressing', finalDraftTagNumber: '16' },
	{ ussId: 117, isRemovable: true, breakdownField: null, name: 'Greenery', finalDraftTagNumber: '17' },
	{ ussId: 118, isRemovable: true, breakdownField: null, name: 'Security', finalDraftTagNumber: '18' },
	{ ussId: 119, isRemovable: true, breakdownField: null, name: 'Special Equipment', finalDraftTagNumber: '19' },
	{ ussId: 120, isRemovable: true, breakdownField: null, name: 'Additional Labor', finalDraftTagNumber: '20' },
	{ ussId: 121, isRemovable: true, breakdownField: null, name: 'VFX', finalDraftTagNumber: '21' },
	{ ussId: 122, isRemovable: true, breakdownField: null, name: 'MFX', finalDraftTagNumber: '22' },
	{ ussId: 123, isRemovable: true, breakdownField: null, name: 'Notes', finalDraftTagNumber: '24' },
	{ ussId: 124, isRemovable: true, breakdownField: null, name: 'Comments', finalDraftTagNumber: '' },
	{ ussId: 125, isRemovable: true, breakdownField: null, name: 'Misc', finalDraftTagNumber: '' },
	{ ussId: 126, isRemovable: true, breakdownField: null, name: 'Other', finalDraftTagNumber: '' },

	// Non-Removable Categories
	{ ussId: 0, isRemovable: false, breakdownField: 'set', name: 'Set' },
	{ ussId: 1, isRemovable: false, breakdownField: 'ie', name: 'INT/EXT' },
	{ ussId: 2, isRemovable: false, breakdownField: 'dn', name: 'Day/Night' },
	{ ussId: 3, isRemovable: false, breakdownField: 'scriptDay', name: 'Script Day', finalDraftTagNumber: '25' },
	{ ussId: 4, isRemovable: false, breakdownField: 'unit', name: 'Unit', finalDraftTagNumber: '26' },
	{ ussId: 5, isRemovable: false, breakdownField: 'sequence', name: 'Sequence', finalDraftTagNumber: '27' },
	{ ussId: 6, isRemovable: false, breakdownField: 'location', name: 'Location', finalDraftTagNumber: '28' },

  // Utility Categories (these don't correspond to USS ids)
	{ ussId: 7, isRemovable: false, breakdownField: 'scene', name: 'Scene Number' },
	{ ussId: 8, isRemovable: false, breakdownField: 'description', name: 'Description', finalDraftTagNumber: '1' },
	{ ussId: 9, isRemovable: false, breakdownField: 'pages', name: 'Pages' },
	{ ussId: 10, isRemovable: false, breakdownField: 'scriptPage', name: 'Script Page' },
	{ ussId: 11, isRemovable: false, breakdownField: 'duration', name: 'Duration' },
	{ ussId: 12, isRemovable: false, breakdownField: 'comments', name: 'Comments' },

	// Summary Categories (these don't correspond to USS ids)
	{ ussId: 90, isRemovable: false, breakdownField: '_shootDayNumber', name: 'Shoot Day Number' },
	{ ussId: 91, isRemovable: false, breakdownField: '_shootDate', name: 'Shoot Date' },
]
