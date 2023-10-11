import  styled  from 'styled-components';
import { theme } from './../../../components/styles/Themes';
import { font } from './../../../components/styles/Common';

const StyledWorks = styled.section`
    max-width: 100vw;
`

const StyledWorkWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1fr, 619px) minmax(50px, 536px);
    grid-template-rows: minmax(50px, 464px) minmax(50px, 406px) minmax(50px, 400px);
    gap: 30px;

    @media ${theme.media.notedook}{
        grid-template-rows: minmax(50px, 414px) minmax(50px, 356px) minmax(50px, 350px);
        gap: 25px;
    }

    @media ${theme.media.tablet}{
        grid-template-rows: minmax(50px, 314px) minmax(50px, 256px) minmax(50px, 250px);
        gap: 18px;
    }

    @media screen and (max-width: 592px){
        grid-template-rows: minmax(50px, 234px) minmax(50px, 176px) minmax(50px, 170px);
        gap: 15px;
    }

    @media screen and (max-width: 425px){
        grid-template-rows: minmax(50px, 204px) minmax(50px, 146px) minmax(50px, 140px);
    }

    @media ${theme.media.mobile}{
        grid-template-columns: repeat(1, 0.9fr);
        grid-template-rows: minmax(50px, 200px) minmax(50px, 200px) minmax(50px, 240px) minmax(50px, 200px) minmax(50px, 180px);
        gap: 10px;
        justify-content: center;
    }
`

// Work

const GridItem = styled.div`
    position: relative;

&:hover{
    button{
        opacity: 1;
    }
}

    &&:nth-child(2){
        grid-column: 2/3;
        grid-row: 1/3;



        @media ${theme.media.mobile}{
            grid-column: 1/2;
            grid-row: 2/4;
        }
    }

    &&:last-child{
        grid-column: 1/3;
        grid-row: 3/4;
        position: relative;

        @media ${theme.media.mobile}{
            grid-column: 1/2;
            grid-row: 5/6;
        }
    }

    @media ${theme.media.tablet}{
        button{
            opacity: 1;
        }
    }
    
`


const StyledWork = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ButtomeWork = styled.button`
    opacity: 0;
    padding: 23px 27px;
    margin: 20px;
    position: absolute;
    left: 0%;
    bottom: 0%;
    background-color: white;
    width: 94%;
    color: ${theme.color.font};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.mobile}{
        padding: 13px 17px;
        width: 84%;
        margin: 10px;
    }
`
const StyledDl = styled.dl`
    text-align: start;

    dt {
        ${font({color: theme.color.font, weight: 500, Fmin: 10, Fmax: 18})}
        }
    
    dd {
        ${font({color: "#9CA3AF", lineHeight: 1.4, weight: 500, Fmin: 9, Fmax: 14})}
    }
`
export const S = {
    StyledWorks,
    StyledWorkWrapper,
    GridItem,
    ButtomeWork,
    StyledWork,
    StyledDl,
}
