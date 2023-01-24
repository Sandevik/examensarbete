import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useAuth from '../Auth/hooks/useAuth'
import { useEffect } from 'react'
import Loading from '../components/Loading'
import styled from 'styled-components'
import Button from '../components/Button'
import Link from 'next/link'

const Home: NextPage = () => {
  const {user} = useAuth()

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block>
        
      <Hero>
        <h1><em>DomainSnapper</em></h1>
      </Hero>

      <p>Välkommen till oss på domainsnapper! Vi ger dig all information om domäner som snart blir fria att användas igen. Vårat mål och syfte är att du ska kunna hitta den domänen som passar just dig!</p>

      <p>
        <strong>Välj din prenumeration</strong>
      </p>
      <div className="cards">
        <div className="card">
          <h3>Standard | Kostnadsfri</h3>
          <ul className="options">
            <li>Domännamn</li>
            <li>Tillgänglighetsdatum</li>
            <li>Fler än 5000 unika domäner</li>
          </ul>
          <Link href="/domains" className="link">
            <Button text={"Utforska domäner"} />
          </Link>
        </div>
        <div className="card">
          <h3>Premium | 200kr / mån</h3>
          <ul className="options">
            <li>Domännamn</li>
            <li>Tillgänglighetsdatum</li>
            <li>Premium funktioner</li>
            <li>Premium värden</li>
            <li>Fler än 5000 unika domäner</li>
          </ul>
          <Link href="/account"><Button text={"Uppgradera nu"}/></Link>
        </div>
      </div>
      
      
     
      </Block>
    </div>
  )
}

export default Home

const Hero = styled.div`
  height:20em;
  width:100vw;
  background-color: var(--blue);
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;

  h1{padding:0; margin:0;}
`;

const Block = styled.div`

  p{
    max-width: 1440px;
    margin-inline:auto;
    padding-inline: 1em;
    text-align:center
  }

  @media screen and (min-width: 768px){
    .cards{
    display:flex;
    justify-content:center;
    gap:10em;
  }
  }

  @media screen and (max-width: 767px){
    .cards{
      flex-direction: column;
      display:flex;
      gap:1em;
      align-items:center;
    }
  }

  .cards{
    padding-bottom:1em;
  }

  .card{
    background-color: var(--green);
    border-radius: 10px;
    padding: 10px;
    color:white;
    height: 20em;
    width: 15em;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    h3{
      margin:0; 
      text-align: center;
    }

    .options{
      margin:0;
      padding-left:30px;
      background-color:var(--gray);
      color:var(--black);
      border-radius: 10px;
      padding-block: 10px;
      position: relative;
      li{
        margin-bottom:10px;
        list-style-type: none;
        ::before{
          content: "✓";
          position: absolute;
          left: 0;
          top: 10;
          transform: translate(10px);
        }
      }
    }
  }

`;