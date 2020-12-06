import { UserConfig } from 'vite'
import path from 'path'
import { resolveTsAliases } from './.vite/plugins/resolver'

const config: UserConfig = {
  alias: resolveTsAliases(path.resolve('tsconfig.json'))
}

export default config
