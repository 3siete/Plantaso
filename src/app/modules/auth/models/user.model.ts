
export interface User{
    uid:string | any;
    name:string;
    lastname:string;
    mail:string;
    password:string; //signo de interrogación para no guardar la contraseña --- para modificar en el futuro
}