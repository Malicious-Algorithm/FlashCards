import { Component, OnInit } from '@angular/core';
import { CartaService } from '../../services/carta.service';
import { NgForm } from '@angular/forms';
import { Carta } from '../../modelos/carta';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { HtmlParser } from '@angular/compiler';
import { $ } from 'protractor';
import { format } from 'path';


@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css'],
  providers: [CartaService]
})
export class CartasComponent implements OnInit {

  //instanciamos el servicio en el constructor
  constructor(public cartaService: CartaService) { }

  ngOnInit(): void {
    //apenas inicie la app, me muestre todas las cartas
    this.getCartas();
  }

  addCarta(form: NgForm){
    //validar SIEMPRE al usuario
    if(form.value.palabra == '' || form.value.palabraTrad == ''){
      alert('Se deben llenar todos los campos!');
    }else{
      //validamos si queremos actualizar o agregar una nueva
      if(form.value._id){
        //si existe el _id, => queremos actualizar algo
        this.cartaService.putCarta(form.value)
          .subscribe(res =>{
            this.resetForm(form);
            console.log('Actualizado satisfactoriamente');
            //se muestran los datos cada vez que guardamos un dato nuevo en la bd
            this.getCartas();
          });
      }else{
      //escucho la respuesta del servidor
      //le damos la carta al server para que me la guarde
       this.cartaService.postCarta(form.value)
        .subscribe(res => {
          this.resetForm(form);
          console.log('Guardado satisfactoriamente');
          //se muestran los datos cada vez que guardamos un dato nuevo en la bd
          this.getCartas();
      });
    }
  }
}

  getCartas(){
    this.cartaService.getCartas()
      .subscribe(res =>{
        this.cartaService.cartas = res as Carta[];
        console.log(res);
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.cartaService.selectedCarta = new Carta();
    }
  }
            // recibo el dato
  editarCarta(carta: Carta){
    //valido primero
    if(carta.palabra == '' || carta.palabraTrad == ''){
      alert('Se deben llenar todos los campos!');
    }else{
      // envío el dato al servidor
    this.cartaService.selectedCarta = carta;
    }
  }

  eliminarCarta(_id: string){
    // Validación primero!
    if(confirm('Está seguro de eliminar?')){
      // VALIDAR SI EL FORM ESTA VACIO! ojo
      //si el da 'true' u 'ok', entonces hacemos la peticion al server de eliminarlas
      this.cartaService.deleteCarta(_id)
      .subscribe(res => {
        console.log(res);
        this.getCartas();   
      });
    }
    // si cancela el cartel, entonces no hacemos nada 
  }

  mostrarCarta(palabraTrad: string){
    // podríamos implementar un "modal"
    // https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
    if(confirm('Mostrar traducción?')){
      alert(palabraTrad);
    }
  }

  
  
}
