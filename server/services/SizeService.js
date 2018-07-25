class SizeService {
  constructor(Size) {
    this.Size = Size;
  }

  getSizes = async () => {
    return this.Size.find({});
  }

  getSizeById = async (sizeId) => {
    return this.Size.findById(sizeId);
  }

  saveSize = async (size) => {
    await size.save();
    return size;
  }

  updateSize = async (sizeId, size) => {
    return this.Size.findOneAndUpdate({ _id: sizeId }, { $set: { ...size }}, { new: true });
  }
}

export default SizeService;