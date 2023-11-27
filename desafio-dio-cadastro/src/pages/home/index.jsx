import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHightlight } from "./styles"
import banner from "../../assets/banner.png"

const Home = () => {
    return (
        <>
        <Header></Header>
        <Container>
            <div>
                <Title>
                    <TitleHightlight>
                    Implemente 
                    <br />    
                    </TitleHightlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <img src={banner} alt="Banner" width="550px"/>
            </div>
        </Container>
        </>
    );
};

export { Home };