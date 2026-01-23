import SportImage from '../../assets/images/banner.png'
import Button from '../Atoms/Button'


const Herosection = () => {
    return (
        <div className='position-relatve overflow-hidden' style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '500px' }}>

            <div className='container'>
                <div className='row align-items-center min-vh-50'>
                    <div className='col-lg-6 text-white py-5'>
                        <h1 className='display-3 fw-bold mb-4 '>Sports gear for champions</h1>
                        <p className='lead mb-4'>
                            Elevate your game with our premium sports gear. Whether you're a professional athlete or a weekend warrior, we have everything you need to perform at your best.
                        </p>
                        <div className='d-flex gap-3'>
                            <Button text="Shop Now" className="btn-outline-light btn-lg px-5" />
                            <Button text="View Collection" className="btn-light btn-lg px-5" />
                        </div>
                    </div>
                    <div className='col-lg-6 d-none d-lg-block'>
                        <img src={SportImage} alt="Sports Gear" className='img-fluid'  />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Herosection;