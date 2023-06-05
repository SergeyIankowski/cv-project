import {useCallback, useEffect, useState} from "react";

export const useTableSearch = <T>(data: T[], loading: boolean) => {
  const [searchedData, setSearchedData] = useState<T[]>([]);
  useEffect(() => {
    if (loading) return;
    setSearchedData(data);
  }, [loading, data]);

  const handleSearchingData = useCallback(
    (value: string) => {
      const newReference: T[] = [...data];
      const usersOnMount = newReference.filter((item: T) => {
        const stringItem = Object.values(item!).toString().toLocaleLowerCase();
        const lowerCasedValue = value.toLowerCase();
        return stringItem.includes(lowerCasedValue);
      });
      setSearchedData(usersOnMount);
    },
    [data]
  );
  return {searchedData, handleSearchingData};
};
