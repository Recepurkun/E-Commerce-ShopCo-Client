"use client";
import styled from "styled-components";

export const OrderedProductName = styled.h6`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const OrderedProductImage = styled.div`
  position: relative;
  width: 202px;
  height: 242px;
  @media screen and (max-width: 425px) {
    height: 168px;
  }
`;
