import { Injectable } from '@angular/core';
//permite comunicar el front con el back
import { HttpClient } from '@angular/common/http';
import { Carta } from '../modelos/carta';
// import { ExecSyncOptionsWithBufferEncoding } from 'child_process';
import { CartasComponent } from '../components/cartas/cartas.component';


@Injectable({
  providedIn: 'root'
})
export class CartaService {

  selectedCarta: Carta;
  //almaceno todos los datos en un array vacio porque cuando empieza no voy a tener datos
    //pero luego se va llenando
    cartas: Carta[];
  readonly URL_API = 'http://localhost:3000/api/cartasflash'; 

  //instanciamos http
  constructor(private http: HttpClient){
    this.selectedCarta = new Carta(); 
  }

  //obtener todas las cartas
  getCartas(){
    //retonra un arreglo de Cartas que viene desde el server
      //le estamos haciendo una petición get al servidor
    return this.http.get(this.URL_API);
  }

  //vamos a recibir una carta del tipo del esquema Carta  
  postCarta(Carta: Carta){
      //tengo que pasarle los datos del form, no solo la dirección
    return this.http.post(this.URL_API, Carta);
  }

  //actualizar Carta
  putCarta(carta: Carta){
      //solo le paso el id, recordar la ruta para id es ../cartasflash/{id}
    return this.http.put(this.URL_API + `/${carta._id}`, carta);
  }

  // no necesito pasarle toda la carta, o todos los datos de la carta, solo el id
  deleteCarta(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
