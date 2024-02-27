import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <nav>
        <div className="nav-logo">
          <a href="#">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li className="link"><a href="#">Home</a></li>
          <li id="link1" className="link"><a href="#">Features</a></li>
          <li id="link3" className="link"><a href="#">About</a></li>
        </ul>
        <button className="btn"><a href="https://t.me/arapzz">Telegram</a></button>
      </nav>

      <header className="container">
        <div className="content">
          <span className="blur"></span>
          <span className="blur"></span>
          <h1>Hi, I'm <span>Arapzz</span>, Web3 Enthusiastic</h1>
          <p>a 21 y/o , make money with crypto, information about Airdrops, Bounties, Testers, NFTs,. I love Trading open-source projects</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="image">
          <img src="/images/header.png" alt="Header Image" />
        </div>
      </header>

      <section className="container">
        <h2 className="header">OUR FEATURES</h2>
        <div className="features">
          <div className="card">
            <span><i className="ri-youtube-line"></i></span>
            <h4>Youtube</h4>
            <p>My tutorials Testnet in channel "arapzz.eth"</p>
            <a href="https://www.youtube.com/@arapzz">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>
          <div className="card">
            <span><i className="ri-github-line"></i></span>
            <h4>Github</h4>
            <p>Im work in github, please use it if you need</p>
            <a href="https://github.com/arapzz">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>
          <div className="card">
            <span><i className="ri-twitter-x-line"></i></span>
            <h4>Twitter-X</h4>
            <p>Share Airdrop Everyday in twitter</p>
            <a href="https://twitter.com/arapzz1">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>
          <div className="card">
            <span><i className="ri-mail-line"></i></span>
            <h4>Contact Person</h4>
            <p>contact my email if there is a problem</p>
            <a href="mailto:arapzz.eth@gmail.com">Send Email<i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
      </section>

      <footer className="container">
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="column">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="socials">
            <a href="https://www.youtube.com/@arapzz"><i className="ri-youtube-line"></i></a>
            <a href="https://www.instagram.com/arapzz.eth"><i className="ri-instagram-line"></i></a>
            <a href="https://twitter.com/arapzz1"><i className="ri-twitter-line"></i></a>
          </div>
        </div>
        <div className="column">
          <h4>Company</h4>
          <a href="#">Business</a>
          <a href="#">Partnership</a>
          <a href="#">Network</a>
        </div>
        <div className="column">
          <h4>About Us</h4>
          <a href="#">Blogs</a>
          <a href="#">Channels</a>
          <a href="#">Sponsors</a>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </footer>

      <div className="copyright">
        Copyright © 2023 arapzz. All Rights Reserved.
      </div>

      <script src="/script.js"></script>
    </div>
  );
}
