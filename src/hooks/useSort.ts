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
  const [sortedArray, setsortedArray] = useState(data);

  useEffect(() => {
    const arrayOnMount = data.sort(getComparator(defaultOrder, defaultOrderBy));
    setsortedArray(arrayOnMount);
  }, []);

  const handleRequestSort = useCallback(
    (event: MouseEvent, newOrderBy: keyof Type) => {
      const isAsc = orderBy === newOrderBy && order === "asc";
      const toggledOrder: Order = isAsc ? "desc" : "asc";

      setOrder(toggledOrder);
      setOrderBy(newOrderBy);

      const sortedRows = sortedArray.sort(getComparator(toggledOrder, orderBy));
      setsortedArray(sortedRows);
    },
    [order, orderBy, sortedArray]
  );

  return [order, orderBy, sortedArray, handleRequestSort];
}
