import React from 'react';

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'

const VolumeSlider = () => {

  return (
    <Slider aria-label='slider-ex-2' size={'lg'} defaultValue={70} min={5} max={100} focusThumbOnChange={false} cursor={'default'} role='group'>
    <SliderTrack bg={'neutral.700'}>
      <SliderFilledTrack bg={'white'} _groupHover={{bg:'spotifygreen.500'}}/>
    </SliderTrack>
    <SliderThumb  visibility={'hidden'} _groupHover={{boxSize:3,visibility:'visible'}}/>
  </Slider>
  )
}

export default VolumeSlider;