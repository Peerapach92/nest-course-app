import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './entities/cart.entity';
import { Inventory } from '../inventory/entities/inventory.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private cartModel: typeof Cart,
    @InjectModel(Inventory) private inventoryModel: typeof Inventory,
  ) {}

  async addToCart(userId: number, productId: number, quantity: number) {
    const product = await this.inventoryModel.findByPk(productId);
    if (!product) throw new NotFoundException('Product not found');
    if (product.stock < quantity) throw new BadRequestException('Not enough stock');

    let cartItem = await this.cartModel.findOne({ where: { userId, productId } });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await this.cartModel.create({ userId, productId, quantity });
    }

    return cartItem;
  }

  async getCart(userId: number) {
    return await this.cartModel.findAll({
      where: { userId },
      include: [Inventory],
    });
  }

  async updateCart(userId: number, productId: number, quantity: number) {
    const cartItem = await this.cartModel.findOne({ where: { userId, productId } });
    if (!cartItem) throw new NotFoundException('Cart item not found');

    if (quantity <= 0) {
      await cartItem.destroy();
      return { message: 'Item removed from cart' };
    }

    cartItem.quantity = quantity;
    await cartItem.save();
    return cartItem;
  }

  async removeItem(userId: number, productId: number) {
    const cartItem = await this.cartModel.findOne({ where: { userId, productId } });
    if (!cartItem) throw new NotFoundException('Cart item not found');

    await cartItem.destroy();
    return { message: 'Item removed from cart' };
  }

  async clearCart(userId: number) {
    await this.cartModel.destroy({ where: { userId } });
    return { message: 'Cart cleared' };
  }
}
