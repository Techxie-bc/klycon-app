import React, {Component} from 'react'
import CarouselSlider from 'react-carousel-slider';
import civil from '../Images/snipcivil.PNG'
import civil2 from '../Images/snipcivil2.PNG'
import first from '../Images/first.jpg'
 
export default class Carousel extends Component {
    render() {
    
        let data = [
            {
                des: "Civil Engineering",
                imgSrc: civil
            },
            {
                des: "Oil and Gas",
                imgSrc: first
            },
            {
                des: "Civil Engineering",
                imgSrc: civil2
            }
        ];
        
        return <CarouselSlider slideItems = {data} />;
    }
}