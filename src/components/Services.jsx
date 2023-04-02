import civil from '../Images/snipcivil.PNG'
import civil2 from '../Images/snipcivil2.PNG'
import first from '../Images/first.jpg'

const Services = () => {

    return (
        <>
            <div className="services">
                <div className="serviceHeadTitle">
                    <h2>SERVICES</h2>
                </div>
                <div className="servicesContent">
                    <div className="servicesCard">
                        <div className="card1">

                            <div className="servicesImages">
                                <img src={ civil} alt="civil engineering" />
                            </div>
                            <div className="servicesTitle">
                                <h1>Road Construction</h1>
                            </div>
                            <div className="servicesDesc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit exercitationem dolore dignissimos ut aperiam, molestias eveniet alias impedit culpa?</p>
                            </div>
                        </div>
                        <div className="card2">

                            <div className="servicesImages">
                                <img src={first} alt="Oil and Gas" />
                            </div>
                            <div className="servicesTitle">
                                <h1>Road Construction</h1>
                            </div>
                            <div className="servicesDesc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit exercitationem dolore dignissimos ut aperiam, molestias eveniet alias impedit culpa?</p>
                            </div>
                        </div>
                        <div className="card3">

                            <div className="servicesImages">
                                <img src={ civil2} alt="civil engineering" />
                            </div>
                            <div className="servicesTitle">
                                <h1>Dredging and other Engineering Works</h1>
                            </div>
                            <div className="servicesDesc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit exercitationem dolore dignissimos ut aperiam, molestias eveniet alias impedit culpa?</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Services