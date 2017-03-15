import * as React from 'react'
import * as classnames from 'classnames'


interface LanguageProps {
  routing: any
  toggleLanguage: any
}

export default class Language extends React.Component<LanguageProps, undefined> {

  toggle = () => {
    const currentUrl = this.props.routing.locationBeforeTransitions.pathname
    const urlParts = currentUrl.split('/')
    const currentLangKey = urlParts[1]
    switch (currentLangKey) {
      case 'en':
        urlParts[1] = 'ko'
        break
      case 'ko':
        urlParts[1] = 'en'
        break
      default:
        throw new Error('Unexpected.')
    }
    const url = urlParts.join('/')
    this.props.toggleLanguage(url)
  }

  render () {
    return (
      <div>
        <div onClick={this.toggle}> toggle </div>
      </div>
    )
  }

}
