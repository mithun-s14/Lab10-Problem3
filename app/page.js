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
              <strong>Hosting:</strong> I used GitHup pages to host, which required a static export. 
              To solve this I used `next export` to generate static files.
          </p>
      </div>
  );
}
