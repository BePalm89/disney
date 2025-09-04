import './LandingPage.css';

import Title from '../../components/Title/Title.jsx'
import Button from "../../components/Button/Button.jsx";

import {useNavigate} from "react-router-dom";

const LadingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="landing-page-container">
            <div className="landing-page-title">
                <Title
                    level={1}
                    text='Discover the magic disney world'
                    style={{ color: "var(--color-primary)", fontSize: "var(--font-size-xxl)", textTransform: "uppercase"}}
                />
                <Title
                    level={7}
                    text="Test your knowledge about Disney's most beloved characters with our fun guessing game."
                    style={{ color: "var(--color-white)", fontSize: "var(--font-size-m)", textTransform: "capitalize"}}
                />
            </div>
            <div className="lading-page-cta">
                <Button label='Start game' variant='primary' onClick={() => navigate("/game")}/>
                <Button label='Explore characters' variant='secondary'onClick={() => navigate("/characters")}/>
            </div>

        </div>
    )
};

export default LadingPage;
