import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Producto {
  id: string;
  Nombre: string;
  Precio: number;
  Foto: string; 
  Categoria: string; 
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  
  public readonly productos$: Observable<Producto[]>;

  constructor(firestore: AngularFirestore) {
    const productosCollection = firestore.collection<Producto>('Productos');
    this.productos$ = productosCollection.valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
  }

}
