import React from 'react'
import Heading from '../Heading'
import Container from "../Container";
import {Flex} from "../Flex";
import Image from '../Image';
import Sweater from "../../assets/sweater.png"
import Jeans from "../../assets/jeans.png"
import Baskets from "../../assets/baskets.png"


const Collection = () => {
  return (
    <section>
        <Container>
            <Heading className="font-Frank text-[64px] font-bold py-[200px] text-center" text="New Collection" as="h1"/>
 <Flex>       
<Image src={Sweater}/>
<div className='px-[98px]'>
<Image src={Jeans}/>
</div>
<Image src={Baskets}/>
 </Flex>
        </Container>
    </section>
  )
}

export default Collection