import * as React from 'react'
import { connect } from 'react-redux'
import Document from '../components/Document'


interface AboutPageProps {
  routing: any
}

class AboutPage extends React.Component<AboutPageProps, undefined> {

  render () {
    return <Document fileName="About" langKey={this.props.routing.locationBeforeTransitions.pathname.split('/')[1]} />
  }

}

const mapStateToProps = (state: any) => ({
  routing: state.routing,
})

export default connect(mapStateToProps)(AboutPage)
