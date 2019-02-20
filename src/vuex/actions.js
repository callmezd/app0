


import * as types from './mutation_types'


function makeAction (type) {
  return ({ commit }, ...args) => commit(type, ...args)
}


export const SHOW = makeAction(types.SHOW);
export const pushlist = makeAction(types.PUSHLIST);
