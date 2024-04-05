import {Tooltip} from 'react-bootstrap'


const renderTooltip = (tooltipText, props) => (

    <Tooltip id="button-tooltip" {...props}>
        {tooltipText[props]}
    </Tooltip>
);

export default renderTooltip;