import { useQuery, useMutation, useQueryClient } from "react-query";
import { addTodo, getTodos, updateTodo, deleteTodo } from "../api";

const KEY = "todos";

export const useGetTodos = () => {
  return useQuery({
    queryKey: [KEY],
    refetchOnWindowFocus: false,
    queryFn: getTodos,
  });
};

export const useAddToDo = () => {
  const queryClient = useQueryClient();
  return useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(KEY);
    },
  });
};

export const useUpdateToDo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(KEY);
    },
  });
};

export const useDeleteToDo = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(KEY);
    },
  });
};
