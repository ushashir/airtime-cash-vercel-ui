import ProfileIcon from "../../assets/icons/profile.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const UserProfileDropdown = ({ showDropdown }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <Dropdown showDropdown={showDropdown}>
        <Link to="/update" style={{textDecoration:"none"}}>
          <DropdownItem>
            <img src={ProfileIcon} alt="Account icon" /> <span>Account</span>{" "}
          </DropdownItem>
        </Link>
        <DropdownItem style={{cursor:"pointer"}} onClick={() => handleLogout()}>

            <img src={LogoutIcon} alt="Logout icon" /> <span>Logout</span>
      
        </DropdownItem>
      </Dropdown>
    </>
  );
};
export default UserProfileDropdown;

const Dropdown = styled.div`
  position: absolute;
  top: 70px;
  right: 5px;
  background-color: #fff;
  width: 226px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: ${({ showDropdown }) => (showDropdown ? "block" : "none")};
  transition: all 0.3s ease-in-out;
  &.active {
    display: block;
  }
`;
const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #012a4a;
  font-weight: lighter;
  margin: 15px 20px;
  & img {
    width: 24px;
  }
`;
