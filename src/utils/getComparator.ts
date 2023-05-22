/* eslint-disable @typescript-eslint/no-explicit-any */
import {Order} from "@/models/Order.type";
import {descendingComparator} from "./descendingComparator";

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: {[key in Key]: any}, b: {[key in Key]: any}) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy, "desc")
    : (a, b) => -descendingComparator(a, b, orderBy, "asc");
}
