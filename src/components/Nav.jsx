import Button from "./styles/Button.styled";
import NavStyled from "./styles/NavStyled";

const Nav = () => {
    return (
        <NavStyled>
            <div>
                <img src="./images/logo.png" width="250px" alt="logo" />
            </div>

            <div>
                <Button>Apply Courses</Button>
                <Button primary>Talk To Adviser</Button>
            </div>
        </NavStyled>
    );
};

export default Nav;
