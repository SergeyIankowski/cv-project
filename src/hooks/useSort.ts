import {Order} from "@/models/Order.type";
import {getComparator} from "@/utils/getComparator";
import {MouseEvent, useCallback, useEffect, useState} from "react";

export function useSort<Type>(
  defaultOrder: Order,
  defaultOrderBy: keyof Type,
  data: Type[]
): [
  Order,
  keyof Type,
  Type[],
  (event: MouseEvent, newOrderBy: keyof Type) => void
] {
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] = useState(defaultOrderBy);
  const [sortedArray, setSortedArray] = useState<Type[]>([]);

  useEffect(() => {
    const copy = [...data];
    const arrayOnMount = copy.sort(getComparator(defaultOrder, defaultOrderBy));
    setSortedArray(arrayOnMount);
  }, []);
  useEffect(() => {
    const copy = [...data];
    const arrayOnMount = copy.sort(getComparator(order, orderBy));
    setSortedArray(arrayOnMount);
  }, [data]);

  const handleRequestSort = useCallback(
    (event: MouseEvent, newOrderBy: keyof Type) => {
      const isAsc = orderBy === newOrderBy && order === "asc";
      const toggledOrder: Order = isAsc ? "desc" : "asc";

      setOrder(toggledOrder);
      setOrderBy(newOrderBy);

      const sortedRows = sortedArray.sort(
        getComparator(toggledOrder, newOrderBy)
      );
      setSortedArray(sortedRows);
    },
    [order, orderBy, sortedArray]
  );

  return [order, orderBy, sortedArray, handleRequestSort];
}
