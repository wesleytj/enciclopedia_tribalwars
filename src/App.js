import GoldBox from "./components/GoldBox";
import Logo from "./components/Logo";
import logoTW from "./assets/images/logo-tw.png";

function App() {
  return (
    <>
      <Logo></Logo>
      <main className="min-h-screen p-10 
      flex flex-row justify-center items-center">
        <GoldBox>
          <h1 className="font-title text-[3rem] text-center
          text-[#2f1b0c] drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] mb-2 tracking-wide">Enciclopédia</h1>
          <img src={logoTW} alt="Tribal Wars Logo" className="w-[400px] m-auto mb-10" />
          <p className="font-content text-lg text-justify text-zinc-800 px-4 leading-relaxed">
            A <strong>Enciclopédia Tribal Wars</strong> é um projeto independente criado para reunir, organizar e apresentar de forma acessível o vasto conhecimento sobre o universo do <em>Tribal Wars</em>.
            <br /><br />
            Aqui você encontrará <strong>guias estratégicos</strong>, <strong>explicações detalhadas sobre unidades</strong>, <strong>dicas de noblagem</strong>, <strong>configurações de aldeias</strong>, <strong>scripts permitidos</strong>, além de recursos úteis como calculadoras e simuladores — tudo isso em uma interface imersiva e inspirada no estilo medieval clássico do jogo.
            <br /><br />
            Seja você um jogador iniciante buscando aprender os fundamentos, ou um veterano querendo refinar suas táticas, esta enciclopédia é o seu ponto de partida para dominar o mundo tribal.
            <br /><br />
            🛡️ <strong>Explore. Aprenda. Conquiste.</strong>
          </p>
        </GoldBox>
      </main>
    </>
  );
}

export default App;