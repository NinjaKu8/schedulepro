
type Props = {
  breakdownId: string;
  field: 'sc' | 'pgs' | 'slugline' | 'description' | 'completedTime' | 'status' | 'isComplete' | 'className' | 'duration';
}

type SceneProps = {
  id: string;
  sc: string;
  pgs: number;
  slugline: string;
  description: string;
  completedTime: string | null;
  isComplete: boolean;
  status: string | null;
  className?: string;
  duration: number;
}

export const breakdowns: SceneProps[] = [
  { id: '1', sc: '6', pgs: .25, slugline: 'INT. GOWER DRUGSTORE - DAY', description: 'George enters and pours Mary a soda.', completedTime: '2023-05-16T16:51:22.264Z', status: null, isComplete: true, className: 'bg-warning-25', duration: 3900000 },
  { id: '2', sc: '12', pgs: .875, slugline: 'INT. GOWER DRUGSTORE - DAY', description: 'George returns to visit with his old boss', completedTime: '2023-05-16T17:32:22.264Z', status: null, isComplete: true, className: 'bg-warning-25', duration: 1800000 },
  { id: '3', sc: '32', pgs: .125, slugline: 'INT. LUGGAGE STORE - NIGHT', description: 'George runs into Violet at the store', completedTime: '2023-05-16T18:11:22.264Z', status: null, isComplete: true, className: 'bg-primary-25', duration: 4200000 },
  { id: '4', sc: '102APT1', pgs: .875, slugline: 'EXT. BEDFORD FALLS BEDFORD FALLS BEDFORD FALLS - NIGHT', description: 'George runs down the street. George runs down the street. George runs down the street. George runs down the street.', completedTime: null, status: 'part', isComplete: false, className: 'bg-success-25', duration: 3600000 },
  { id: '5', sc: '10', pgs: 2.25, slugline: 'INT. GOWER DRUGSTORE - DAY', description: 'George enters and pours Mary a soda.', completedTime: null, status: 'shooting', isComplete: false, className: 'bg-warning-25', duration: 7200000 },
  { id: '6', sc: '3', pgs: .125, slugline: 'INT. GOWER DRUGSTORE - DAY', description: 'George returns to visit with his old boss', completedTime: null, status: null, isComplete: false, className: 'bg-warning-25', duration: 5400000 },
  { id: '7', sc: '123', pgs: .25, slugline: 'INT. LUGGAGE STORE - NIGHT', description: 'George runs into Violet at the store', completedTime: null, status: null, isComplete: false, className: 'bg-primary-25', duration: 10800000 },
  { id: '9', sc: '67', pgs: .375, slugline: 'INT. GOWER DRUGSTORE - DAY', description: 'George enters and pours Mary a soda.', completedTime: null, status: null, isComplete: false, className: 'bg-warning-25', duration: 1800000 },
  { id: '10', sc: '42', pgs: .875, slugline: 'INT. GOWER DRUGSTORE - DAY', description: 'George returns to visit with his old boss', completedTime: null, status: null, isComplete: false, className: 'bg-warning-25', duration: 900000 },
  { id: '11', sc: '78', pgs: .75, slugline: 'INT. LUGGAGE STORE - NIGHT', description: 'George runs into Violet at the store', completedTime: null, status: null, isComplete: false, className: 'bg-primary-25', duration: 3600000 },
]

export function StripSimpleBreakdownField({ breakdownId, field }: Props): JSX.Element {
  const breakdown = breakdowns.find(b => b.id === breakdownId)
  return (
    <>
      {breakdown && breakdown[field]}
    </>
  )
}