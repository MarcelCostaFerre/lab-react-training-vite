function BoxColor (props) {

    function r (min, max, value) {
        return value < min ? min : (value > max ? max : value)
    }

    const divStyle = {backgroundColor: `rgb(${r(0, 255, props.r)}, ${r(0, 255, props.g)}, ${r(0, 255, props.b)})`};
    
    return (

        <div style={divStyle}>
            rgb({r(0, 255, props.r)}, {r(0, 255, props.g)},{r(0, 255, props.b)})
        </div>
    )
}

export default BoxColor;