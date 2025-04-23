import dhestudio from "../assets/dhestudio.png";
import movies from '../assets/movies.png';
import moondo from '../assets/moondo.png';
import dogs from '../assets/dogs.png';

const INFO = {
	main: {
		title: "",
		name: "Facundo Zerbato",
		email: "",
		logo: "",
	},

	socials: {
		github: "https://github.com/FacundoZto",
		linkedin: "https://www.linkedin.com/in/facundozerbato/",
		email: "zerbatofacundo@gmail.com",
	},

	icons: [
		{
			icon: "devicon-html5-plain colored",
			title: "HTML",
		},
		{
			icon: "devicon-css3-plain colored",
			title: "CSS",
		},
		{
			icon: "devicon-tailwindcss-original colored",
			title: "Tailwind CSS",
		},
		{
			icon: "devicon-javascript-plain colored",
			title: "JavaScript",
		},
		{
			icon: "devicon-typescript-plain colored",
			title: "TypeScript",
		},
		{
			icon: "devicon-react-original colored",
			title: "React",
		},
		{
			icon: "devicon-nextjs-line colored",
			title: "Next.js",
		},
		{
			icon: "devicon-redux-original colored",
			title: "Redux",
		},
		{
			icon: "devicon-nodejs-plain-wordmark colored",
			title: "Node.js",
		},
		{
			icon: "devicon-express-original colored",
			title: "Express",
		},
		{
			icon: "devicon-postgresql-plain-wordmark colored",
			title: "PostgreSQL",
		},
	],

	homepage: {
		title: "Full Stack Developer",
		description:
			"I am a Full Stack Developer with experience in building scalable and efficient web applications using various frameworks and technologies. I consider myself a committed and collaborative individual with a strong inclination toward teamwork. Currently, I am focused on projects that help reinforce acquired concepts, learn new technologies, and seek new challenges where I can add value and grow professionally.",
	},

	projects: [
		{
			title: "DH Estudio",
			description:
				"App web for an accounting firm using Vite + React, Bootstrap for UI design, and Formik + Yup for form validation.The backend was built with Node.js, Express, and Nodemailer, allowing emails to be sent via the contact form.",
			github: "https://github.com/FacundoZto/estudio-dh-app",
			demo: "https://estudiodh.onrender.com/",
			image: dhestudio,
			tags: [
				{
					icon: "devicon-react-original colored",
					name: "ReactJs",
				},
				{
					icon: "devicon-bootstrap-plain colored",
					name: "Bootstrap",
				},
				{
					icon: "",
					name: "Formik",
				},
				{
					icon: "devicon-nodejs-plain colored",
					name: "NodeJs",
				},
				{
					icon: "devicon-express-original colored",
					name: "Express",
				},
				{
					icon: "",
					name: "Nodemailer",
				}
			],
		},

		{
			title: "Movies",
			description:
				"App web for movie browsing using Typescript, Next.js and Tailwind CSS, consuming data from the TMDb API. Users can view movie details such as synopsis, release date, and ratings with a responsive interface.",
			github: "https://github.com/FacundoZto/movie-app",
			demo: "https://movie-nextjs-mdb.vercel.app/",
			image: movies,
			tags: [
				{
					icon: "devicon-typescript-plain colored",
					name: "TypeScript",
				},
				{
					icon: "devicon-nextjs-line colored",
					name: "Next.js",
				},
				{
					icon: "devicon-tailwindcss-original colored",
					name: "Tailwind CSS",
				},
			],
		},

		{
			title: "Moondo",
			description:
				"Responsive landing page built with React, Typescript, CSS modules and Framer Motion delivering a dynamic and engaging user experience. It showcases sections for about, services, destinations, details, and contact.",
			github: "https://github.com/FacundoZto/TravelProject",
			demo: "https://moondo.vercel.app/",
			image: moondo,
			tags: [
				{
					icon: "devicon-react-original colored",
					name: "ReactJs",
				},
				{
					icon: "devicon-typescript-plain colored",
					name: "TypeScript",
				},
				{
					icon: "devicon-css3-plain colored",
					name: "CSS",
				},
				{
					icon: "",
					name: "Framer Motion",
				},
			],
		},

		{
			title: "Dogs app",
			description:
				"Web application that allows the user to perform filtering, sorting, creation via form, and searches by consuming data from an API and the local database. Technologies used: React, Redux, JavaScript, Node.js, Express, Sequelize, CSS, PostgreSQL.",
			github: "https://github.com/FacundoZto/Proyecto-Dogs",
			demo: "https://dogs-ruddy-delta.vercel.app/",
			image: dogs,
			tags: [
				{
					icon: "devicon-react-original colored",
					name: "ReactJs",
				},
				{
					icon: "devicon-redux-original colored",
					name: "Redux",
				},
				{
					icon: "devicon-javascript-plain colored",
					name: "JavaScript",
				},
				{
					icon: "devicon-nodejs-plain colored",
					name: "NodeJs",
				},
				{
					icon: "devicon-express-original colored",
					name: "Express",
				},
				{
					icon: "devicon-postgresql-plain-wordmark colored",
					name: "PostgreSQL",
				}
			],
		},
	],
};

export default INFO;