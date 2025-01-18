import { Button } from "@/components/ui/button";
import React, { useReducer } from "react";

type Action =
  | { type: "setName"; name: string }
  | { type: "incAge" }
  | { type: "decAge" }
  | { type: "setGender"; gender: "male" | "female" };

type State = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "incAge":
      return { ...state, age: state.age + 1 };
    case "decAge":
      return { ...state, age: state.age - 1 };
    case "setGender":
      return { ...state, gender: action.gender };
    default:
      throw new Error("Unknown action: " + (action as never));
  }
};

const initialState: State = { name: "john", age: 10, gender: "male" };

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "setName", name: e.target.value });

  const handlePlusAge = () => dispatch({ type: "incAge" });

  const handleMinusAge = () => dispatch({ type: "decAge" });

  const handleGender = () => {
    const gender = state.gender === "male" ? "female" : "male";
    dispatch({ type: "setGender", gender });
  };

  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="px-3">
          <h2 className="text-xl font-bold my-3 text-center">useReducer</h2>
          <div className="border p-2 rounded">
            <div className="mb-2 text-center flex flex-col items-center gap-3">
              <div>
                {state.name || "ahmad"} - {state.age || "20"} - {state.gender || "female"}
              </div>
              <div className="flex gap-1 flex-wrap">
                <input
                  title="input1"
                  type="text"
                  value={state.name}
                  onChange={handleChangeName}
                  className="border p-1"
                />
              </div>
            </div>
            <div className="flex justify-center gap-1 flex-wrap my-3">
              <Button size="sm" onClick={handlePlusAge}>
                plus age
              </Button>
              <Button size="sm" onClick={handleMinusAge}>
                minus age
              </Button>
              <Button size="sm" onClick={handleGender}>
                switch gender
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
