import React from 'react';
import { Tooltip } from '@chakra-ui/react'

import { User } from 'lucide-react';

const CustomToolTip = () => (
  <Tooltip label='lucaS' placement='top' position='absolute' marginTop='-10px' marginBottom='-10px' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3}  openDelay={300}>
    <User/>
  </Tooltip>
)

export default CustomToolTip;