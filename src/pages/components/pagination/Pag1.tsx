import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const DATA_PER_PAGE = 9;

export default function Pag1() {
  const [data, setData] = useState<{ title: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
      setData(json);
      setTotalPages(Math.ceil(data.length / DATA_PER_PAGE));
    };
    getData();
  }, [data.length]);

  const indexOfLastPost = currentPage * DATA_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - DATA_PER_PAGE;
  const currentData = data?.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handlePrev = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNext = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <div>
      <h1>Pag1 (shad)</h1>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => handlePrev(e)}
                style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => handleNext(e)}
                style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <br />
      <div className="grid grid-cols-3 gap-2">
        {currentData?.map((item, i) => (
          <div key={i} className="border p-2 h-32 rounded">
            <div>{item?.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
