import starsZero from '../assets/images/0stars.png';
import starsOne from '../assets/images/1stars.png';
import starsTwo from '../assets/images/2stars.png';
import starsThree from '../assets/images/3stars.png';
import starsFour from '../assets/images/4stars.png';
import starsFive from '../assets/images/5stars.png'

function Rating (props) {

    function result() {
        if(props.children >= 0) {
            if(props.children <= 5) {
                return Math.round(props.children)
            }else {return 'Choose a number between 0 and 5'}
        }else {return 'Choose a number between 0 and 5'}
    }

    // const stars () => {
    //     switch (result()) {
    //                 case 0:
    //                     return starsZero
    //                 case 1:
    //                     return starsOne
    //                 case 2:
    //                     return starsTwo
    //                 case 3:
    //                     return starsThree
    //                 case 4:
    //                     return starsFour
    //                 case 5:
    //                     return starsFive
    //             }
    // }

    function stars() {
        switch (result()) {
            case 0:
                return starsZero
            case 1:
                return starsOne
            case 2:
                return starsTwo
            case 3:
                return starsThree
            case 4:
                return starsFour
            case 5:
                return starsFive
        }
    }

    return (
        <img src={stars()} alt='Rating stars' />
    )
}

export default Rating;