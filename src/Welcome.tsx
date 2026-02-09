type WelcomeProps = {
  name: string;
};

export function Welcome({ name }: WelcomeProps) {
  return <h2> Benvenuto, {name || "user"} </h2>;
}
