export default function Ts3() {
  return (
    <div>
      Lainnya2
      <div>Lesson1: Omit</div>
      <Les1 type="text" />
      <div>Les1b</div>
      <Les1b variant="primary" onClick={() => console.log("hello")} />
      <div>Les1c</div>
      <Les1c variant="primary">click me again</Les1c>
      <div>Les2:extracting a component prop</div>
      <Les2 prop1="abdul" />
      <Les2PropExtract prop1="ahmad" />
      <div>Les3: Polymorphic component</div>
      <Les3 as="h1" size="lg">
        heading
      </Les3>
      <Les3 as="p" size="lg">
        paragraph
      </Les3>
      <Les3 as="label" htmlFor="berhasil" size="lg" color="secondary">
        label
      </Les3>
    </div>
  );
}

type tLes3OwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "pimary" | "secondary";
  children: React.ReactNode;
  as?: E;
};
type tLes3<E extends React.ElementType> = tLes3OwnProps<E> & Omit<React.ComponentProps<E>, keyof tLes3OwnProps<E>>;
const Les3 = <E extends React.ElementType = "div">({ size, color, children, as }: tLes3<E>) => {
  const Component = as || "div";
  return (
    <Component>
      {size} - {color} - {children}
    </Component>
  );
};
function Les2PropExtract({ prop1, prop2, prop3 }: { prop1?: string; prop2?: string; prop3?: string }) {
  return (
    <div>
      kosong: Prop1 {prop1} - {prop2} - {prop3}
    </div>
  );
}
function Les2(props: React.ComponentProps<typeof Les2PropExtract>) {
  return <div>prop didapat dari Les2PropExtract component: prop1 {props.prop1}</div>;
}

function Les1(props: React.ComponentProps<"input">) {
  return <input {...props} className="border rounded" />;
}
type tLes1b = { variant: "primary" | "secondary" } & React.ComponentProps<"button">;
function Les1b({ variant, ...rest }: tLes1b) {
  return (
    <button type="button" {...rest}>
      click me: variant: {variant}
    </button>
  );
}
type tLes1c = { variant: "primary" | "secondary"; children: string } & Omit<React.ComponentProps<"button">, "children">;
function Les1c({ variant, children, ...rest }: tLes1c) {
  return (
    <button type="button" {...rest}>
      {children} - {variant}
    </button>
  );
}
