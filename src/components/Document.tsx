import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import documents from '../documents'


interface DocumentProps {
  fileNameSlug: string
  langKey: string
}

export default class Document extends React.Component<DocumentProps, undefined> {

  render () {
    const { fileNameSlug, langKey, } = this.props
    const realFileName = documents[`${fileNameSlug}_${langKey}`]
    return <ReactMarkdown source={realFileName} />
  }

}
