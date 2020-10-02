import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'


export default function Home() {

  const crYear = new Date().getFullYear()

  //Drawer
  /**
   * ['About Us', 'Notifications', 'Our Event Calendar', 'Our Locations']
   * ['Picture Gallery', 'Facebook Live Videos', 'Youtube Live Videos', 'Flyers']
   * ['Projects', 'Mission', 'Contact Us']
   * 
   */


  //Dynamic size
  const winSize = useWindowSize()

  return (
    <div className="container" >
      <Head>
        <title>Fundacja The Voice of Hope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ position: 'fixed', top: 0 }}>
        <h1>Fundacja</h1>
        <p>The Voice of Hope</p>
      </header>
      <main style={{ marginTop: '100px' }}>
        <h2> Welcome to Fundacja “The Voice Of Hope”</h2>
        <h3> “Together we can give hope to the voiceless people in our society”</h3>
        <img src="Stadion_Miejski_Legii_Warszawa.jpg" alt="Girl in a jacket"></img>
        <p>
          “Blessed is the one who considers the poor! In the day of trouble, the LORD delivers him/her…” Psalms 41:1</p>
        <p>



        </p>

        <twocol style={{ display: 'flex' }}>
          <column style={{ flex: '50%', paddingRight: '15px' }}>
            <h3>What is Fundacja “The Voice of Hope”?</h3>
            <p>
              The Fundacja “The Voice of Hope” is a registered non-profit charitable organization according to Polish law that is dedicated
              and committed to helping and supporting different categories of people in need around us. Our commitment is to improve & make
              better, the lives of the mentioned groups of people here, which are the less privileged people in our society and around the
              world, with more than the basic needs life through your donations!

              They are the Orphans, International Students in Poland, Street kids, invalids, missionaries, single mothers, the homeless,
              students, youths, etc!

            </p>
          </column>
          <column style={{ flex: '50%', paddingRight: '10px', paddingLeft: '15px' }}>
            <h3>What does Fundacja “The Voice of Hope” do?</h3>
            <p>
              The Fundacja “The Voice of Hope” also caters for Church planting as well as missionaries in difficult situations, for single
              mothers and street kids, also for persecuted Christians around the world.
              The Fundacja carries out the work of establishing motherless babies homes, establishing Hospitals, schools from zero level
              to tertiary institutions for the less privileged.
              You are welcomed to read the detailed information in our website
            </p>
          </column>

        </twocol>

      </main>



      <footer>
        Clip Seven Inc. | VIJ Church © {crYear} | God Power Real Estate
      </footer>

      <style jsx>{`
      @font-face {
        font-family: headerFont;
        src: url(trench.otf);
      }
      @font-face {
        font-family: headerSubFont;
        src: url(athena.ttf);
      }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        header {
          padding: 5px;
          width: 100%;
          max-width: 1300px;
          background: #ebf7ff;
          font-family: headerFont;
          z-index: 3;
          color: black;
          font-size: 30px;
        }
        header h1 {
          padding-left: 40px;
          margin: 0px;
        }
        header p {
          padding-left: 40px;
          margin: 0px;
          font-family: headerSubFont;
        }
        main {
          flex: 1;
          width: 100%;
          max-width: 1300px;
          display: flex;
          z-index: 1;
          flex-direction: column;
          box-shadow: 0px -1px 50px black;
          overflow: hidden;
        }
        main img{
          width: 100%;
          height: 300px;
          object-fit: cover;

          padding: 0;
        }
        main h1,h2,h3,h4,h5 {
          width: 100%;
          text-align: center;
          color: darkblue;
        }
        main p {
          font-size: 20px;
          padding: 10px;
        }
        topbar{
          width: 100%;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          z-index: 2;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
}

//  [Projects', 'Mission', 'Contact Us

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
