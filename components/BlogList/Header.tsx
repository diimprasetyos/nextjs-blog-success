import React from 'react'

const Header = ({title, subTitle, linkHref, linkTitle}) => {
  return (
    <div className="flex  flex-col justify-between  py-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className='text-base'>{subTitle}</h2>
      <br/>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-lg text-md hover:underline"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}

export default Header