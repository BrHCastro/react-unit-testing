import { List } from "./components/List";

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <hr />
      <h2>Items List</h2>

      <List initialItems={["Henrique", "João", "Gertrudes"]} />
    </>
  );
}
