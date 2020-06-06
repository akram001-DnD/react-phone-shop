import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { id, img, price, title } = value.detailProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} className="img-fluid" alt="pr" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : $ {price}</h5>

                      <ButtonStyled onClick={() => closeModal()}>
                        store
                      </ButtonStyled>

                      <Link to="/cart">
                        <ButtonStyled cart onClick={() => closeModal()}>
                          go to cart
                        </ButtonStyled>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  font-size: 1.6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

const ButtonStyled = styled.button`textTransform: Capitalize
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    border-color:${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:${(prop) => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
    padding: 0.2rem 05rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: ${(props) =>
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
      color: var(--mainBlue);
    }
    &:focus{
      outline: none;
    }`;
