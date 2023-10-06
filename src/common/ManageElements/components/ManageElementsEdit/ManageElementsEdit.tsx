import { ManagerEdit } from "common"
import { ManageElementsCalendar, ManageElementsCategory, ManageElementsDood, ManageElementsLinks, ManageElementsName } from "./components"

export function ManageElementsEdit(): JSX.Element {
  return (
    <ManagerEdit>
      <ManageElementsName />
      <ManageElementsCalendar />
      <ManageElementsDood />
      <ManageElementsLinks />
      <ManageElementsCategory />
    </ManagerEdit>
  )
}
