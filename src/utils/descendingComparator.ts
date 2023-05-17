import {Order} from "@/models/Order.type";

export function descendingComparator<T>(
  a: T,
  b: T,
  orderBy: keyof T,
  order: Order
) {
  if (!a[orderBy]) {
    return order === "desc" ? 1 : -1;
  }
  if (!b[orderBy]) {
    return order === "desc" ? -1 : 1;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
