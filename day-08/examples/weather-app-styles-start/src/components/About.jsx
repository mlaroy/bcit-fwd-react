// About

import wiAllIcons from '../images/wi-all-icons.jpg';

const About = () => (

	<main>
		<section>
			<div className="page-info">
				<h2>About My Weather App</h2>
			</div>
			<div className="about-text">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?</p>
			</div>
		</section>
		<section>
			<h2>Image Credits</h2>
			<div className="credits-content">
				<figure>
					<img src={wiAllIcons} alt="Weather icons" />
				</figure>
				<div className="credits-content-text">
						<p>Weather Icons created by: <a href="https://www.freepik.com/free-photos-vectors/snow">bamdewanto - www.freepik.com</a></p>
				</div>
			</div>
    	</section>
	</main>
	
);

export default About;