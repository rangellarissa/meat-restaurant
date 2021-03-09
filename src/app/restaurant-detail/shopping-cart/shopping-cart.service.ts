import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';
import {Injectable} from "@angular/core";

@Injectable()

export class ShoppingCartService{
    items: CartItem[] = []

    clear(){
        this.items = []

    }

//o método addItem procura o id do item adicionado dentro do carrinho para ver se já existe, se sim, apenas acrescenta.
    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id);
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(item))
        }

    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1
        if (item.quantity === 0){
            this.removeItem(item)
        }
    }

//o método removeItem utiliza o método splice para remover o item do carrinho
    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number{
        return this.items
            .map(item => item.value())
            .reduce((prev, value)=> prev + value, 0)
    }

}