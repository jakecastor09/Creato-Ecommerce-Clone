import styled from 'styled-components';

const lineColor = '#ebedec';
const mainColor = '#ffd910';
const subColor = '#9ca4ab';

export const TopPanelContainer = styled.div``;

export const Wrapper = styled.div`
  border-bottom: 1px solid ${lineColor};
  display: flex;
  align-items: center;
  padding: 1.7rem 0;
  justify-content: space-between;
`;

export const Contact = styled.div`
  display: flex;
  font-size: 1.7rem;

  .contact__icons {
    color: ${mainColor};
    font-size: 1.7rem;
    margin-right: 1.2rem;
  }
`;

export const PhoneNumber = styled.div`
  margin-right: 4rem;
`;

export const Email = styled.span`
  padding: 0.2rem 0;
`;

export const LeftIconsContainer = styled.ul`
  display: flex;
  color: ${subColor};
  font-size: 1.6rem;
`;
export const ListIcon = styled.li`
  padding: 0 1rem;
  position: relative;

  &:not(:last-child) {
    border-right: 1px solid ${lineColor};
  }
`;

export const CircleCount = styled.span`
  position: absolute;
  top: -3px;
  left: 20px;
  display: inline-block;
  text-align: center;
  line-height: 17px;
  width: 17px;
  border-radius: 50%;
  background: ${mainColor};
  font-size: 1.1rem;
  color: #000;
`;
