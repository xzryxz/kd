import * as React from 'react'
import { connect } from 'react-redux'
import Document from '../components/Document'


interface HomePageProps {
  routing: any
}

class HomePage extends React.Component<HomePageProps, undefined> {

  render () {
    return <Document fileNameSlug="TheKoreanDemocrats" langKey={this.props.routing.locationBeforeTransitions.pathname.split('/')[1]} />
  }

}

const mapStateToProps = (state: any) => ({
  routing: state.routing,
})

export default connect(mapStateToProps)(HomePage)
