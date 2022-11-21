import React from "react";
import {HStack} from '@chakra-ui/layout'
import {Icon} from '@chakra-ui/react'
import {LinkedinLogo, GithubLogo} from 'phosphor-react'

// import icon library

function Social() {
  return (
    <HStack spacing={'24'}>
        <Icon as={LinkedinLogo} boxSize={'50'} onClick={() => {
            window.open(`https://www.linkedin.com/in/lolontlemoatshe/`)
          }}/>
        <Icon as={GithubLogo} boxSize={'50'} onClick={() => {
            window.open(`https://github.com/Lolontle`)
          }}/>
    </HStack>
  )
  }
export default Social;
