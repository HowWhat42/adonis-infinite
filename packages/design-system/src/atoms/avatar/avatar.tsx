import React from 'react'

type AvatarProps = {
  src: string
}

export const Avatar = ({
  src,
}: AvatarProps) => {
  return (
    <img src={src} alt='avatar' className='w-24 h-24 object-cover rounded-full' />
  )
}
