import * as React from 'react'
import * as classnames from 'classnames'


interface LanguageProps {
  routing: any
}

export default class Language extends React.Component<LanguageProps, undefined> {

  toggle = () => {
    const currentLangKey = this.props.routing.locationBeforeTransitions.pathname.split('/')[1]
    console.log(currentLangKey)
  }

  render () {
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
      </div>
    )
  }

}
