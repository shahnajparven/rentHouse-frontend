import './Pickup.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pickup1 from '../../component/project-pic/pick.jpg';
import Test from './Test';


//For modal
const Pickup = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
          <div>
              <Test/>           
                <CardGroup className='pickup-card'>
                    <Card>

                        <Card.Body>
                            <Card.Img variant="top" src={pickup1} />
                            <Card.Text className='pickup-text-pic'>

                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className='pickup-text'>
                        <Card.Body>
                            <Card.Title className='pickup-title'>Our Pick Rules</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li> Well, here we are for provide pickup service</li>
                                    <li> Hey, are you ready to get our service?</li>
                                    <li> Where are you?where you want go? enter your location.</li>
                                    <li> Are you a  member of our platfrom? because if you are not our member of our system then you can't take this servies.</li>
                                    <li>You have to provide some information then you can get our pickup ride.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </CardGroup>




            </div>

      



        </>
    );
};
export default Pickup;