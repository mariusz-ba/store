class OrderService {
  constructor(Order) {
    this.Order = Order;
  }

  getOrders = async (filter = {}) => {
    return this.Order.find(filter);
  }

  getOrderById = async (orderId) => {
    return this.Order.findById(orderId);
  }

  saveOrder = async (order) => {
    await order.save();
    return order;
  }
}

export default OrderService;