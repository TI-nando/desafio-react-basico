import StyledText from "./components/StyledText";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Desafio 1 - Componente de Texto</h1>

      <StyledText text="Olá, sou Fernando" color="blue" />
      <StyledText text="Desenvolvedor Web" color="red" />
      <StyledText text="E um prazer te conhecer." color="#8a2be2" />

      <h1>Desafio 2 - Mostra mensagem label do botão</h1>
      
      <div className="btn">
        <Button label="Baixar CV" />
        <Button label="Enviar Formaulario" />
        <Button label="Fazer Login" />
      </div>
    </>
  );
}

export default App;
