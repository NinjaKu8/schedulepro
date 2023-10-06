
import { ManagerDualPane } from "common"
import { ManageCategoriesEdit, ManageCategoriesList, ManageCategoriesMenuBar } from "./components"

export function ManageCategories(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManageCategoriesMenuBar />}
      left={<ManageCategoriesList />}
      right={<ManageCategoriesEdit />}
    />
  )
}
