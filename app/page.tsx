import Image from 'next/image';

const links = [
  { href: 'https://x.com/must-be-ash', label: 'X (Twitter)' },
  { href: 'https://github.com/Must-be-Ash', label: 'GitHub' }
];

export default function Page() {
  return (
    <main className="container">
      <div className="card">
        <Image
          src="https://avatars.githubusercontent.com/u/105402607?v=4"
          alt="Ash avatar"
          width={88}
          height={88}
          className="avatar"
          priority
        />
        <h1>@Must-be-Ash</h1>
        <nav className="links">
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <footer className="footer">© {new Date().getFullYear()} Ash</footer>
    </main>
  );
}
