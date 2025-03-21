import { Controller, Post, Get, Delete, Body, Param, Request, Patch, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/add')
  async addToCart(@Request() req, @Body() { productId, quantity }) {
    return await this.cartService.addToCart(req.user.user_id, productId, quantity);
  }

  @Get()
  async getCart(@Request() req) {
    return await this.cartService.getCart(req.user.user_id);
  }

  @Patch('/update')
  async updateCart(@Request() req, @Body() { productId, quantity }) {
    return await this.cartService.updateCart(req.user.user_id, productId, quantity);
  }

  @Delete('/remove/:productId')
  async removeItem(@Request() req, @Param('productId') productId: number) {
    return await this.cartService.removeItem(req.user.user_id, productId);
  }

  @Delete('/clear')
  async clearCart(@Request() req) {
    return await this.cartService.clearCart(req.user.user_id);
  }
}
