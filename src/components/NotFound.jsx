import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>La pagina que estas buscando no se encontro</h2>
			
			<Link to="/"><span class="arrow"></span>Volver al inicio</Link>
		</div>
	</div>
    );
};

export default NotFound;