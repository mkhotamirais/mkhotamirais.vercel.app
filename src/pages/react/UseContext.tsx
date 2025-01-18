import { Button } from "@/components/ui/button";
import React, { createContext, useContext, useState } from "react";

type User = { id: number; name: string };
type UserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const DataContext = createContext<UserContext | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ id: 1, name: "john" });
  return <DataContext.Provider value={{ user, setUser }}>{children}</DataContext.Provider>;
};

const Data = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("Data must be used");
  }
  const { user, setUser } = context;

  const plusId = () => {
    setUser((prev) => ({ ...prev, id: prev.id + 1 }));
  };

  const changeToDoe = () => {
    setUser((prev) => ({ ...prev, name: "doe" }));
  };
  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="px-3">
          <h2 className="text-xl font-bold my-3 text-center">useContext</h2>
          <div className="flex flex-col border rouded p-2 items-center gap-2">
            <div>
              user id: {user?.id} - user name: {user?.name}
            </div>
            <div className="flex gap-2">
              <Button size="sm" type="button" onClick={plusId}>
                Plus Id
              </Button>
              <Button size="sm" type="button" onClick={changeToDoe}>
                Change to Doe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function UseContext() {
  return (
    <DataProvider>
      <Data />
    </DataProvider>
  );
}
