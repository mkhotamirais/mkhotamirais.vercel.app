import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const startTimer = () => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const continueTimer = () => {
    if (!intervalRef.current) {
      startTimer();
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="px-3">
          <h2 className="text-xl font-bold my-3 text-center">useRef</h2>
          <div className="border p-2 rounded flex flex-col justify-center gap-1">
            <div className="max-w-sm mx-auto flex gap-1">
              <Input ref={inputRef} placeholder="input" />
              <Button onClick={onClick}>Focus Input</Button>
            </div>
            <div className="p-2 text-center">
              <div>Timer: {timer}</div>
              <div className="flex gap-1 justify-center my-2">
                <Button size="sm" type="button" onClick={stopTimer}>
                  stop
                </Button>
                <Button size="sm" type="button" onClick={continueTimer}>
                  continue
                </Button>
              </div>
              <MyButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyButton({ type, ...rest }: React.ComponentPropsWithoutRef<"button">) {
  return (
    <Button size="sm" type={type} {...rest} className="text-left">
      This is (ComponentPropsWithoutRef)
    </Button>
  );
}
