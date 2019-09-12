import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import {
  Box,
  Text,
  Heading,
  Flex
} from 'rebass';

import Slider from '@sections/Slider';

const Heading1 = styled(Heading)`
  ${'' /* position: absolute; */}
  color: black;
  ${'' /* top: 0; left: 0; bottom: 0; right: 0; */}
  ${'' /* margin: auto; */}

  text-shadow: 2px 2px 2px white;

`;

const AbBox = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  ${'' /* left: 50%;
  transform: translate(-50%, 0); */}
  z-index: 1;
  background-image: linear-gradient(rgba(169, 177, 189, 0.5), rgba(169, 177, 189, 0.5));
`;

const Cox = styled(Box)`
  position: relative;
`;



const NewHeader = ({ children }) => (
  <Cox>
  <AbBox alignItems='center' justifyContent='center'>
    <Heading1 textAlign="center"
              as="h1"

              fontSize={[1, 1, 7]}

              bg='white'>
      Cascos CPA, PC

    </Heading1>
  </AbBox>

  <Slider/>

</Cox>
);

export default NewHeader;
