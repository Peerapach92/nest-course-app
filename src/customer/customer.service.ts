import { Injectable, UseGuards } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/sequelize';
import { ParamsTokenFactory } from '@nestjs/core/pipes';


@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customerModel.create(
      createCustomerDto as Partial<Customer>,
    );
  }

  async findAll() {
    return await this.customerModel.findAll();
  }

  async findOne(id: number) {
    return await this.customerModel.findByPk(id);
  }

  async findFullname(fullname: string) {
    const customer = await this.customerModel.findOne({
      where: { fullname: fullname,
    },
    });
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.update(updateCustomerDto, {
      where: { id: id },    
    });
  }
  
  async remove(id: number) {
    return await this.customerModel.destroy({
      where: { id: id},
    });
  }
}
