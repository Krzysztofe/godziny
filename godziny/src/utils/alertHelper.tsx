export const alertHelper = (message:string) =>{

return {
  title: message,
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Tak",
  cancelButtonText: "Nie",
};

}