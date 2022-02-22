import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/starc007/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://twitter.com/_saurrabbh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/starc007/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/starc007/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
