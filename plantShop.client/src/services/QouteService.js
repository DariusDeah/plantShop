import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
class QouteService {
  async getQoutes() {
    const res = await api.get('https://type.fit/api/quotes')
    _convertAuthorOrText(res.data)
    AppState.qoute = res.data[Math.floor(Math.random() * res.data.length - 1)]
    logger.log('get qoutes function', AppState.qoute.author)
  }
}
export const qouteService = new QouteService()

//! Private
/** converts author or text to a string  if a value of null or undefined is found
 * @param x -takes in the the data that will be iterated of over if a value of no or undefined is found it is converted to unknown if not the data is not converted and is returned back
 */
const _convertAuthorOrText = (x) => {
  for (let i = 0; i <= x.length - 1; i++) {
    if (x[i].author === null || undefined) {
      x[i].author = 'Unknown'
    }
    if (x[i]?.text === null || undefined) {
      x[i].text = '404 no qoutes found , but ..sometimes no words are the best words'
    }
  }
  return x
}
// finding qoutes with null authors
const _findUnknown = async() => {
  const res = await api.get('https://type.fit/api/quotes')
  for (let i = 0; i <= res.data.length - 1; i++) {
    if (res.data[i].author) {
      continue
    }
    logger.log('unknow author ', res.data[i], '@index', [i])
  }
}// ()
