export class PlantModel {
  constructor(plantData) {
    this.category = plantData.category
    this.createdAt = plantData.createdAt
    this.creatorId = plantData.creatorId
    this.deleted = plantData.deleted
    this.description = plantData.description
    this.details = plantData.details
    this.id = plantData.id
    this.imgs = plantData.imgs
    this.name = plantData.name
    this.price = plantData.price
    this.qty = plantData.qty
    this.stock = plantData.stock
    this.updatedAt = plantData.updatedAt
  }
}

/*
category: (3) ['New', 'Indoor', 'Sale']
createdAt: "2021-10-14T04:25:57.640Z"
creatorId: "61577ec3ed29f1a47bb780e2"
deleted: false
description: "lorem lorem lorem lorem ipsum"
details: "blah blah"
id: "6167b15586c7ddb341c5f320"
img: "https://www.pngitem.com/pimgs/m/519-5192698_areca-palm-transparent-background-indoor-plants-png-png.png"
name: "Cactus"
price: 48
qty: 1
stock: 12
updatedAt: "2021-10-14T04:25:57.640Z"
*/
