import * as constants from '../constants'

const domain = (state = constants.DEFAULT_DOMAIN_STATE, action) => {
  switch(action.type) {
    case constants.FETCH_DOMAIN_START:
      return Object.assign({}, state, {
        domainName: action.domainName,
        loading: true,
        available: null,
        error: null,
      })
    case constants.FETCH_DOMAIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        available: action.available
      })
    case constants.FETCH_DOMAIN_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}

export default domain
