import request from 'axios'

export default class DomainNameClient {
  
  constructor(host) {
    this.host = host
  }

  async isAvailable (domainName) {
    const response = await request.post(this.host + '/post', {
      available: true
    })
    try {
      return response.data.json.available
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
