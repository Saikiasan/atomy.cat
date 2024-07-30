import {UI} from './modules/misc.js'
import {Search} from './modules/search.js'
import { Alertify } from './modules/alertify.js'

UI.theme('#theme-ui')
UI.preload()

Search.showSearchField('#show-search')
Alertify.updates({date: "20-32-34"})
