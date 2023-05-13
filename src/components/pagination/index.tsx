import { useState } from "react";
import { Pagination as AntdPagination } from "antd";

interface PaginationProps {
  current?: number;

  total: number;
  onPageChange: (page: number, pageSize?: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const [current, setCurrent] = useState(props.current);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrent(page);

    props.onPageChange(page, pageSize);
  };

  return <AntdPagination defaultCurrent={current} total={props.total} onChange={handlePageChange} />;
}
