import React from 'react'
import Container from "../Container";
import {Flex} from "../Flex";
import List from "../List";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="bg-primaryColor">
<Container>
    <Flex>
      <div className="w-1/4 py-3">
        <Image src={Logo}/>
      </div>
      <div className="w-1/2">
<ul>
  
  <Flex className="justify-between py-4 ">
<List href="#" text="Man"/>
<List href="#" text="Women"/>
<List href="#" text="Kids"/>
<List href="#" text="Collection"/>
<List href="#" text="Trends"/>
</Flex>

</ul>


</div>
<div className="w-1/4 text-right">
  
  <Button text="Login"/> 
  <Button className="ml-2" text="Sign Up"/>
  
</div>
</Flex>
</Container>
</nav>
  )
}

export default Navbar