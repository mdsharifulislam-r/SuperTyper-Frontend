import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function TypingEffectBox({text}) {
  return (
      <TypeAnimation
          style={{ whiteSpace: 'pre-line', display: 'block' }}
          sequence={[
              `${text}`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
              1000,
              '',
          ]}
          repeat={Infinity}
          speed={10}
      />
  )
}
