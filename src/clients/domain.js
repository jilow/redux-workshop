import axios from 'axios'

export default class DomainNameClient {
  
  constructor(host) {
    this.host = host
  }

  async isAvailable (domainName) {
    const response = await request.get(this.host + '/domain/search', {
      params: { 'domain_name': domainName }
    })
    try {
      return response.data.data
    } catch (error) {
      return false
    }
  }

  async listTlds () {
    const response = await request.get(this.host + '/domain/list_tlds')
    try {
      return response.data.data
    } catch (error) {
      return []
    }
  }

}

export default DomainClient
