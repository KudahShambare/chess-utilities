import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>About the Chess Pairing System</h1>
      
      <section style={{ margin: "20px 0" }}>
        <h2 style={{ color: "#007bff" }}>About the Developer</h2>
        <p>
          Hi! I'm <strong> <a href="https://github.com/KudahShambare" target="_blank"> Kuda</a> </strong>, the creator and developer behind this Aduk Chess Pairing System. 
          As a passionate chess enthusiast and software developer, I wanted to create a tool that would make 
          organizing chess tournaments easier, more efficient, and accessible to everyone. The goal of this 
          project is to bridge my love for chess with my commitment to creating high-quality, user-centric software.
        </p>
      </section>

      <section style={{ margin: "20px 0" }}>
        <h2 style={{ color: "#007bff" }}>Why This Project is FOSS (Free and Open Source Software)</h2>
        <p>
          This pairing System is Free and Open Source Software because I believe in the power of collaboration 
          and community-driven innovation. By making the code open source, I aim to:
        </p>
        <ul>
          <li>Empower developers to customize and enhance the tool for their unique needs.</li>
          <li>Foster transparency in how the system operates, ensuring trust among users.</li>
          <li>Encourage contributions from chess and software enthusiasts around the globe to make this tool the best it can be.</li>
        </ul>
      </section>

      <section style={{ margin: "20px 0" }}>
        <h2 style={{ color: "#007bff" }}>Features</h2>
        
        <h3>Currently Working Features</h3>
        <ul>
          <li><strong>Dynamic Pairing Generator:</strong> Automatically creates pairings based on player rankings, points, and pre-set rules.</li>
          <li><strong>Customizable Tournament Settings:</strong> Allows organizers to adjust parameters like the number of rounds, scoring rules, and more.</li>
        </ul>

        <h3>Features in Development</h3>
        <ul>
        <li><strong>Real-Time Updates:</strong> Players' scores and rankings are updated automatically after each round.</li>
          <li><strong>Swiss Pairing Algorithm Improvements:</strong> Advanced tie-breaking methods and enhanced performance for large tournaments.</li>
          <li><strong>Player Statistics Dashboard:</strong> Detailed stats, performance trends, and personal records for each player.</li>
          <li><strong>Integration with Online Chess Platforms:</strong> Direct syncing with popular platforms like Chess.com and Lichess.org.</li>
          <li><strong>User Roles:</strong> Differentiated access for tournament organizers, arbiters, and players.</li>
          <li><strong>Local Language Support:</strong> Multilingual interface to cater to a global audience.</li>
        </ul>
      </section>

      <section style={{ margin: "20px 0" }}>
        <h2 style={{ color: "#007bff" }}>Contribute to the Project</h2>
        <p>
          This Chess Pairing System thrives on the contributions of developers, chess enthusiasts, and organizers like you! 
          If you'd like to help shape the future of this project, here’s how you can get involved:
        </p>
        <ul>
          <li><strong>Report Bugs:</strong> Found a bug? Log an issue on our GitHub repository to help us fix it quickly.</li>
          <li><strong>Suggest Features:</strong> Have an idea for a new feature? Share it with us, and let’s discuss how to bring it to life.</li>
          <li><strong>Contribute Code:</strong> Skilled in programming? Check out our open issues, submit pull requests, and make your mark.</li>
          <li><strong>Spread the Word:</strong> Share this project with your friends, chess clubs, and social networks to grow our community.</li>
        </ul>
        <p>
          For more details on how to contribute, visit our <a href="#" style={{ color: "#007bff" }}>GitHub repository</a> 
          or contact us directly at <a href="mailto:your-email@example.com" style={{ color: "#007bff" }}>your-email@example.com</a>.
        </p>
      </section>

      <section style={{ margin: "20px 0" }}>
        <h2 style={{ color: "#007bff" }}>Join Us on This Journey</h2>
        <p>
          This Aduk Chess Pairing System is more than just software; it’s a community-driven project built on the principles 
          of collaboration, transparency, and the love of chess. Together, we can create a tool that serves the global chess 
          community and simplifies the way tournaments are organized.
        </p>
        <p>Thank you for supporting the project!</p>
      </section>
    </div>
  );
};

export default About;
