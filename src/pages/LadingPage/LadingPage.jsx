import './LandingPage.css';

import Title from '../../components/Title/Title.jsx'
import Button from "../../components/Button/Button.jsx";

import {useNavigate} from "react-router-dom";

const LadingPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Title level={1} text='Discover the magic disney world' />
            <Title level={7} text="Test your knowledge about Disney's most beloved characters with our fun guessing game." />
            <Button label='Start game' variant='primary' onClick={() => navigate("/game")}/>
            <Button label='Explore characters' variant='secondary'onClick={() => navigate("/characters")}/>
        </div>
    )
};

export default LadingPage;
