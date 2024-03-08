import { themes } from "@tamagui/themes";
import { Link } from "expo-router";
import { Button, Card, H2, Image, Text ,Theme,View} from "tamagui";
const Page=()=>{
    return(
      <View>
         <Theme name="red">
          <Link  href={'/(drawer)/home/(movie)/1'}>
            Movie1
          </Link>
          <Button></Button>
         </Theme>
       <View flexDirection="row" justifyContent="space-between">
           <Card height={200} hoverStyle={{scale:0.925 ,animation:"quick"}} pressStyle={{scale:0.95}} animation={"bouncy"}>
             <Card.Header>
                <Text fontStyle="italic" color={"white"}>Hello World</Text>
             </Card.Header>

             <Card.Footer>
             <Text fontStyle="italic" color={"white"} padding={"$-4.5"}>Hello World</Text>
            </Card.Footer>

            <Card.Background>
                   <Image source={{width:200,height:200, uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26ZoGcc26AYLldLz1RiLgWSNE5C_n5zbpl7wBGb5EtQ&s"}}
                   width="100%"
                   height="100%"
                   />
            </Card.Background>
         </Card>
         <Theme name="blue">
         <Card height={200}>
             <Card.Header>
                <Text fontStyle="italic" color={"white"}>Hello World</Text>
             </Card.Header>

             <Card.Footer>
             <Text fontStyle="italic" color={"white"} padding={"$-4.5"}>Hello World</Text>
            </Card.Footer>

            <Card.Background>
               
            </Card.Background>
         </Card>

         </Theme>
         <Theme name="blue">
         <Card height={200}>
             <Card.Header>
                <Text fontStyle="italic" color={"white"}>Hello World</Text>
             </Card.Header>

             <Card.Footer>
             <Text fontStyle="italic" color={"white"} padding={"$-4.5"}>Hello World</Text>
            </Card.Footer>

            <Card.Background>
               
            </Card.Background>
         </Card>

         </Theme>
        
        
         </View>
   </View>

    )
}

export default Page;