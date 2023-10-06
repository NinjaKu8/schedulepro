import { ManagerEdit } from "common"
import { ManageDesignsPalettesName, ManageDesignsPalettesButton, ManageDesignsPalettesUsers } from "./components"

export function ManageDesignsPalettesEdit(): JSX.Element {
  return (
    <ManagerEdit>
      <ManageDesignsPalettesName />
      <ManageDesignsPalettesButton />
      <ManageDesignsPalettesUsers />
    </ManagerEdit>
  )
}
