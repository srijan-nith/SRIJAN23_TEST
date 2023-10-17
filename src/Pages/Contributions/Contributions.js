import '../../Assets/css/Contributions.css';
import Navbar from '../../components/NewNavbar.js/NewNavbar';

const Contributions = (props) => {
    return (
        <>
            <div className='cont-navbar'>
                <Navbar />
            </div>
            <div className='page'>
                <div class="vl"></div>
                <div className='cont-content'>
                    <h1>COMING</h1>
                    <h1>SOON</h1>
                </div>
                <div className="vl"></div>
            </div>
        </>
    );
}

export default Contributions;