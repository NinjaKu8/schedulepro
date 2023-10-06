
type Props = {
  arr: string[];
  currentItem: string | null;
}

export function getPreviousItemInArray({ arr, currentItem }: Props): string | null {
  const index = arr.findIndex(id=>id===currentItem)
  return index<=0 ? currentItem : arr[index-1]
}