import { useQuery } from '@tanstack/react-query';
import getHello from '../api/hello';

export default function useHello() {
  return useQuery({
    queryKey: ['hello'],
    queryFn: getHello,
  });
}