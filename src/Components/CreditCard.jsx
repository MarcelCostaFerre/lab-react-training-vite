import logoVisa from '../assets/images/visa.png'
import logoMc from '../assets/images/master-card.svg'

function CreditCard (props){

    const cardStyle = {
        color: props.color,
        backgroundColor: props.bgColor,
    };

    function typeLogo() {
        switch(props.type) {
            case 'Visa':
                return logoVisa
            case 'Master Card':
                return logoMc
            default: ('Choose Visa or MasterCard')
        }
    }

    function enmascaradeCardNumber() {
        const cardNumber = props.number
        if(cardNumber.length >= 4){
            const lastFour = cardNumber.slice(-4)
            const enmascaradeCard = '·'.repeat(cardNumber.length / 4) + ' ' + '·'.repeat(cardNumber.length / 4) + ' ' + '·'.repeat(cardNumber.length / 4) + ' ' + lastFour
            return enmascaradeCard
        }else {return 'Invalid Creditcard Number'}
    }

   return(
    <div style={cardStyle}>
        <img
            style={
                {width: '50px',
                height: 'auto'}
            }
            src={typeLogo()}
            alt='Choose Visa or MasterCard'
        />
        <div>
            {enmascaradeCardNumber()} 
        </div>
        <div>
                Expires {props.expirationMonth}/{props.expirationYear}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.bank}
        </div>
        <div>
            {props.owner}
        </div>
    </div>
   )  
}

export default CreditCard;