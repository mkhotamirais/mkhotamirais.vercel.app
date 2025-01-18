import { useState } from "react";

const pageDatas = [
  { id: "1", letter: "a" },
  { id: "2", letter: "b" },
  { id: "3", letter: "c" },
  { id: "4", letter: "d" },
  { id: "5", letter: "e" },
  { id: "6", letter: "f" },
  { id: "7", letter: "g" },
  { id: "8", letter: "h" },
  { id: "9", letter: "i" },
  { id: "10", letter: "j" },
  { id: "11", letter: "k" },
  { id: "12", letter: "l" },
  { id: "13", letter: "m" },
  { id: "14", letter: "n" },
  { id: "15", letter: "o" },
  { id: "16", letter: "p" },
  { id: "17", letter: "q" },
  { id: "18", letter: "r" },
  { id: "19", letter: "s" },
  { id: "20", letter: "t" },
  { id: "21", letter: "u" },
  { id: "22", letter: "v" },
  { id: "23", letter: "w" },
  { id: "24", letter: "x" },
  { id: "25", letter: "y" },
  { id: "26", letter: "z" },
  { id: "27", letter: "aa" },
  { id: "28", letter: "bb" },
  { id: "29", letter: "cc" },
  { id: "30", letter: "dd" },
  { id: "31", letter: "ee" },
  { id: "32", letter: "ff" },
  { id: "33", letter: "gg" },
  { id: "34", letter: "hh" },
  { id: "35", letter: "ii" },
  { id: "36", letter: "jj" },
];

export default function Pag2() {
  const [totalPerPage, setTotalPerPage] = useState(3);
  const [pageKini, setPageKini] = useState(1);

  const totalData = pageDatas.length;
  const totalPage = Math.ceil(totalData / totalPerPage);

  const indexAkhir = pageKini * totalPerPage;
  const indexAwal = indexAkhir - totalPerPage;

  const pageData = pageDatas.slice(indexAwal, indexAkhir);

  const nextPage = () => (pageKini !== totalPage ? setPageKini(pageKini + 1) : null);
  const prevPage = () => (pageKini !== 1 ? setPageKini(pageKini - 1) : null);

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, pageKini - 2);
    const endPage = Math.min(totalPage, pageKini + 2);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => setPageKini(1)}
          className={`${pageKini === 1 ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
        >
          1
        </button>
      );
      if (startPage > 2)
        pages.push(
          <span key="start-ellipsis" className="border aspect-square w-7 text-center">
            ...
          </span>
        );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPageKini(i)}
          className={`${pageKini === i ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPage) {
      if (endPage < totalPage - 1)
        pages.push(
          <span key="end-ellipsis" className="border aspect-square w-7 text-center">
            ...
          </span>
        );
      pages.push(
        <button
          key={totalPage}
          onClick={() => setPageKini(totalPage)}
          className={`${pageKini === totalPage ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
        >
          {totalPage}
        </button>
      );
    }

    return pages;
  };

  return (
    <section className="bg-gray-50">
      <h1>Pag2</h1>
      <div className="border rounded p-3 w-full sm:w-1/2 lg:w-1/4 aspect-square bg-white">
        <div className="flex justify-center">
          <input
            title="paginasi input"
            value={totalPerPage}
            type="number"
            min={3}
            max={26}
            onChange={(e) => {
              const value = Math.max(3, Math.min(26, Number(e.target.value)));
              setTotalPerPage(value);
              setPageKini(1);
            }}
            className="border w-20 p-3 text-xl"
          />
        </div>
        <div className="flex flex-wrap gap-1 my-2 justify-center">
          <button disabled={pageKini === 1} onClick={prevPage} className="disabled:opacity-50 border px-2">
            prev
          </button>
          {renderPagination()}
          <button disabled={pageKini === totalPage} onClick={nextPage} className="disabled:opacity-50 border px-2">
            next
          </button>
        </div>
        <div className="flex gap-2 flex-wrap justify-around">
          {pageData?.map((item) => (
            <div key={item.id} className="border w-1/4 rounded p-3 flex items-center justify-center">
              {item.id}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// interface PageBtnProps {
//   children: React.ReactNode;
//   key: number;
//   onClick: () => void;
//   pageKini: number;
// }
// const PageBtn = ({ children, key, onClick, pageKini }: PageBtnProps) => (
//   <button
//     key={key}
//     onClick={onClick}
//     className={`${pageKini === key ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
//   >
//     {children}
//   </button>
// );
