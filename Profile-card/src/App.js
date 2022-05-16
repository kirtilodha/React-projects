import './App.css';
import profile from './profile.jpg'
import { BsTwitter,BsGithub, BsLinkedin } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={profile} />
        <h1>Kirti Lodha</h1>
        <h4>Frontend Developer</h4>
        <div>
          <button><a href="https://twitter.com/Kirti_Lodha_" target="_blank">Twitter</a></button>
          <button><a href="https://www.linkedin.com/in/kirti-lodha/" target="_blank">LinkedIn</a></button>
        </div>
        <div>
          <h2>About</h2>
          <p>I'm Kirti Lodha currently in 3rd year pursuing Electrical and Electronics engineering from DSCE, Bangalore. I'm
            currently working as a GitHub Extern'22, in which the project is based on Metaverse. I’m a Blockchain enthusiast and a competitive programmer. I code in C++ and have good knowledge on
            HTML, CSS, JS, Reactjs. I’ve been coding in Solidity for a year now, which is based on C++ and JS. Hackathons,
            innovations, projects, and webinars are my favourite kinds of work. </p>
        </div>
        <div>
          <h2>Interests</h2>
          <p>Programming. Web3. Networking. Travel geek.</p>
        </div>
        <div className="footer">
          <a href="https://twitter.com/Kirti_Lodha_" target="_blank"><BsTwitter className='icon' /></a>
          <a href="https://github.com/kirtilodha" target="_blank"><BsGithub className='icon'/></a>
          <a href="https://www.linkedin.com/in/kirti-lodha/" target="_blank"><BsLinkedin className='icon'/></a>
        </div>
      </div>

    </div>
  );
}

export default App;
