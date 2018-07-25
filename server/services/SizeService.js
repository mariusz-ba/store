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
}

export default SizeService;