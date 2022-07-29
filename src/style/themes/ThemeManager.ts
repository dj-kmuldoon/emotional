import { themeLight as wsj, themeDark as wsj_dark } from './wsj'
import { themeLight as mw, themeDark as mw_dark } from './mw'
import { themeLight as bar, themeDark as bar_dark } from './bar'
import { themeLight as mg, themeDark as mg_dark } from './mg'

export const ThemeManager = (theme: number, mode: boolean) => {
    // if (isDark) return wsj_dark
    // if (!isDark) return wsj
    // return wsj

    switch(theme) {
        case 0:
          return (mode ? wsj : wsj_dark)
        case 1:
          return (mode ? mw : mw_dark)
        case 2:
          return (mode ? bar : bar_dark)        
        case 3:
            return (mode ? mg : mg_dark)                
        default:
            return wsj

      }


}