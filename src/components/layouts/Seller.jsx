import React from 'react'
import Container from '../Container';
import { Flex } from '../Flex';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Image from '../Image';
import SweatShirt from '../../assets/sweatShirt.png';
import Pant from '../../assets/pant.png';
import Button2 from '../Button2';
import Card from '../../components/card';



const Seller = () => {
  return (
   <section>
     <div className='bg-backgnd py-[100px]'>
    <Container>
      
        <Flex>
            <div className="w-1/3 pr-[20px]">
<Heading className="font-Frank text-[64px] font-bold text-white" text="Best Seller Product" as="h1"/>
<Paragraph className="text-[24px] text-white font-bold py-[70px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
<Button2 text="LEARN MORE"/>

</div>
            <div className="w-10/12 pl-[80px]">
                <Flex>
                <Image src={SweatShirt}/>
                
                <div className='pl-[25px]' >
                <Image src={Pant}/>
                </div>
                </Flex>
                <div className='flex'>
              <div>
              <h4 className='bg-white pl-[20px] py-[10px]'>★★★★★</h4>
                <Card text="Sweater Shirt"as="h4"/>
                
                </div>
                <div className='pl-[25.5px]'>
                <h4 className='bg-white pl-[20px] py-[10px]'>★★★★★</h4>
                <Card text="Pants fashion"as="h4"/>
                </div>
                </div>
            </div>

        </Flex>
       
    </Container>
    </div>
   </section>
  )
}

export default Seller