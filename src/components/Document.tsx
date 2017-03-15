import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import documents from '../documents'


interface DocumentProps {
  fileName: string
  langKey: string
}

export default class Document extends React.Component<DocumentProps, undefined> {

  render () {
    const { fileName, langKey, } = this.props
    return <ReactMarkdown source={documents[`${fileName}_${langKey}`]} />
  }

}
