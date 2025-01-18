import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Component } from "react";

export default function Ts2() {
  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="px-3">
          <h2 className="text-xl font-bold py-3">Typescript 2</h2>
          <div>
            <Les1 style={{ color: "red", border: "1px solid", margin: "3px" }} />
            <Les2 style={{ color: "blue", border: "1px solid", margin: "3px" }} />
            <Les3 />
            <Kelas1 message="pesan" />
            <ComponentProp Component1={Comp1} Component2={Comp2} />
            <Les5 items={["ahmad", "abdul", "siti"]} onClick={(item) => console.log(item)} />
            <Les5 items={[1, 2, 3]} onClick={(item) => console.log(item)} />
            <div>Lesson6: never</div>
            <Les6 value={5} isPositive />
            <div>Lesson7: template literal and exclude</div>
            <Les7 pos="left-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Les1({ style }: { style: React.CSSProperties }) {
  return <div style={style}>React.CSSProperties</div>;
}

function Les2({ style }: { style: Record<string, string> }) {
  return <div style={style}>Record</div>;
}

function Les3() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(e.target);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value);

  return (
    <div className="flex gap-1">
      <Input type="text" placeholder="ChangeEvent" onChange={onChange} />
      <Button type="button" onClick={onClick}>
        Mouse Event
      </Button>
    </div>
  );
}

class Kelas1 extends Component<{ message: string }, { count: number }> {
  // class Les3 extends Component<{}, { count: number }> { // tulis {} kalau tidak ada props
  // class Les3 extends Component<{ message: string }> { // hilangkan count kalau tidak ada state
  state = { count: 0 };
  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  render() {
    return (
      <div>
        {this.props.message} - {this.state.count}
        <br />
        <button type="button" onClick={this.handleClick}>
          increment btn
        </button>
      </div>
    );
  }
}

// type tLes4bCb = { nama: string };
// function Les4bCb({ nama }: tLes4bCb) {
//   return <div>les4bCb hello {nama}</div>;
// }
// function Les4b({ show, component: Component }: { show: boolean; component: React.ComponentType<tLes4bCb> }) {
//   if (show) {
//     return <Component nama="ahmad" />;
//   } else {
//     return <div>componen is not showed</div>;
//   }
// }

const Comp2 = ({ name }: { name: string }) => <div>Comp2 prop name {name}</div>;
const Comp1 = () => <div>Comp1</div>;
type tComponentProp = {
  Component1: React.ComponentType;
  Component2: React.ComponentType<{ name: string }>;
};
function ComponentProp({ Component1, Component2 }: tComponentProp) {
  return (
    <>
      <Component1 />
      <Component2 name="ahmad" />
    </>
  );
}

// generic
type tLes5<T> = { items: T[]; onClick(value: T): void };
const Les5 = <T extends string | number>({ items, onClick }: tLes5<T>) => {
  return (
    <div>
      {items?.map((item, i) => (
        <div key={i} onClick={() => onClick(item)} className="cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

// Position prop can be on of:
// "left-center", "left-top", "left-bottom"
// "right-center", "right-top", "right-bottom"
// "center", "center-top", "center-bottom"
type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";
type tLes7 = { pos: `${Horizontal}-${Vertical}` };
function Les7({ pos }: tLes7) {
  return <div>position: {pos}</div>;
}

// type tLes6 = {value: number; isPositive?:boolean; isNegative?:boolean; isZero?:boolean}
type Random = { value: number };
type Positive = Random & { isPositive: boolean; isNegative?: never; isZero?: never };
type Negative = Random & { isPositive?: never; isNegative: boolean; isZero?: never };
type Zero = Random & { isPositive?: never; isNegative?: never; isZero: boolean };
type tLes6 = Positive | Negative | Zero;
function Les6({ value, isPositive, isNegative, isZero }: tLes6) {
  return (
    <div>
      {value} - {isPositive && "positive"}
      {isNegative && "negative"} {isZero && "zero"}
    </div>
  );
}
