import React from 'react'
import Container from "../Container";
import {Flex} from "../Flex";
import Image from '../Image';
import Winterjac from "../../assets/winterjac.png";
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const Fashion = () => {
  return (
 <section>
    <Container>
        <div className='py-[250px]'>
    <Flex>
        <div className='w-1/2'>

        <Image src={Winterjac}/>
 </div>
 <div className='w-1/2 pr-[115px] pl-[150px]'>
 <Heading className="font-Frank text-[64px] font-bold" text="Best Fashion
Since 2010" as="h1"/>
<Paragraph className="text-[24px] font-semibold py-[100px] " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."/>
 </div>
        </Flex>
        </div>
    </Container>
 </section>
  )
}

export default Fashion