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

  updateOrder = async (orderId, order) => {
    return this.Order.findOneAndUpdate({ _id: orderId }, { $set: { ...order }}, { new: true });
  }

  deleteOrder = async (orderId) => {
    return this.Order.deleteOne({ _id: orderId });
  }
}

export default OrderService;