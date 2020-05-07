import base from './base'
import mergeDeep from '@/utils/merge_deep'


export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'memberaddress'
  })
}

