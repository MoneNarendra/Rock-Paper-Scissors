import styled from 'styled-components'

export const BgContainer = styled.div`
    min-height: 100vh;
    background-color: #1d3959;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    @media (min-width: 768px) {
        padding-top: 40px;
    }
`
export const InnerContainer = styled.div`
    width: 90%;
    max-width: 1110px;
`
export const TopContainer = styled.div`
    border: 2px solid #ffffff;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const MainHeading = styled.h1`
    font-family: 'Roboto';
    margin: 3px;
    font-size: ${props => (props.score ? '25' : '18')}px;
    color: ${props => (props.score ? '#1d3959' : '#ffffff')};
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: ${props => (props.score ? '28' : '23')}px;
    }
`
export const MiniHeading = styled.p`
    font-family: 'Roboto';
    margin: 3px;
    font-size: ${props => (props.score ? '25' : '18')}px;
    color: ${props => (props.score ? '#1d3959' : '#ffffff')};
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: ${props => (props.score ? '28' : '23')}px;
    }
`
export const ScoreCard = styled.div`
    height: 90px;
    width: 120px;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: centere;
    align-items: center;

    @media (min-width: 768px) {
        font-size: ${props => (props.score ? '28' : '23')}px;
    }
`
export const BottomContinaer = styled.div`
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
export const GameChoicesContinaer = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
        width: 70%;
    }
`
export const EachChoiceEle = styled.li`
    margin: 10px;
`
export const SubHeading = styled(MainHeading)`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`
export const ResultImg = styled.img`
    height: 100px;

    @media (min-width: 768px) {
        height: 150px;
    }

`
export const Button = styled.button`
    width: ${props => (props.rule ? '60' : '100')}px;
    height: 35px;
    font-family: 'Roboto';
    font-size: 15px;
    color: #1d3959;
    background-color: #ffffff;
    border-width: 0px;
    border-radius: 8px;
    margin: 10px;
`
export const CloseBtn = styled(Button)`
    width: 30px;
    height: 30px;
    color: #1d3959;
    background-color: #efefef;
`
export const RulesBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;`

export const ModalContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;`

export const RuleImg = styled.img`
    height: 200px;
    @media (min-width: 768px){
        height: 400px;
    }
`
