import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
	return (
		<header className="w-full bg-black font-RazerF5 flex justify-center py-3">
			<div className="flex gap-[4rem] items-center justify-around w-[85%]">
				<a href="https://www.razer.com/br-pt" target="_blank">
					<img
						className="h-[2.35rem]"
						alt="Razer Logo"
						src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
					/>
				</a>

				<nav className="w-full">
					<ul className="font-RazerLight flex justify-around text-secondaryWhite">
						<a href="#" className="hover:text-white transition-colors">
							<li>PC</li>
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<li>Console</li>
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<li>Móvel</li>
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<li>Estilo de vida</li>
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<li>Serviços</li>
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<li>Comunidade</li>
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<li>Suporte</li>
						</a>
					</ul>
				</nav>
				<button>
					<BsSearch
						className="text-secondaryWhite transition-colors hover:text-white"
						size={18}
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
