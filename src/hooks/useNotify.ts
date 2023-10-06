import { useContext } from 'react'

import { NotifyContext } from "common"
import { IContext } from 'common/NotifyProvider/NotifyProvider'

export const useNotify = (): IContext => {
  const helpers = useContext(NotifyContext)
  return helpers
}