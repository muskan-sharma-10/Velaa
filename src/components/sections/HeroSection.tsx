import React from 'react'
import { Typography } from '../typography'

type PropsType = {
  title: string
  subtitle: string
  colorFrom?: string
  colorTo?: string
  textColor?: string
}

const HeroSection = ({
  title,
  subtitle,
  colorFrom = 'from-green-100',
  colorTo = 'to-white-50',
  textColor = 'text-zinc-900',
}: PropsType) => {
  return (
    <div
      className={`bg-gradient-to-b ${colorFrom} ${colorTo} min-h-72 p-20 flex flex-col justify-center items-center text-center`}
    >
      <Typography className={`mb-3 ${textColor}`} variant="h1">
        {title}
      </Typography>
      <Typography className={`max-w-lg ${textColor} text-balance`} variant="p">
        {subtitle}
      </Typography>
    </div>
  )
}

export default HeroSection
