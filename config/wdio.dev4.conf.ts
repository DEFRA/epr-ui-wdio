import type { Options } from '@wdio/types'
import { config as baseConf } from './wdio.conf.js'

export const config: Options.Testrunner = {
    ...baseConf,
    baseUrl: "https://rwd-dev4.azure.defra.cloud"
}