import { centerCrop, makeAspectCrop } from 'react-image-crop'

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
export function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number ) {
  return centerCrop(
    makeAspectCrop(
      { unit: '%', width: 100 },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}