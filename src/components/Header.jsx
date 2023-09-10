import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
	return (
		<header className="w-full bg-black font-RazerF5 flex justify-center py-3">
			<div className="flex gap-7 items-center justify-around w-[85%]">
				<img
					className="h-9"
					alt="Razer Logo"
					src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
				/>
				<nav className="w-full">
					<ul className="font-RazerLight flex justify-around text-secondaryWhite">
						<li>PC</li>
						<li>Console</li>
						<li>Móvel</li>
						<li>Estilo de vida</li>
						<li>Serviços</li>
						<li>Comunidade</li>
						<li>Suporte</li>
					</ul>
				</nav>
				<button>
					<BsSearch className="text-secondaryWhite" size={18} />
				</button>
			</div>
		</header>
	);
};

export default Header;
