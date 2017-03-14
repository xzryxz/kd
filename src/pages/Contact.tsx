import * as React from 'react'
import { connect } from 'react-redux'
import Document from '../components/Document'


interface ContactPageProps {
  routing: any
}

class ContactPage extends React.Component<ContactPageProps, undefined> {

  render () {
    return <Document fileName="Contact" langKey={this.props.routing.locationBeforeTransitions.pathname.split('/')[1]} />
  }

}

const mapStateToProps = (state: any) => ({
  routing: state.routing,
})

export default connect(mapStateToProps)(ContactPage)
