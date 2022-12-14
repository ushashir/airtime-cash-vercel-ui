import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #fff;
  padding-bottom: 10rem;
  .Dashboard_container {
    padding: 1.5rem 3.75rem;
    width: 42.5rem;
    gap: 2rem;
    margin-top: -11.875rem;
    border: 1px solid #d9d9d9;
    background-color: #fff;
  }
  .Title {
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    padding-top: 24px;
    padding-bottom: 32px;
    line-height: 2.4rem;
    color: #012a4a;
  }
  .WalletBalance {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    margin: 32px auto;
    text-align: center;
    background: #de3d6d;
    border-radius: 24px;
  }
  .wallet_bal_title {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 16px;
    color: #fff;
    font-style: normal;
  }
  .wallet_active_label {
    padding: 8px 10px 8px 8px;
    gap: 10px;
    color: #fff;
    margin-top: 4px;
    background: rgba(0, 0, 0, 0.05);
    opacity: 0.8;
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: 100px;
  }
  .TotalAmount {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }
  /* .tab {
    font-size: clamp(0.625rem, 0.6871rem + 0.6897vw, 0.875rem);
  } */
  .component{
    transition: all 0.8s ease;
  }

  @media (max-width: 650px) {
    .Dashboard_container {
      padding: 10px;
      width: 100%;
      gap: 2rem;
      margin-top: -11.875rem;
      border: none p {
        font-size: 0.8rem;
      }
    }
  }
`;
export const TopBg = styled.div`
  width: 100vw;
  height: 270px;
  background: rgba(222, 61, 109, 0.1);
`;

export const Tab = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #012a4a;
  transition: border-bottom 1.2s ease-out;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) => active && `border-bottom: 1px solid #DE3D6D;`};
  input{
    display:none
  };
  label:before {
  font-family: fontawesome;
  display:none
}
label[for*="0"]:before {
  content: "\f1d8";
  font-size: 18px;
}
label[for*="1"]:before {
  content: "\f4c0";
  font-size: 18px;
}
label[for*="2"]:before {
  content: "\f19c";
  font-size: 18px;
}
label[for*="3"]:before {
  content: "\f0ec";
  font-size: 18px;
}
label[for*="4"]:before {
  content: "\f1da";
  font-size: 18px;
}
label:hover, label:active {
  color: #DE3D6D;
  cursor: pointer;
}
input:checked + label {
  color: #DE3D6D;
  
  transition: color 1.2s ease-out;

  }
  @media screen and (max-width: 650px) {
   label {
    font-size: 0;
  }
   label:before {
    margin: 0;
    display:block;
    font-size: 18px;
    padding: 15px;
  }
}

@media screen and (max-width: 400px) {
 label {
    padding: 15px;
  }
}


`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 34px auto;
  transition: all 0.5s ease-out;
  /* @media (max-width: 650px) {
    flex-direction : column ;
    text-align: left;
    
    } */
  
`;
