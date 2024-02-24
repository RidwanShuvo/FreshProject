import React from 'react'
import Container from "../Container";
import {Flex} from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Model from "../../assets/model.png";
import Paragraph from '../Paragraph';
import Button2 from '../Button2';

const Banner = () => {
  return (
        <section className='bg-primaryColor' >
    <Container>
        <div className='py-[80px]'>
<Flex className="justify-between">
<div className='w-1/2 pr-20'>
<Heading className="font-pop text-[64px] font-semibold pr-10" text="Find The Best Fashion Style 
For You" as="h1"/>

<div className='pr-50'>
<Paragraph className="text-[22px] font-normal " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
</div>
<div className='py-[150px]'>
   <Button2 text="SHOP NOW"/>
</div>
</div>
<div className='w-1/2' >
    <Image src={Model}/>
 
</div>
</Flex>

</div>
    </Container>
   </section>
  );
}

export default Banner