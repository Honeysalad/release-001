import React from 'react'
import './Timeline.css'
import { generateColour, generateNumber } from './utils'

function Timeline() {

  const initialColour = generateColour()
  const finalColour = generateColour()
  const xCount = generateNumber(30, 100)
  const yCount = generateNumber(30, 100)
  const maxVersionSize = generateNumber(40, 60)

  return (
    <div className="timeline">
      {
        new Array(yCount).fill().map((item, i) => {
          return (
            <div className="line" key={`line ${i}`} style={{height: `${maxVersionSize}px`}}>
              {new Array(xCount).fill().map((item, j) => {
                const margin = j * 2
                return (
                  <div
                    className="version-container"
                    style={{
                      height: `${maxVersionSize}px`,
                      width: `${maxVersionSize}px`,
                    }}
                    key={`vc${i}${j}`}
                  >
                    <div 
                      className="version"
                      style={{
                        margin: `${margin}px ${margin}px ${margin}px 0`,
                        height: `${maxVersionSize - (j - 1) * 2}px`,
                        width: `${maxVersionSize}px`,
                        borderRadius: `${(j - 1) * 5}%`,
                        backgroundColor: `rgb(
                          ${(initialColour[0]*(xCount - j) + finalColour[0] * j)/xCount},
                          ${(initialColour[1]*(xCount - j) + finalColour[1] * j)/xCount},
                          ${(initialColour[2]*(xCount - j) + finalColour[2] * j)/xCount}
                        )`,
                      }}
                      key={`v${i}${j}`}
                    />
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default Timeline;
