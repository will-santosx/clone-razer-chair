import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="min-h-screen w-full bg-black">
			<Header />
			<div className="flex w-full items-center flex-col font-Normal">
				<img
					className="mt-[60px]"
					src="https://assets2.razerzone.com/images/pnx.assets/32a1bc8d63ee8a44d4f22d9bce7265c0/enkipro-hypersense-pdp-desktop-hero.jpg"
				/>
				<section className="w-full overflow-x-hidden mt-[2.35rem] flex flex-col items-center text-primaryWhite mb-[3.5rem]">
					<div className="flex flex-col items-center gap-5 mb-[6.5rem]">
						<span className="font-RazerLight uppercase font-thin text-[1.5rem] text-white">
							RAZER ENKI PRO HYPERSENSE
						</span>
						<h1 className="font-RazerBold text-center leading-none font-bold text-[4.5rem] text-primaryGreen">
							CONFORTO O DIA INTEIRO. NA MAIS COMPLETA IMERSÃO.
						</h1>
						<p className="text-center indent-5 font-Roboto text-[1.125rem] leading-6 max-w-[70%]">
							Segure-se firme para uma imersão de última geração com a
							Razer Enki Pro HyperSense, uma cadeira gamer avançada
							equipada com um potente motor háptico. Projetada para gerar
							sensações táteis de estilo fliperama, nela, combinamos um
							intenso realismo de jogo e o conforto o dia inteiro para
							criar uma cadeira incomparável para seus sentidos.
						</p>
					</div>
					<div className="text-center flex items-center flex-col gap-5 mb-[9.5rem]">
						<h1 className="text-primaryGreen font-RazerBold text-5xl">
							RAZER HYPERSENSE
						</h1>
						<h3 className="text-white font-RobotoBold font-bold text-2xl">
							IMERSÃO DEFINITIVA COM TECNOLOGIA HÁPTICA DE ALTA
							FIDELIDADE.
						</h3>
						<p className="text-center indent-[-10px] font-Roboto text-[1.125rem] leading-6 max-w-[60%]">
							Equipada com um motor háptico avançado, nossa cadeira gamer
							simula a força e a resposta tátil reais com potência e
							precisão, para oferecer uma experiência verdadeiramente
							realista que amplifica a ação da tela.
						</p>
						<a
							className="text-primaryGreen text-[1.125rem] hover:underline font-Roboto"
							href="https://www.razer.com/br-pt/technology/razer-enki-pro-hypersense/science-behind-the-seat">
							Saiba mais &gt;
						</a>
						<div className="flex items-center gap-[5rem] mb-10">
							<img
								className="h-[9rem]"
								src="https://assets2.razerzone.com/images/pnx.assets/27e987779b57f21126eae0cb94f7fa0e/hypersenselogo.png"
							/>
							<img
								className="h-[7rem]"
								src="https://assets2.razerzone.com/images/pnx.assets/27e987779b57f21126eae0cb94f7fa0e/logo-d-box_feel-it_white.png"
							/>
						</div>
						<img
							className=" scale-[105%]"
							src="https://assets2.razerzone.com/images/pnx.assets/27e987779b57f21126eae0cb94f7fa0e/enkipro-hypersense-hypersense.jpg"
						/>
					</div>
					<div className="text-center flex items-center flex-col gap-5 mb-[9.5rem]">
						<h1 className="text-primaryGreen font-RazerBold text-5xl">
							DESCANSO PARA A CABEÇA RAZER CHROMA™ RGB.
						</h1>
						<h3 className="text-white font-RobotoBold font-bold text-2xl">
							ESTILO PERSONALIZÁVEL.
						</h3>
						<p className="text-center mb-5 font-Roboto text-[1.125rem] leading-6 max-w-[67%]">
							Com 16,8 milhões de cores e inúmeros efeitos para escolher,
							você poderá personalizar o logotipo da Razer no descanso
							para a cabeça, para fazer com que a Razer Enki Pro
							HyperSense realmente se torne a peça central da sua estação
							de batalha.
						</p>
						<img
							className="scale-[105%]"
							src="https://assets2.razerzone.com/images/pnx.assets/4e2308169b619cbe9598d5aec03157c1/enkipro-hypersense-pdp-desktop-headrest-animated.gif"
						/>
					</div>
					<div className="text-center flex items-center flex-col gap-5 mb-[6.5rem]">
						<h1 className="text-primaryGreen font-RazerBold text-5xl">
							PROJETADA PARA O CONFORTO O DIA INTEIRO.
						</h1>
						<h3 className="text-white font-RobotoBold font-bold text-2xl">
							ARCOS ESPECIALIZADOS PARA OS OMBROS E ASSENTO COM BASE
							LARGA.
						</h3>
						<p className="text-center mb-5 font-Roboto text-[1.125rem] leading-6 max-w-[70%]">
							Combinando seus exclusivos arcos ampliados para os ombros
							em 100° e um assento com base ultralarga de 22”, nossa
							cadeira gamer com tecnologia háptica assegura a
							distribuição ideal do peso para garantir um conforto
							duradouro ao longo das maratonas de jogo.
						</p>
						<img
							className="w-screen"
							src="https://assets2.razerzone.com/images/pnx.assets/f48480e1c5629604792b6eb389088b0c/enkipro-hypersense-pdp-desktop-comfort.jpg"
						/>
					</div>
					<div className="text-center flex items-center flex-col gap-5 mb-[6.5rem]">
						<h1 className="text-primaryGreen font-RazerBold text-5xl max-w-[80%]">
							COURO SINTÉTICO ECOSSUSTENTÁVEL DE DUPLA TEXTURA.
						</h1>
						<h3 className="text-white font-RobotoBold font-bold text-2xl">
							A COMBINAÇÃO PERFEITA DE CONFORTO E DURABILIDADE.
						</h3>
						<p className="text-center mb-5 font-Roboto text-[1.125rem] leading-6 max-w-[70%]">
							As áreas principais da cadeira são revestidas em tecido com
							textura aveludada para um conforto mais refinado, enquanto
							as bordas exteriores vêm em couro macio para uma
							resistência ainda maior ao desgaste do uso diário.
						</p>
						<img
							className="w-screen"
							src="https://assets2.razerzone.com/images/pnx.assets/a71e3f00d8c40d02d7401a56ffa704cc/razer-enkipro-hypersense-pdp-desktop-dual-textured.jpeg"
						/>
					</div>
					<div className="text-center flex items-center flex-col gap-5 mb-[6.5rem]">
						<h1 className="text-primaryGreen font-RazerBold text-5xl max-w-[80%]">
							ENCOSTO PARA AS COSTAS ALMOFADADO COM DENSIDADE DUPLA
						</h1>
						<h3 className="text-white font-RobotoBold font-bold text-2xl">
							MIRANDO O CONFORTO PARA AS COSTAS.
						</h3>
						<p className="text-center mb-5 font-Roboto text-[1.125rem] leading-6 max-w-[70%]">
							Incluindo almofadas com duas densidades diferentes, o
							encosto da cadeira é mais firme ao longo das bordas e mais
							macio no centro, para poder envolver suas costas em uma
							combinação perfeita de suporte e conforto.
						</p>
						<img
							className="w-screen"
							src="https://assets2.razerzone.com/images/pnx.assets/3f73d25ec7e7b0a91f82bb621c56fac7/enkipro-hypersense-pdp-desktop-dual-density.jpg"
						/>
					</div>
					<div className="text-center flex items-center flex-col gap-5 mb-[6.5rem]">
						<h1 className="text-primaryGreen font-RazerBold text-5xl max-w-[80%]">
							ARCO LOMBAR INTEGRADO.
						</h1>
						<h3 className="text-white font-RobotoBold font-bold text-2xl">
							SUSTENTA E MANTÉM A POSTURA CORRETA.
						</h3>
						<p className="text-center mb-5 font-Roboto text-[1.125rem] leading-6 max-w-[70%]">
							A curva lombar da cadeira gamer apoia suavemente a parte
							inferior das costas e incentiva você a se sentar em uma
							posição neutra, o que ajuda a sentir menos cansaço com o
							uso prolongado.
						</p>
						<img
							className="w-screen"
							src="https://assets2.razerzone.com/images/pnx.assets/a02d102365515157a5ba0f27d9cec075/enkipro-hypersense-pdp-desktop-built-in.jpg"
						/>
					</div>
					<div className="flex flex-col items-center">
						<div className="mb-[4rem]">
							<h1 className="text-center font-RazerF5 text-[1.75rem] text-white font-light">
								NOTIFIQUE-ME
							</h1>
							<span className="font-Roboto text-[1.125rem]">
								Seja o primeiro a receber as novidades da colaboração.
							</span>
						</div>
						<form className="flex flex-col w-full">
							<div className="flex-col flex items-center">
								<div className="flex w-full gap-8 justify-center">
									<div className="flex flex-col gap-8">
										<input
											className="bg-[#222] outline-none border focus:border-white border-transparent font-Roboto text-secondaryWhite placeholder-secondaryWhite px-[10px] py-[5px] w-[400px] text-base rounded-[3px] h-[40px]"
											placeholder="Nome*"
											required
										/>
										<select
											required
											className="bg-[#222] outline-none border focus:border-white border-transparent font-Roboto placeholder-secondaryWhite px-[10px] py-[5px] w-[400px] text-base rounded-[3px] h-[40px]">
											<option value disabled selected hidden>
												Location/Region*
											</option>
											<option>Brasil</option>
											<option>Bolívia</option>
											<option>China</option>
											<option>Colombia</option>
											<option>Dinamarca</option>
											<option>Estados Unidos</option>
											<option>Espanha</option>
											<option>França</option>
										</select>
									</div>
									<div className="flex flex-col gap-8 mb-7">
										<input
											className="bg-[#222] outline-none border focus:border-white border-transparent font-Roboto text-secondaryWhite placeholder-secondaryWhite px-[10px] py-[5px] w-[400px] text-base rounded-[3px] h-[40px]"
											placeholder="Sobrenome*"
											required
										/>
										<input
											className="bg-[#222] outline-none border focus:border-white border-transparent font-Roboto text-secondaryWhite placeholder-secondaryWhite px-[10px] py-[5px] w-[400px] text-base rounded-[3px] h-[40px]"
											placeholder="Endereço de e-mail*"
											required
										/>
									</div>
								</div>
								<div className="flex gap-3 max-w-[77%]">
									<input type="checkbox" />
									<span className="text-[14px] font-Roboto">
										Desejo receber e-mails da Razer sobre produtos,
										notícias, eventos e promoções &#40;incluindo
										ofertas e descontos&#41;. Para mais informações,
										consulte nossa{" "}
										<span className="text-primaryGreen underline">
											Política de Privacidade.
										</span>
									</span>
								</div>
								<button
									className="bg-primaryGreen font-RazerF5 text-[.875rem] font-bold tracking-wider py-[11px] px-[26px] rounded-md mt-7 text-black"
									type="submit">
									SUBMIT
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default App;
