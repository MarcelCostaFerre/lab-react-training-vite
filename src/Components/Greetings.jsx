/* eslint-disable react/prop-types */
function Greetings (props) {
    function lang (){  
        switch(props.lang) {
            case 'de':
                return 'Hallo'
            case 'en':
                return 'Hello'
            case 'es':
                return 'Hola'
            case 'fr':
                return 'Bonjour'    
        }
    }
    return (
        <div>
            <p>{lang()} {props.children}</p>
        </div>
    );
}

export default Greetings;