import path from 'path'

export function resolveTsAliases (tsconfigPath): Record<string, string> {
  const { baseUrl, paths } = require(tsconfigPath).compilerOptions
  const pathPrefix = path.resolve(path.dirname(tsconfigPath), baseUrl)
  const aliases = {}
  Object.keys(paths).forEach((item) => {
    const name = item.replace(/^(.*)\/\*$/, '$1/')
    const value = path.resolve(pathPrefix, paths[item][0].replace('/*', ''))
    aliases[name] = `${value}`
  })
  return aliases
}
