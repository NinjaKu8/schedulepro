
export interface InitialElementBody { name: string; paletteCoord: number|null; }
export interface InitialElement {
  ussId: number;
  element: InitialElementBody;
}

export const initialElements: InitialElement[] = [
	{ussId: 1, element: { name: 'INT', paletteCoord: 0 } },
	{ussId: 1, element: { name: 'EXT', paletteCoord: 1 } },
	{ussId: 1, element: { name: 'I/E', paletteCoord: 2 } },

	{ussId: 2, element: { name: 'DAY', paletteCoord: 2 } },
	{ussId: 2, element: { name: 'NIGHT', paletteCoord: 7 } },
	{ussId: 2, element: { name: 'MORNING', paletteCoord: 1 } },
	{ussId: 2, element: { name: 'AFTERNOON', paletteCoord: 3 } },
	{ussId: 2, element: { name: 'EVENING', paletteCoord: 6 } },
	{ussId: 2, element: { name: 'DUSK', paletteCoord: 4 } },
	{ussId: 2, element: { name: 'DAWN', paletteCoord: 0 } },
	{ussId: 2, element: { name: 'MAGIC HOUR', paletteCoord: 5 } },
	{ussId: 2, element: { name: 'SPACE', paletteCoord: 8 } },

	{ussId: 3, element: { name: 'D1', paletteCoord: null } },
	{ussId: 3, element: { name: 'N1', paletteCoord: null } },

	{ussId: 4, element: { name: 'First', paletteCoord: null } },
	{ussId: 4, element: { name: 'Second', paletteCoord: null } },
	{ussId: 4, element: { name: 'Splinter', paletteCoord: null } },
	{ussId: 4, element: { name: 'Stunt', paletteCoord: null } },
	{ussId: 4, element: { name: 'VFX', paletteCoord: null } },
]