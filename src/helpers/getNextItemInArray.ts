
type Props = {
  arr: string[];
  currentItem: string | null;
}

export function getNextItemInArray({ arr, currentItem }: Props): string | null {
  const index = arr.findIndex(id=>id===currentItem)
  return index<0 || index+1>=arr.length ? currentItem : arr[index+1]
}