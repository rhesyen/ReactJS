import LikeButton from "./LikeButton";

function Header({ title }: { title: string }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["First name", "Second name", "Third name"];

  return (
    <div>
      <Header title="Hello React with TypeScript" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
