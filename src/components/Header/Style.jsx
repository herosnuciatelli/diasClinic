import styled from 'styled-components'


const Container = styled.header`
    width: 100%;
    height: max-content;
    padding: 10px 0;
    background-color: var(--primary-color);
    position: sticky;
    left: 0;
    top: 0;
    z-index: 3;
`

const Navbar = styled.nav`
    display: flex;
    align-items: center;
`

const GroupHeader = styled.ul`
    display: flex;
    gap: 30px;
    z-index: 2;

    @media (max-width: 768px) {
        display: none;
    }
`

const LogoContainer = styled.div`
    padding: 0 30px;
    cursor: pointer;
` 

const GroupItem = styled.li`
    text-transform: uppercase;
    list-style: none;
    cursor: pointer;
    width: 100px;
`
const GroupLink = styled.a`
    text-decoration: none;
    color:#000;

    &:hover {
        text-decoration: underline;
    }
`

export {
    Container,
    Navbar,
    GroupHeader,
    LogoContainer,
    GroupItem,
    GroupLink,
}