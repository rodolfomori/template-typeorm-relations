import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import ShowCostumersService from '@modules/customers/services/ShowCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCostumer = container.resolve(CreateCustomerService);

    const customer = await createCostumer.execute({ name, email });

    return response.json(customer);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showCostumers = container.resolve(ShowCostumersService);

    const customer = await showCostumers.execute();

    return response.json(customer);
  }
}
