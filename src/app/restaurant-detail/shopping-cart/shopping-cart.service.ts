import {CartItem} from './cart-item.model',
import {MenuItem} from '../menu-item/menu-item.model'

export class ShoppingCartService{
    items: CartItem[] = []

    clear(){
        this.items = []

    }
//o método addItem procura o id do item adicionado dentro do carrinho para ver se já existe, se sim, apenas acrescenta.
    addItem(item:any){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
        if(foundItem){
            foundItem.quantity =+1
        }else{
            this.items.push(new CartItem(item))
        }

    }
//o método removeItem utiliza o método splice para remover o item do carrinho
    removeItem(item:any){
        this.items.splice(this.items.indexOf(item), 1)
    }

}
    total(item:number){
        return this.items
            .map(item => item.value())
            .reduce((prev, value)=> prev+value, 0)
    }

}