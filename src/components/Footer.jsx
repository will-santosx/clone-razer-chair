import React from "react";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoYoutube,
	BiLogoTwitch,
	BiLogoDiscordAlt,
} from "react-icons/bi";
import { PiTiktokLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
	return (
		<footer className="bg-[#111111] w-full flex justify-center font-Roboto">
			<div className="flex flex-col w-full">
				<div className="flex w-full py-[25px] px-[106px] justify-between text-[12px]">
					<div className="flex flex-col gap-3">
						<h2 className="text-white">Loja</h2>
						<ul className="text-[#999] flex flex-col gap-3">
							<li>RazerStores</li>
							<li>RazerCafe</li>
							<li>Localizador de lojas</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-white">Explore</h2>
						<ul className="text-[#999] flex flex-col gap-3">
							<li>Tecnologia</li>
							<li>Chroma RGB</li>
							<li>Conceitos</li>
							<li>Esports</li>
							<li>Colaborações</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-white">Suporte</h2>
						<ul className="text-[#999] flex flex-col gap-3">
							<li>Obtenha ajuda</li>
							<li>Registro e garantia</li>
							<li>RazerStore Support</li>
							<li>Gerenciar Razer ID</li>
							<li>Support Videos</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-white">Empresa</h2>
						<ul className="text-[#999] flex flex-col gap-3">
							<li>Sobre nós</li>
							<li>Carreiras</li>
							<li>Sala de imprensa</li>
							<li>zVentures</li>
							<li>Fale conosco</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-white">Follow Us</h2>
						<ul className="text-[#999] flex items-start flex-col gap-2">
							<li className="rounded-full border border-[#999] p-1">
								<BiLogoFacebook size={15} />
							</li>
							<li className="rounded-full border border-[#999] p-1">
								<BiLogoInstagram size={15} />
							</li>
							<li className="rounded-full border border-[#999] p-1">
								<RiTwitterXFill size={15} />
							</li>
							<li className="rounded-full border border-[#999] p-1">
								<BiLogoYoutube size={15} />
							</li>
							<li className="rounded-full border border-[#999] p-1">
								<PiTiktokLogo size={15} />
							</li>
							<li className="rounded-full border border-[#999] p-1">
								<BiLogoTwitch size={15} />
							</li>
							<li className="rounded-full border border-[#999] p-1">
								<BiLogoDiscordAlt size={15} />
							</li>
						</ul>
					</div>
					<h3 className="text-primaryGreen ml-[4rem] font-RazerF5 text-[.9rem] tracking-wide">
						FOR GAMERS. BY GAMERS.&trade;
					</h3>
				</div>
				<div className="px-[106px] flex flex-col">
					<div className="w-full bg-[#999] h-[1px]" />
					<div className="flex justify-between items-center">
						<div className="flex w-[755px] justify-start gap-9 py-4 text-[#999] text-[12px]">
							<span>
								Copyright &copy; 2023 Razer Inc. All rights reserved.
							</span>
							<span>Termos legais</span>
							<span>|</span>
							<span>Política de Privacidade</span>
							<span>|</span>
							<span>Definições de cookies</span>
						</div>
						<span className="text-[#999] text-[12px]">
							<span className="text-white">Brazil |</span> Change
							Location &gt;
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
