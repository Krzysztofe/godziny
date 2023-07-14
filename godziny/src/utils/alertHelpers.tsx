import Swal from "sweetalert2";

export const alertHelper = (message: string) => {
  return {
    title: message,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Tak",
    cancelButtonText: "Nie",
  };
};

export const alert = (error:string) => {
  Swal.fire({
    text: `Błąd ${error}`,
    confirmButtonColor: "rgb(31, 180, 255)",
  });
}
