import { useQueryClient, useMutation } from "@tanstack/react-query";

export default function AdminNavigation() {
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      localStorage.removeItem("AUTH_TOKEN");
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return (
    <button
      disabled={logoutMutation.isPending}
      className={`bg-lime-500 p-2 text-slate-800 uppercase font-black text-xs rounded-lg cursor-pointer ${
        logoutMutation.isPending ? "opacity-50" : "opacity-100"
      }`}
      onClick={() => logoutMutation.mutate()}
    >
      Cerrar Sesión
    </button>
  );
}
