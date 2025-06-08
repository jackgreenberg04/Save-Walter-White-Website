const { useState, useEffect } = React;

function Header({ total }) {
  const goal = 737000; // fake goal
  const progress = Math.min((total / goal) * 100, 100);
  return (
    <header id="header">
      <h1>Help Save My Dad from Cancer 💔</h1>
      <p>Goal: {goal.toLocaleString()}</p>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
      </div>
    </header>
  );
}

function DonationBoard({ donations }) {
  return (
    <div className="donation-board">
      {donations.map((d, i) => (
        <div className="donation-item" key={i}>{`${d.name} donated $${d.amount}`}</div>
      ))}
    </div>
  );
}

function DonateButton() {
  const handleClick = () => {
    alert('I am the one who knocks.');
  };
  return (
    <button className="donate" onClick={handleClick}>Donate Now</button>
  );
}

function Footer() {
  return (
    <footer id="footer">Website created by Flynn White 🧡</footer>
  );
}

function App() {
  const [donations, setDonations] = useState([
    { name: 'Jesse P.', amount: 20 },
    { name: 'Skyler W.', amount: 100 },
    { name: 'Gustavo F.', amount: 5000 },
  ]);

  const total = donations.reduce((sum, d) => sum + d.amount, 0);
  const [heisenberg, setHeisenberg] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.shiftKey && e.key.toLowerCase() === 'h') {
        setHeisenberg((h) => !h);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={heisenberg ? 'heisenberg-mode' : ''}>
      <Header total={total} />
      <DonationBoard donations={donations} />
      <DonateButton />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
