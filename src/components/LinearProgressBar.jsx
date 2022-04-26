import React from 'react';
import { ProgressBarLine } from 'react-progressbar-line';

const LinearProgressBar = ({ value }) => {
  return (
    <ProgressBarLine
        value={value}
        min={0}
        max={100}
        strokeWidth={2}
        trailWidth={2}
        styles={{
          path: {
            stroke: '#0dc528'
          },
          trail: {
            stroke: 'rgb(164, 167, 167)',
          },
          text: {
            fill: 'rgba(0, 48, 73, 1)',
            textAlign: 'center',
            fontSize: '14px'
          },
        }}
      />
  )
}

export default LinearProgressBar