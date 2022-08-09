import { Brands } from "../../constants"

import { themeLight as wsj, themeDark as wsj_dark } from './wsj'
import { themeLight as mw, themeDark as mw_dark } from './mw'
import { themeLight as bar, themeDark as bar_dark } from './brn'
import { themeLight as mg, themeDark as mg_dark } from './mg'
import { themeLight as dj, themeDark as dj_dark } from './dj'
import { themeLight as ofn, themeDark as ofn_dark } from './ofn'
import { themeLight as fnl, themeDark as fnl_dark } from './fnl'

export const ThemeManager = (theme: number, mode: boolean) => {

    switch(theme) {
        case Brands.wsj:
          return (mode ? wsj : wsj_dark)
        case Brands.mw:
          return (mode ? mw : mw_dark)       
        case Brands.mg:
            return (mode ? mg : mg_dark)
        case Brands.brn:
            return (mode ? bar : bar_dark)
        case Brands.dj:
            return (mode ? dj : dj_dark)     
        case Brands.ofn:
            return (mode ? ofn : ofn_dark)
            case Brands.fnl:
                return (mode ? fnl : fnl_dark)                                                     
        default:
            return wsj

      }


}

// export const Brands = {
// 	wsj: 0,
// 	mw: 1,
// 	brn: 2,
// 	mg: 3,
//     dj: 4,
//     fn: 5,
// }