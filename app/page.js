export default function HowItWasBuilt() {
  return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
          <h1>How I Built This Page</h1>
          <h2>Installation Steps</h2>
          <p>
              I first installed Node.js and npm using homebrew. I then 
              created a new Next.js app using the command `npx create-next-app`.
              Then to run the development server I used `npm run dev`.
          </p>
          <h2>Difficulties Encountered</h2>
          <p>
              <strong>Hosting:</strong> I used GitHub pages to host, which I initially struggled to deploy
              due to the fact it required a deployment script. I first used a script from the Next.JS website,
              however it did not work. I ended up searching for more scripts online and ended up discovering
              a script that worked and deployed this project.
          </p>
      </div>
  );
}
