import blueStarZero from '../assets/images/0blueStars.png';
import blueStarOne from '../assets/images/1blueStars.png';
import blueStarTwo from '../assets/images/2blueStars.png';
import blueStarThree from '../assets/images/3blueStars.png';
import blueStarFour from '../assets/images/4blueStars.png';
import blueStarFive from '../assets/images/5blueStars.png';

function DriverCard (props) {
    
    const bgBlueStyle = {
        color: 'white',
        backgroundColor: '#00A2E8',
    };
    const car = {
        model: props.car.model,
        licensePlate: props.car.licensePlate
    };
    function result() {
        if(props.rating >= 0) {
            if(props.rating <= 5) {
                return Math.round(props.rating)
            }else {return 'Choose a number between 0 and 5'}
        }else {return 'Choose a number between 0 and 5'}
    }
    function blueStars() {
        switch (result()) {
            case 0:
                return blueStarZero
            case 1:
                return blueStarOne
            case 2:
                return blueStarTwo
            case 3:
                return blueStarThree
            case 4:
                return blueStarFour
            case 5:
                return blueStarFive
        }
    }

//     return (
//         <img src={stars()} alt='Rating stars' />
//     )
// }
   
    return (
        <div style={bgBlueStyle}>
            <img
            style={
                {width: '100px',
                height: 'auto'}
            }
            src={props.img}
            alt='Profile Image'
            />
            <div>
                {props.name}
            </div>
                <img src={blueStars()} alt='Rating stars' />
            <div>
                {car.model} - {car.licensePlate}
            </div>
         </div>
    )
}

export default DriverCard;