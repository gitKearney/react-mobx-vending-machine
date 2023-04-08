import React from 'react'

interface AppProps {
  author: {
    first_name: string
    last_name: string
  }
  spdx: string
  copyright: number
}

const Footer = ({ author, copyright, spdx }: AppProps): JSX.Element => {
  return (
    <>
      <hr />
      <p>
        &copy;{copyright} {author.first_name} {author.last_name} - {spdx}
      </p>
    </>

  )
}

export default Footer
