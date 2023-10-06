import { ManagerDualPane } from "common"
import { ManageDesignsPalettesEdit, ManageDesignsPalettesList, ManageDesignsPalettesMenuBar } from "./components"

export function ManageDesignsPalettes(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManageDesignsPalettesMenuBar />}
      left={<ManageDesignsPalettesList />}
      right={<ManageDesignsPalettesEdit />}
    />
  )
}
