import { menus } from "@/menus";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  // const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredMenu, setFilteredMenu] = useState(menus);

  useEffect(() => {
    const filtered = menus
      .sort((a, b) => a.category.toLowerCase().localeCompare(b.category.toLowerCase()))
      .filter(
        (menu) =>
          menu.label.toLowerCase().includes(search.toLowerCase()) ||
          menu.category.toLowerCase().includes(search.toLowerCase())
      );

    if (!search) {
      setFilteredMenu(menus);
      return;
    }

    setFilteredMenu(filtered);
  }, [search]);

  return (
    <div className="bg-gray-50">
      <div className="max-w-lg mx-auto bg-white min-h-screen px-4">
        <header className="py-2 border-b sticky top-0 bg-white z-10">
          <h1 className="text-xl font-semibold m-2">Catatan Web React Mkhotami</h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search here"
            className="border rounded px-2 py-1 focus:outline-none"
          />
        </header>
        <main>
          {filteredMenu.length === 0 && <div className="m-2 italic">Menu tidak ditemukan</div>}
          <div>
            {filteredMenu.map((menu, i) => (
              <Link key={i} to={menu.href} className="block p-2 hover:bg-gray-100 transition cursor-pointer">
                ({menu.category}) {menu.label}
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
