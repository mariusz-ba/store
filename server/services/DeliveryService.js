class DeliveryService {
  constructor(Delivery) {
    this.Delivery = Delivery;
  }

  getDeliveries = async (filter = {}) => {
    return this.Delivery.find(filter);
  }

  getDeliveryById = async (deliveryId) => {
    return this.Delivery.findById(deliveryId);
  }

  saveDelivery = async (delivery) => {
    await delivery.save();
    return delivery;
  }

  updateDelivery = async (deliveryId, delivery) => {
    return this.Delivery.findOneAndUpdate({ _id: deliveryId }, { $set: { ...delivery }}, { new: true });
  }

  deleteDelivery = async (deliveryId) => {
    return this.Delivery.deleteOne({ _id: deliveryId });
  }
}

export default DeliveryService;