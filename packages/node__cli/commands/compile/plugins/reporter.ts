// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */

import path from 'path'
import { Plugin } from 'esbuild'
import chalk from 'chalk'
import logUpdate from 'log-update'
import { version } from '../../../config'

export const reporterPlugin = (mode: string): Plugin => {
  const writeLogger = logUpdate.create(process.stderr, { showCursor: true })
  const startTime = Date.now()

  return {
    name: '@hairy/cli:logger',
    setup: ({ onResolve, onStart, onEnd }) => {
      onStart(() => {
        console.log(chalk.cyan(`@hairy/cli v${version} ${chalk.green(`building for ${mode}...`)}\n`))
      })
      const texts: string[] = []
      let remaining = 0
      onResolve({ filter: /.*/ }, (options): any => {
        if (!path.extname(options.path)) return
        if (texts.length <= 5) {
          texts.push(`build ${chalk.magenta(options.path)}`)
        }
        if (texts.length >= 6) {
          texts[6] = `build remaining ${chalk.cyan(remaining++)} files...`
        }
        if (texts.length > 0) writeLogger(texts.join('\n') + '\n')
      })
      onEnd(() => {
        if (mode !== 'development') {
          const endTime = (Date.now() - startTime) / 1000
          console.log(chalk.cyan(`@hairy/cli built in ${chalk.yellow(endTime + 's')}`))
        }
      })
    }
  }
}
