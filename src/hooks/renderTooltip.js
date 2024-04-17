import {Tooltip} from 'react-bootstrap'

export const tooltipText = {
    user: 'Usuario',
    cart: 'Bolsa',
    fav: 'Favoritos',
    search: 'Buscar'
};

export const renderTooltip = (tooltipText, props) => (

    <Tooltip id="button-tooltip" {...props}>
        {tooltipText[props]}
    </Tooltip>
);
