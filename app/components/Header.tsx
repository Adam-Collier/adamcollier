import { Link } from "remix";
import { Home, Posts, Snippets, Resources, Inspiration } from "~/svgs";

export const Header = () => (
	<ul
		className="flex flex-row justify-center items-center px-4 py-4 gap-4 w-fit rounded-md fixed bottom-8 left-8"
		style={{
			background:
				"conic-gradient(from 37.1deg at 56.4% 622.81%, #FEFEFE 0deg, #CCD1FF 133.21deg, #FFEEFF 233.47deg, #FFF3F3 348.34deg, #FFEAEA 360deg)",
		}}
	>
		<li>
			<Link to="/">
				<Home />
			</Link>
		</li>
		<li>
			<Link to="/posts">
				<Posts />
			</Link>
		</li>
		<li>
			<Link to="/snippets">
				<Snippets />
			</Link>
		</li>
		<li>
			<Link to="/resources">
				<Resources />
			</Link>
		</li>
		<li>
			<Link to="/inspiration">
				<Inspiration />
			</Link>
		</li>
	</ul>
);
