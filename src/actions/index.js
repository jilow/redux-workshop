import * as constants from '../constants'
import DomainNameClient from '../clients/domain'

const client = new DomainNameClient('https://httpbin.org')

const fetchDomainStart = domainName => ({
  type: constants.FETCH_DOMAIN_START,
  domainName
})

const fetchDomainSuccess = available => ({
  type: constants.FETCH_DOMAIN_SUCCESS,
  available
})

const fetchDomainError = error => ({
  type: constants.FETCH_DOMAIN_ERROR,
  error
})

export const fetchDomainAvailability = domainName => {
  return async (dispatch) => {
    dispatch(fetchDomainStart(domainName))
    try {
      const available = await client.isAvailable(domainName)
      dispatch(fetchDomainSuccess(available))
    } catch(err) {
      dispatch(fetchDomainError(err))
    }
  }
}
