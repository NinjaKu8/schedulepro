import { DNDItems, DNDItem } from "types/types";

type Props = {
  dndItems: DNDItems;
  itemId: DNDItem;
}

export function getDNDContainerIdByChildId({ dndItems, itemId }: Props): string|null {
  return Object.keys(dndItems).reduce<string|null>((acc,cur)=>dndItems[cur].includes(itemId) ? cur : acc ,null)
}