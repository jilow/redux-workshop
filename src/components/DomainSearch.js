import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import './DomainSearch.css'

class DomainSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      domainName: this.props.domain.domainName
    }
  }
  handleChange(event) {
    const element = event.target
    const domainName = element.value.trim()
    this.setState({ domainName })
  }
  handleSubmit(event) {
    event.preventDefault()
  }
  render() {
    return (
      <div className="DomainSearch">

        <form onSubmit={ this.handleSubmit.bind(this) }>
          <label>Domain: </label>
          <input value={ this.state.domainName } onChange={ this.handleChange.bind(this) } />
          <button type="submit">Go</button>
        </form>

        <div>
          <pre>
            <strong>this.props.domain</strong>
            <code>{ JSON.stringify(this.props.domain) }</code>
          </pre>
          
          <pre>
            <strong>this.state</strong>
            <code>{ JSON.stringify(this.state) }</code>
          </pre>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  domain: state.domain
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(DomainSearch)
