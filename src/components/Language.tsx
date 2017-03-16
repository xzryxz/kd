import * as React from 'react'
import Flag from './Flag'


interface LanguageProps {
  routing: any
  pushUrl: any
}

export default class Language extends React.Component<LanguageProps, undefined> {

  toggle = () => {
    const currentUrl = this.props.routing.locationBeforeTransitions.pathname
    const urlParts = currentUrl.split('/')
    const locale = urlParts[1]
    switch (locale) {
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
    this.props.pushUrl(url)
  }

  render () {
    const currentUrl = this.props.routing.locationBeforeTransitions.pathname
    const urlParts = currentUrl.split('/')
    const locale = urlParts[1]
    return (
      <div id="language" onClick={this.toggle}>
        <Flag locale={locale} />
      </div>
    )
  }

}
