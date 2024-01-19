function Random (props) {

    function random(min, max) {
        min = Math.ceil(props.min);
        max = Math.floor(props.max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div>
            Random value between {props.min} and {props.max} => {random()}
        </div>
    );
}

export default Random;