import type { Options } from '@wdio/types'
import { config as azureBaseConf } from './wdio.azure.conf.js'

export const config: Options.Testrunner = {
    ...azureBaseConf,
    baseUrl: "https://rwd-dev7.azure.defra.cloud"
}