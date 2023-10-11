import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Company } from './layout/section/company/Company';
import { Works } from './layout/section/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';
import { Careers } from './layout/section/careers/Careers';
import { Contacts } from './layout/section/contacts/Contacts';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Company />
            <Works />
            <Testimony />
            <Careers />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e63b74;
`;